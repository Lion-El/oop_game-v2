/*
 * OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
        this.array = [];
    }
    // add placeholder elements with text matching phrase
    addPhraseToDisplay() {
        let phraseArray = this.phrase.split('');
        phraseArray.forEach(letter => {
            if (/[a-z]/.test(letter)) {
                ul.insertAdjacentHTML('beforeend', `<li class="hide letter ${letter}">${letter}</li>`);
            } else {
                ul.insertAdjacentHTML('beforeend', `<li class="space">${letter}</li>`);
            }
        });
    }
    // store li elements with text matching phrase
    checkLetter(letterSelect) {
        const li = ul.childNodes;
        li.forEach(element => {
            if(element.textContent === letterSelect) {
                this.array.push(element);
            }
        });
    }
    // select and reveal previously stored elements that are hidden
    showMatchedLetter(letterSelect) {
        this.checkLetter(letterSelect);
        this.array
        .filter(element => element.matches('.hide'))
        .forEach(element => element.classList.replace('hide', 'show'));
    }

}