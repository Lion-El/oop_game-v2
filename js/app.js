/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const overlay = document.getElementById('overlay');
const button = document.getElementById('btn__reset');
const ul = document.querySelector('ul');
const keys = document.querySelectorAll('.key');

const gameAction  = {
    gameObject: null,

    set newGame(newGame) {
        this.gameObject = newGame; 
    },

    get newGame() {
        return this.gameObject;
    }
}

button.addEventListener('click', () => {
    const newGame = new Game();
    const startGame = gameAction.newGame = newGame;
    startGame.startGame();
});

keys.forEach(key => {
    key.addEventListener('click', () => {
        const currentGame = gameAction.newGame;
        currentGame.handleInteraction(key);
    })
});

