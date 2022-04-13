/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

  

  addPhraseToDisplay(){
     const phraseUl = document.getElementById("phrase").firstElementChild;
     const randoPhrase = this.phrase.split("");

     for(let i = 0; i < this.phrase.length; i++){
       const phraseli = document.createElement("li");
       if (this.phrase[i] === " "){
         phraseli.classList.add("space");
         phraseli.textContent = this.phrase[i];
         phraseUl.appendChild(phraseli);
       } else {
         phraseli.classList.add("hide");
         phraseli.classList.add("letter");
         phraseli.textContent = this.phrase[i];
         phraseUl.appendChild(phraseli);
       }
       
       
     }
  }
  /*checks to see if the letter selected by the player matches a letter in the phrase.*/
  checkLetter(letter){
   return this.phrase.includes(letter);
   
  }

  showMatchedLetter(letter){
    const phraseDiv = document.getElementById('phrase');
    const phraseUl = phraseDiv.firstElementChild;
    const phraseLi = phraseUl.getElementsByTagName("li");

    for(let i = 0; i < phraseLi.length; i++){
      if(phraseLi[i].textContent === letter){
       phraseLi[i].classList.replace("hide", "show")
      }
    }
  };

};