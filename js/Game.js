/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            {phrase: 'A few sandwiches short of a picnic'}, 
            {phrase: 'Bobs your uncle'}, 
            {phrase: 'Give me a tinkle on the blower'}, 
            {phrase: 'Over egg the pudding'}, 
            {phrase: 'Spanner in the works'}
        ];
        this.activePhrase = null;
        this.phraseObject = null;
    }

    // set newPhrase(newPhrase) {
    //     this.phrase = newPhrase; 
    // }

    // get newPhrase() {
    //     return this.phrase;
    // }

    startGame() {
        overlay.setAttribute('style','display:none;');
        this.activePhrase = this.getRandomPhrase();
        console.log(this.activePhrase);
        this.phraseObject = new Phrase(this.activePhrase);
        this.phraseObject.addPhraseToDisplay();
    }

    getRandomPhrase() {
        let index = Math.floor(Math.random()*this.phrases.length);
        return this.phrases
        .filter((object) => object === this.phrases[index])
        .map((object) => object.phrase).shift();
    }

    handleInteraction(button) {
        console.log(button);
        if (!this.activePhrase.includes(button.textContent)) {
            button.setAttribute('disabled', '');
        } else {
            button.setAttribute('class', 'chosen');
            this.phraseObject.showMatchedLetter(button.textContent);
        }
    }

    removeLife() {

    }

    checkForWin() {

    }

    gameOver() {
        
    }
}