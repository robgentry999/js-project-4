/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const startGameBtn = document.querySelector("#btn__reset")
const button = document.getElementsByClassName('key');


//event listener that calls startGame function when clicked
startGameBtn.addEventListener("click",  function() {game.startGame();});

//adds event listener for each letter that calls handleInteraction function
for(let i = 0; i < button.length; i++){
    button[i].addEventListener('click', event => {
        game.handleInteraction(event.target);
    });
}