class Card {
    constructor(suit, value) {
        this._suit  = suit;
        this._value = value;
      //  console.log(`${this._value} of ${this._suit}`);
    }
}

class Deck {
    constructor() {
        var suits   = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        var values  = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 'Jack', 'Queen', 'King'];
        this.deck   = [];
        for (let value of values) {
            for (let suit of suits) {
                this.deck.push(new Card(suit, value));
            }
        }
    }
    reset() {
        this.deck = [];
    }
    shuffle() {
        var t, i, m = this.deck.length;
        // While there remain elements to shuffle…
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);
            // And swap it with the current element.
            t = this.deck[m];
            this.deck[m] = this.deck[i];
            this.deck[i] = t;
        }
        return this.deck;
    }
    deal() {
        // var len = this.deck.length;
        // var i = Math.floor(Math.random() * len);
        return this.deck.pop();
    }
}

class Player {
    constructor(name) {
        this._name = name;
        this.hand = [];
    }
    drawHand(num, deck) {
        for (let i = 0; i < num; i++) {
            this.hand.push(deck.deal());
        }
    }
    drawCard(deck) {
        this.hand.push(deck.deal());
    }
    discard(suit, value) {
        var del = new Card(suit, value);
        return this.hand.pop(del);
        //find out the index of the card to be removed
        //use splice to remove the card
    }
}

deck1 = new Deck();
console.log(deck1);

deck1.shuffle();
console.log(deck1);
console.log(deck1.deal());

player = new Player("KGB");
player.drawHand(5, deck1);

console.log(player);
console.log(player.discard('Spades', 4));
console.log(deck1);