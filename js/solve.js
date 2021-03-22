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
    constructor(cards) {

        this.cards = [];
        this.cardsPool = cards.sort(Card.sort);
        this.suits = {};
        this.values = [];
        
        this.sfLength = 0;
        this.sfQualify = 5;

        this.handRankings = [
            StraightFlush, 
            FourOfAKind, 
            FullHouse, 
            Flush, 
        //    Straight, 
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
        let excluding = [];
        excluding = excluding.concat(this.cards);
        let picks = this.cards.filter(function(card) {
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
                break;
            }
        }

        return result;
    }
}


class StraightFlush extends Hand {
    constructor(cards) {
        super(cards);
    }
  
    solve() {
        let cards;
        let possibleStraight = null;
        let nonCards = [];
  
        for (let suit in this.suits) {
            cards = this.getCardsForFlush(suit);
            if (cards && cards.length >= this.sfQualify) {
                possibleStraight = cards;
                break;
            } 
        }
  
        if (possibleStraight) {  
            let straight = new Straight(possibleStraight);
            if (straight.isPossible) {
                this.cards = straight.cards;
                this.cards = this.cards.concat(nonCards);
                this.sfLength = straight.sfLength;
            }
        }
  
        return (this.cards.length >= this.sfQualify);
    }
}

class FourOfAKind extends Hand {
    constructor(cards) {
      super(cards);
    }

    solve() {
        let cards = [];
        for (let i = 0; i < this.values.length; i++) {
            if (this.getNumCardsByRank(i) === 4) {
                cards = this.values[i] || [];        
                cards = cards.concat(this.nextHighest().slice(0,1));
                break;
            }
        }

        return (cards.length >= 4);
    }
}

class FullHouse extends Hand {
    constructor(cards) {
        super(cards);
    }

    solve() {

        for (let i = 0; i < this.values.length; i++) {
            if (this.getNumCardsByRank(i) === 3) {
                this.cards = this.values[i] || [];
                break;
            }
        }
    
        if (this.cards.length === 3) {
            for (let i = 0; i < this.values.length; i++) {
                if (this.getNumCardsByRank(i) >= 2) {
                    this.cards = this.cards.concat(this.values[i] || []);
                    break;
                }
            }
        }

        return (this.cards.length >= 5);
    }
}

class Flush extends Hand {
    constructor(cards) {
        super(cards);
    }

    solve() {
        this.sfLength = 0;

        for (let suit in this.suits) {
            let cards = this.getCardsForFlush(suit);
            if (cards.length >= this.sfQualify) {
                this.cards = cards;
                break;
            }
        }

        if (this.cards.length >= this.sfQualify) {
            this.sfLength = this.cards.length;
            if (this.cards.length < 5) {
                this.cards = this.cards.concat(this.nextHighest().slice(0, 5-this.cards.length));
            }
        }

        return (this.cards.length >= this.sfQualify);
    }
}

class Straight extends Hand {
    constructor(cards) {
      super(cards);
    }

    solve() {
        let card;

      // There are still some games that count the wheel as second highest.
      // These games do not have enough cards/wilds to make AKQJT and 5432A both possible.
        this.cards = this.getWheel(this.cardsPool);
        if (this.cards.length) {
            for (let i = 0; i < this.cards.length; i++) {
                card = this.cards[i];
                if (card.rank === 0) {
                    card.rank = values.indexOf('A');
                    card.wildValue = 'A';
                    if (card.value === '1') {
                        card.value = 'A';
                    }
                }
            }
          
            this.cards = this.cards.sort(Card.sort);

          
            this.sfLength = this.sfQualify;
            if (this.cards[0].value === 'A') {
                this.cards = this.cards.concat(this.nextHighest().slice(1, 5-this.cards.length+1));
            } else {
                this.cards = this.cards.concat(this.nextHighest().slice(0, 5-this.cards.length));
            }
          
            return true;
        }
        
        this.cards = this.getGaps();

        if (this.cards.length >= this.game.sfQualify) {
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

        return this.cards.length >= this.sfQualify;
    }

    /**
     * Get the number of gaps in the straight.
     * @return {Array} Highest potential straight with fewest number of gaps.
     */
    getGaps(checkHandLength) {
        let cardsToCheck, i, card, gapCards, cardsList, gapCount, prevCard, diff;

        for (let i = 0; i < cardsToCheck.length; i++) {
            card = cardsToCheck[i];
            if (card.wildValue === 'A') {
                cardsToCheck.push(new Card('1' + card.suit));
            }
        }
        cardsToCheck = cardsToCheck.sort(Card.sort);

        if (checkHandLength) {
            i = cardsToCheck[0].rank + 1;
        } else {
            checkHandLength = this.sfQualify;
            i = values.length;
        }

        gapCards = [];
        for (; i>0; i--) {
            cardsList = [];
            gapCount = 0;
            for (let j=0; j<cardsToCheck.length; j++) {
                card = cardsToCheck[j];
                if (card.rank > i) {
                    continue;
                }
                prevCard = cardsList[cardsList.length - 1];
                diff = (prevCard) ? prevCard.rank - card.rank : i - card.rank;

                if (diff === null) {
                    cardsList.push(card);
                 } else if (checkHandLength < (gapCount + diff + cardsList.length)) {
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

    getWheel(cardsPool) {
        let card, wheelCards, cardFound;

        wheelCards = [];
        for (let i = 4; i>=0; i--) {
            cardFound = false;
            for (let j = 0; j < cardsPool.length; j++) {
                card = cardPool[j];
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
    constructor(cards) {
        super(cards);
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
    constructor(cards) {
        super(cards);
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
    constructor(cards) {
      super(cards);
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
    constructor(cards) {
        super(cards);
    }

    solve() {
        this.cards = this.cardsPool.slice(0, 5);
        for (let i = 0; i < this.cards.length; i++) {
            let card = this.cards[i];
        }

        return true;
    }
}