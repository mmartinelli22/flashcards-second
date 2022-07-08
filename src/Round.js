const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const card = new Card();
class Round {
    constructor(deck) {
        this.deck = deck;
        this.turnCount = 0;
        this.guess = null;
        this.turn = null;
        this.incorrectGuesses = [];
    };
    returnCurrentCard() {
        this.currentCard = this.deck[0];
        return this.currentCard;
    };
    takeTurn(guess) {
        const turn = new Turn(guess, card);
        this.turnCount++
        return turn;
    };
    calculatePercentCorrect() {
        if (this.incorrectGuesses.length === 0) {
            return 100;
        } else {
            return this.incorrectGuesses.length / this.turns * 100
        };

    }
    endRound() {
        return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`

    }
};
module.exports = Round;
