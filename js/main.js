window.addEventListener('load',init);


//Globals

//Available levels

const levels = {
 easy : 5,
 medium : 3,
  hard : 2
};
//To change levels
const currentLevel = levels.medium;

let time=currentLevel;
let score=0;
let isPlaying;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

//Initialize Game

function init() {
  //Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  //load word from array
  showWord(words);
  //start matching on word Input
  wordInput.addEventListener('input', startMatch);
  //call countdown every second
  setInterval(countdown, 1000);
  //check game status
  setInterval(checkStatus, 50);

}

 //Start match
 function startMatch(){
   if(matchWords()){
     console.log('Match!!!');
     isPlaying = true;
     time = currentLevel + 1;
     showWord(words);
     wordInput.value='';
     score++;
   }
   //If score is -1 display 0
   if(score === -1){
     scoreDisplay.innerHTML=0;
   }
   else{
   scoreDisplay.innerHTML= score;
 }
 }

 //Match currentword to wordInput
 function matchWords(){
   if(wordInput.value === currentWord.innerHTML){
     message.innerHTML = 'Correct!!!';
     return true;
   }
   else{
     message.innerHTML= '';
     return false;
   }
 }

//Pick and show random word
function showWord(words){
  const randIndex = Math.floor(Math.random() * words.length);
  //output random words
  currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
  //make sure time is not runout
  if(time >0){
    //Decrement
    time--;
  }
  else if(time === 0){
    //Game is over
    isPlaying=false;
  }
  //Show Time
  timeDisplay.innerHTML= time;

}

//check game status
function checkStatus(){
if(!isPlaying && time === 0){
  message.innerHTML = 'Game Over!!!';
  score =-1;
}
}
