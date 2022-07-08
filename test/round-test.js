const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck')
const Round = require('../src/Round');
describe('Round', function () {
    it('should be a function', function () {
        const card = new Card();
        const cards = [card];
        const deck = new Deck(cards);
        const round = new Round(deck);
        expect(Round).to.be.a('function');
    });
    it('should return card being played', function () {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(23, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'capybara');
        const cards = [card];
        const deck = new Deck([card, card2]);
        console.log(deck);
        const round = new Round(deck);
        round.returnCurrentCard();
        expect(round.returnCurrentCard()).to.equal(deck[0]);
    });
    it('should create a new instance of turn', function () {
        const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = new Card(23, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'capybara');
        const cards = [card];
        const guess = 'pug';
        const deck = new Deck([card, card2]);
        const round = new Round(deck);
        const turn = new Turn(guess, card);
        round.takeTurn();
        expect(round.takeTurn()).to.equal(turn);
    })
})
