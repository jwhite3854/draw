class Card {
    constructor(value, suit){
        this.value = value;
        this.suit = suit;

        this.rank = ['X','2','3','4','5','6','7','8','9','T','J','Q','K','A'].indexOf(value);
    }

    static sort(a, b) {
        if (a.rank > b.rank) {
            return -1;
        } else if (a.rank < b.rank) {
            return 1;
        } else {
            return 0;
        }
    }
}

class Hand {
    constructor(cardsPool, best = '') {

        this.cards = [];
        this.cardsPool = cardsPool.sort(Card.sort);
        this.suits = {};
        this.values = [];

        this.sfLength = 0;
        this.best = best;

        this.handRankings = [
            StraightFlush, 
            FourOfAKind, 
            FullHouse, 
            Flush, 
            Straight, 
            ThreeOfAKind, 
            TwoPair, 
            OnePair, 
            HighCard
        ];

        this.handRank = this.handRankings.length;

        for (let i = 0; i < this.handRankings.length; i++) {
            if (this.handRankings[i] === this.constructor) {
                break;
            }
            this.handRank--;
        }

        // Create the arrays of suits and values.
        let obj, obj1, key, key1, card;
        for (let i = 0; i < this.cardsPool.length; i++) {
            // Make sure this value already exists in the object.
            card = this.cardsPool[i];

            (obj = this.suits)[key = card.suit] || (obj[key] = []);
            (obj1 = this.values)[key1 = card.rank] || (obj1[key1] = []);

            // Add the value to the array for that type in the object.
            this.suits[card.suit].push(card);
            this.values[card.rank].push(card);
        }
 
        this.values.reverse();
        this.isPossible = this.solve();
    }

    /**
     * Determine the number of cards in a hand of a rank.
     * @param  {Number} val Index of this.values.
     * @return {Number} Number of cards having the rank, including wild cards.
     */
    getNumCardsByRank(val) {
        let cards = this.values[val];

        return (cards) ? cards.length : 0;
    }

    /**
     * Determine the cards in a suit for a flush.
     * @param  {String} suit Key for this.suits.
     * @return {Array} Cards having the suit, including wild cards.
     */
    getCardsForFlush(suit) {
        return (this.suits[suit] || []).sort(Card.sort);
    }

    /**
     * Highest card comparison.
     * @return {Array} Highest cards
     */
    nextHighest() {
        let excluding = this.cards;
        let picks = this.cardsPool.filter(function(card) {
            if (excluding.indexOf(card) < 0) {
                return true;
            }
        });

        return picks;
    }

    /**
     * Build and return the best hand.
     * @return {Hand}       Best hand.
     */
    solve() {

        let result = null;
        for (let i = 0; i < this.handRankings.length; i++) {
            let evaluation = this.handRankings[i];
            result = new evaluation(this.cardsPool);
            if (result.isPossible) {
                this.best = result.best;
                this.cards = result.cards;
                break;
            }
        }

        return result;
    }
}

class StraightFlush extends Hand {
    constructor(cardsPool) {
        super(cardsPool, 'Straight Flush');
    }
  
    solve() {
        let cards;
        let possibleStraight = null;
  
        for (let suit in this.suits) {
            cards = this.getCardsForFlush(suit);
            if (cards && cards.length >= 5) {
                possibleStraight = cards;
                break;
            } 
        }
  
        if (possibleStraight) {  
            let straight = new Straight(possibleStraight);
            if (straight.isPossible) {
                this.cards = straight.cards;
                this.sfLength = straight.sfLength;
            }
        }

        return (this.cards.length >= 5);
    }
}

class FourOfAKind extends Hand {
    constructor(cardsPool) {
      super(cardsPool, 'Four of a Kind');
    }

    solve() {
        for (let i = 0; i < this.values.length; i++) {
            if (this.getNumCardsByRank(i) === 4) {
                this.cards = this.values[i] || [];        
                this.cards = this.cards.concat(this.nextHighest().slice(0,1));
                break;
            }
        }

        return (this.cards.length >= 4);
    }
}

class FullHouse extends Hand {
    constructor(cardsPool) {
        super(cardsPool, 'Full House');
    }

    solve() {

        let bigSet = 0;
        for (let i = 0; i < this.values.length; i++) {
            if (this.getNumCardsByRank(i) === 3) {
                this.cards = this.values[i] || [];
                bigSet = i;
                break;
            }
        }
    
        if (this.cards.length === 3) {
            for (let i = 0; i < this.values.length; i++) {
                if (this.getNumCardsByRank(i) >= 2 && i !== bigSet) {
                    this.cards = this.cards.concat(this.values[i] || []);
                    break;
                }
            }
        }

        return (this.cards.length >= 5);
    }
}

class Flush extends Hand {
    constructor(cardsPool) {
        super(cardsPool, 'Flush');
    }

    solve() {
        this.sfLength = 0;

        for (let suit in this.suits) {
            let cards = this.getCardsForFlush(suit);
            if (cards.length >= 5) {
                this.cards = cards;
                break;
            }
        }

        if (this.cards.length >= 5) {
            this.sfLength = this.cards.length;
            if (this.cards.length < 5) {
                this.cards = this.cards.concat(this.nextHighest().slice(0, 5-this.cards.length));
            }
        }

        return (this.cards.length >= 5);
    }
}

class Straight extends Hand {
    constructor(cardsPool) {
      super(cardsPool, 'Straight');
    }

    solve() {

        this.cards = this.getWheel();

        if (this.cards.length >= 5) {
            this.name += ', Wheel';
            this.sfLength = 5;
            if (this.cards[0].value === 'A') {
                this.cards = this.cards.concat(this.nextHighest().slice(1, 6-this.cards.length));
            } else {
                this.cards = this.cards.concat(this.nextHighest().slice(0, 5-this.cards.length));
            }
          
            return true;
        }

        this.cards = this.getRun();

        if (this.cards.length >= 5) {
            this.cards = this.cards.slice(0, 5);
        }

        

        return (this.cards.length >= 5);
    }

    getRun() {
        let cards = this.cardsPool;

        for (let i = 0; i < 3; i++) {
            let topRank = cards[i].rank;
            let run = [];
            outer_loop:
            for (let j = topRank; j >= 0; j--) {
                for (let k = 0; k < cards.length; k++) {
                    if (cards[k].rank > j) {
                        continue;
                    }
                    if (cards[k].rank < j) {
                        break outer_loop;
                    }
                    run.push(cards[k]);
                    break;
                }
            }

            if (run.length >= 5) {
                return run;
            }
        }

        return [];
    }

    getWheel() {
        let cards = this.cardsPool;

        for (let i = 0; i < cards.length; i++) {
            if (cards[i].value === 'A') {
                cards[i].rank = 0;
            }
        }

        cards.sort(Card.sort);
        
        let wheelCards = [];        
        for (let i = 4; i >= 0; i--) {
            for (let j = 0; j < cards.length; j++) {
                if (cards[j].rank > i) {
                    continue;
                }
                if (cards[j].rank < i) {
                    break;
                }
                wheelCards.push(cards[j]);
                break;
            }
        }

        return wheelCards;
    }
}

class ThreeOfAKind extends Hand {
    constructor(cardsPool) {
        super(cardsPool, 'Three of a Kind');
    }

    solve() {
        for (let i = 0; i < this.values.length; i++) {
            if (this.getNumCardsByRank(i) === 3) {
                this.cards = this.values[i] || [];
                this.cards = this.cards.concat(this.nextHighest().slice(0, 2));
                break;
            }
        }
        
        return (this.cards.length >= 3);
    }
}

class TwoPair extends Hand {
    constructor(cardsPool) {
        super(cardsPool, 'Two Pair');
    }

    solve() {
        for (let i = 0; i < this.values.length; i++) {
            let cards = this.values[i];
            if (this.cards.length > 0 && this.getNumCardsByRank(i) === 2) {
                this.cards = this.cards.concat(cards || []);
                this.cards = this.cards.concat(this.nextHighest().slice(0, 1));
                break;
            } else if (this.getNumCardsByRank(i) === 2) {
                this.cards = this.cards.concat(cards);   
            }
        }

        return (this.cards.length >= 4);
    }
}

class OnePair extends Hand {
    constructor(cardsPool) {
      super(cardsPool, 'One Pair');
    }

    solve() {
        for (let i = 0; i < this.values.length; i++) {
            if (this.getNumCardsByRank(i) === 2) {
                this.cards = this.cards.concat(this.values[i] || []);
                this.cards = this.cards.concat(this.nextHighest().slice(0, 5));
                break;
            }
        }

        return (this.cards.length >= 2);
    }
}

class HighCard extends Hand {
    constructor(cardsPool) {
        super(cardsPool, 'High Card');
    }

    solve() {
        this.cards = this.cardsPool.slice(0, 5);

        return true;
    }
}