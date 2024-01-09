/* 
 * OOP Game App
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
    // create phrase object with random phrase and add to display 
    startGame() {
        this.activePhrase = this.getRandomPhrase();
        this.phraseObject = new Phrase(this.activePhrase);
        this.phraseObject.addPhraseToDisplay();
    }
    // return random phrase/text node
    getRandomPhrase() {
        let index = Math.floor(Math.random()*this.phrases.length);
        return this.phrases
        .filter((object) => object === this.phrases[index])
        .map((object) => object.phrase).shift().toLowerCase();
    }
    // set keyboard/button element display styles based on selection
    setAttributes(selection) {
        const button = Array.from(keys);
        const userSelection = button
        .filter(element => element.innerText === selection)
        .shift();
        if (userSelection) {
            if (userSelection.matches('.key')) {
                if (!this.activePhrase.includes(selection)) {
                    userSelection.setAttribute('disabled', 'true');
                    userSelection.setAttribute('class', 'wrong');
                    this.removeLife();
                } else {
                    userSelection.setAttribute('disabled', 'true');
                    userSelection.setAttribute('class', 'chosen');
                    this.phraseObject.showMatchedLetter(selection);
                    let result = this.checkForWin();
                    this.gameOver(result);
                }
            }
        }
    }

    handleInteraction(button) {
        if (button === `${button}` ) {
            this.setAttributes(button);
        } else {
            this.setAttributes(button.textContent);
        }
    }

    removeLife() {
        lives[this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed++;
        if (this.missed === 5) {
            this.gameOver('lose');
        }
    }
    // compare length of stored matching selection with phrase element length
    checkForWin() {
        const li = Array.from(ul.childNodes);
        const liArray = li
        .filter(element => !element.matches('.space'));
        if (this.phraseObject.array.length === liArray.length) {
            return 'win';
        }
    }
    // set display styles based on result
    gameOver(result) {
        if (result === 'win') {
            endGame.innerText = 'You Smashed It! Well done.';
            overlay.classList.replace('start', 'win');
            overlay.setAttribute('style','top:0;');
            endGame.setAttribute('style' ,'transform:rotate(720deg);');
        } else if (result === 'lose') {
            endGame.innerText = 'Unlucky! Good try.';
            overlay.classList.replace('start', 'lose');
            overlay.setAttribute('style','top:0;');
            endGame.setAttribute('style' ,'transform:rotate(720deg);');
        }
    }
}