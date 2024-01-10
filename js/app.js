/*
 * OOP Game App
 * app.js */
const overlay = document.getElementById('overlay');
const endGame = document.getElementById('game-over-message');
const button = document.getElementById('btn__reset');
const ul = document.querySelector('ul');
const keys = document.querySelectorAll('.key');
const lives = document.querySelectorAll('img');
// new Game repository
const gameAction  = {
    gameObject: null,

    set newGame(newGame) {
        this.gameObject = newGame; 
    },

    get newGame() {
        return this.gameObject;
    }
}
//reset default styles and start new game
button.addEventListener('click', () => {
    const li = ul.childNodes;
    if (li.length > 0) {
        Array.from(li).forEach(element => {
            element.classList.replace('show', 'hide');
            ul.removeChild(element);
        });
    
        Array.from(keys).forEach(element => {
            element.removeAttribute('disabled');
            element.setAttribute('class', 'key');
        });
        
        Array.from(lives).forEach(element => {
            element.setAttribute('src', 'images/liveHeart.png');
        });
    }
    
    const newGame = new Game();
    gameAction.newGame = newGame;
    newGame.startGame();
    endGame.setAttribute('style', 'transform:rotate(0deg);');
    overlay.setAttribute('style', 'top:-100%;');
    endGame.innerText = '';
    overlay.setAttribute('class', 'start');
});
//get current game access to inital method
keys.forEach(key => {
    key.addEventListener('click', () => {
        const currentGame = gameAction.newGame;
        currentGame.handleInteraction(key);
    })
});
// keyboard eventlistener - access the current game method
document.addEventListener('keydown', (e) => {
    const currentGame = gameAction.newGame;
    currentGame.handleInteraction(e.key);
});


