/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        let phraseArray = this.phrase.split('');
        console.log(phraseArray);
        phraseArray.forEach(letter => {
            if (/[a-z]/.test(letter)) {
                ul.insertAdjacentHTML('beforeend', `<li class="hide letter ${letter}">${letter}</li>`);
            } else {
                ul.insertAdjacentHTML('beforeend', `<li class="space">${letter}</li>`);
            }
        });
    }

    checkLetter() {

    }

    showMatchedLetter(letter) {
        const li = ul.querySelectorAll('li');
        li.forEach(element => {
            if (element.textContent === letter) {
                element.classList.replace('hide', 'show');
            }
        });
    }

}