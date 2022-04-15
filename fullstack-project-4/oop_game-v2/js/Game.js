/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
  constructor(){
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }
//random phrases
  createPhrases(){
    return [
      new Phrase ("Spongebob"),
      new Phrase("Patrick"),
      new Phrase("Squidward"),
      new Phrase("Mr Krabs"), 
      new Phrase("Sandy Cheeks")
    ];

//creates random number used as index number for phrase
  }
  getRandomPhrase(){
    const number = Math.floor(Math.random() * this.phrases.length);
    const randomPhrase = this.phrases[number];
    return randomPhrase;
  }

//hides start screen overlay when start game is clicked
  startGame(){
    let overlay = document.getElementById("overlay")
//document.getElementById("btn__reset").addEventListener("click", () => overlay.style.display = 'none');
    overlay.style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    this.activePhrase.checkLetter();    
  }


   removeLife(){
     const images = document.getElementsByClassName("tries");

     for(let i = 0; i < images.length; i++){
       let image = images[i].firstElementChild;

       if(image.src.includes("images/liveHeart.png")){
         this.missed += 1;
         if(this.missed > 5 || this.missed === 5){
           this.gameOver(false);
         }
         return image.src = "images/lostHeart.png";
       }
     }


  }

  checkForWin(){
    const letter = document.querySelectorAll(".hide");
    if (letter.length === 0){
      return true;
    } else {
      return false;
    }

  }

  gameOver(gameWon){
   document.getElementById('overlay').style.display = 'block';

   if(gameWon === false){
     document.getElementById('game-over-message').textContent = "Game Over";
     document.getElementById('overlay').classList.add('lose');
     document.getElementById('overlay').classList.remove('start');
     this.missed = 0;
     this.reset();
   } else if(gameWon){
     document.getElementById('game-over-message').textContent = "You Won";
     document.getElementById('overlay').classList.add('win');
     document.getElementById('overlay').classList.remove('start');
     this.missed = 0;
     this.reset();
   }
  }

//adds corresponding class if chosen letter is right or wrong, removes life, and sets game
//over to true or false
  handleInteraction(event){
     if(this.activePhrase.checkLetter(event.textContent) === false){
       event.classList.add("wrong");
       this.removeLife();
       
     } else if (this.activePhrase.checkLetter(event.textContent)){
       event.classList.add("chosen");
       this.activePhrase.showMatchedLetter(event.textContent);
       this.checkForWin();
       if(this.checkForWin() === true){
         this.gameOver(true);
       }
       if(this.missed > 4){
         this.gameOver(false);
       }
     }
     event.disabled = true;
  }

  //restarts game
  reset(){
    document.querySelector("ul").textContent = '';
    const startButton = document.getElementById('btn__reset');
    startButton.textContent = "Play Again";

    const chosenLetters = document.querySelectorAll('.chosen');
    const wrongLetters = document.querySelectorAll('.wrong');

    
    for(let i = 0; i < chosenLetters.length; i++){
      chosenLetters[i].classList.remove('chosen');
      chosenLetters[i].disabled = false;
    }

    for(let i = 0; i < wrongLetters.length; i++){
      wrongLetters[i].classList.remove('wrong');
      wrongLetters[i].disabled = false;
    }

    const hearts = document.querySelectorAll('.tries img');
    for(let i = 0; i <= hearts.length; i++){
      hearts[i].src = 'images/liveHeart.png';
    }
    const phraseDiv = document.getElementById('phrase');
    const phraseUl = phraseDiv.firstElementChild;
    const phraseLi = phraseUl.getElementsByTagName("li");

    for(let i = 0; i < phraseLi.length; i++){
      phraseLi[i].classList.replace("show", "hide");
      
    }       
   }   
  }
