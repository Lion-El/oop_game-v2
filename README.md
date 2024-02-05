# OOP Game V2

The OOP game is a phrase-guessing game based on well-known British phrases. The display is populated with placeholder elements that hide a well-known phrase that is randomly generated. Guesses are made via the physical or digital keyboard rendered to the display. This application was built with object-oriented programming as reflected in the name.

## Style Changes

When the start game is invoked, the header that covers the display is retracted to reveal the entire display of game features (default styles are also reset).

```JavaScript
const newGame = new Game();
gameAction.newGame = newGame;
newGame.startGame();
endGame.setAttribute('style', 'transform:rotate(0deg);');
overlay.setAttribute('style', 'top:-100%;');
endGame.innerText = '';
overlay.setAttribute('class', 'start');
```

The end game result is rendered to the page via the header sliding down into view with a message that is rendered to the screen based on the result. This message then spins 720 degrees after the header has completed its transition.

```CSS
#overlay {
  display: flex;
  flex-direction: column;
  position: fixed;
  color: #FFFFFF;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  border-radius: 5px;
  transition: top 0.4s linear;
}

h1 {
  font-size: 30px;
  font-weight: 400;
  transform: rotate(0);
  transition: all 0.4s 0.6s;
}
```
```JavaScript
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
```
