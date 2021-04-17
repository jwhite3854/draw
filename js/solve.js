let numbers = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
let suits = ['s','h','d','c'];

class Card {
    constructor(value, suit){
        this.value = value;
        this.suit = suit;

        let ranks =  ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
        this.rank = ranks.indexOf(value);
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

        this.rank = this.handRankings.length;

        for (let i = 0; i < this.handRankings.length; i++) {
            if (this.handRankings[i] === this.constructor) {
                break;
            }
            this.rank--;
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
        let card;

        this.cards = this.getWheel();

        if (this.cards.length) {
            for (let i = 0; i < this.cards.length; i++) {
                card = this.cards[i];
                if (card.rank === 0) {
                    card.rank = this.values.indexOf('A');
                    if (card.value === '1') {
                        card.value = 'A';
                    }
                }
            }
          
            this.cards = this.cards.sort(Card.sort);          
            this.name += ', Wheel';
            this.sfLength = 5;
            if (this.cards[0].value === 'A') {
                this.cards = this.cards.concat(this.nextHighest().slice(1, 6-this.cards.length));
            } else {
                this.cards = this.cards.concat(this.nextHighest().slice(0, 5-this.cards.length));
            }
          
            return true;
        }

        this.cards = this.getGaps();

        if (this.cards.length >= 5) {
            this.cards = this.cards.slice(0, 5);
            this.sfLength = this.cards.length;
            if (this.cards.length < 5) {
                if (this.cards[this.sfLength-1].rank === 0) {
                    this.cards = this.cards.concat(this.nextHighest().slice(1, 6-this.cards.length));
                } else {
                    this.cards = this.cards.concat(this.nextHighest().slice(0, 5-this.cards.length));
                }
            }
        }

        return this.cards.length >= 5;
    }


    getGaps() {
        let card, cardsList, gapCount, prevCard, diff;

        let cardsToCheck = this.cardsPool;

        let gapCards = [];
        for (let i = cardsToCheck[0].rank + 1; i > 0; i--) {
            cardsList = [];
            gapCount = 0;
            for (var j=0; j<cardsToCheck.length; j++) {
                card = cardsToCheck[j];
                if (card.rank > i) {
                    continue;
                }
                prevCard = cardsList[cardsList.length - 1];
                diff = (prevCard) ? prevCard.rank - card.rank : i - card.rank;

                if (diff === null) {
                    cardsList.push(card);
                } else if (5 < (gapCount + diff + cardsList.length)) {
                    break;
                } else if (diff > 0) {
                    cardsList.push(card);
                    gapCount += (diff - 1);
                }
            }
        
            if (cardsList.length > gapCards.length) {
                gapCards = cardsList.slice();
            }
        }

      return gapCards;
    }

    getWheel() {
        let cards = this.cardsPool;
        for (let i = 0; i < cards.length; i++) {
            if (cards[i].value === 'A') {
                cards[i].value = '1';
                cards[i].rank = -1;
            }
        }

        console.log(cards);

        let wheelCards = [], cardFound = false, card;
        for (let i = 3; i > -1; i--) {
            console.log("===============================");
            cardFound = false;
            for (let j = 0; j < cards.length; j++) {
                card = cards[j];
                if (card.rank > i) {
                    continue;
                }
                if (card.rank < i) {
                    break;
                }
                wheelCards.push(card);
                cardFound = true;
                break;
            }
        }
        
        if (wheelCards.length >= 5) {
            for (let i = 0; i < wheelCards.length; i++) {
                if (wheelCards[i].value === '1') {
                    wheelCards[i].value = 'A';
                }
            }
        }

        console.log(wheelCards);

        return wheelCards;
    }
}

class Straight1 extends Hand {
    constructor(cardsPool) {
      super(cardsPool, 'Straight');
    }

    solve() {
        let card;
        this.cards = this.getWheel(this.cardsPool);
        if (this.cards.length) {
            for (let i = 0; i < this.cards.length; i++) {
                card = this.cards[i];
                if (card.rank === 0) {
                    card.rank = this.values.indexOf('A');
                    if (card.value === '1') {
                        card.value = 'A';
                    }
                }
            }
          
            this.cards = this.cards.sort(Card.sort);

          
            this.sfLength = 5;
            if (this.cards[0].value === 'A') {
                this.cards = this.cards.concat(this.nextHighest().slice(1, 5-this.cards.length+1));
            } else {
                this.cards = this.cards.concat(this.nextHighest().slice(0, 5-this.cards.length));
            }
          
            return true;
        }
        
        if (this.cards.length >= 5) {
            this.cards = this.cards.slice(0, 5);
            this.sfLength = this.cards.length;
            if (this.cards.length < 5) {
                if (this.cards[this.sfLength-1].rank === 0) {
                    this.cards = this.cards.concat(this.nextHighest().slice(1,5-this.cards.length+1));
                } else {
                    this.cards = this.cards.concat(this.nextHighest().slice(0, 5-this.cards.length));
                }
            }
        }

        return this.cards.length >= 5;
    }

    getWheel(cardsPool) {
        let card, wheelCards, cardFound;

        wheelCards = [];
        for (let i = 4; i>=0; i--) {
            cardFound = false;
            for (let j = 0; j < cardsPool.length; j++) {
                card = cardsPool[j];
                if (card.rank > i) {
                    continue;
                }
                if (card.rank < i) {
                    break;
                }
                wheelCards.push(card);
                cardFound = true;
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