
const button = document.querySelector('#button');
const prevGuessArray = [];
let maxAttemt = 10;
const randomNumber = Math.floor(Math.random()*100)+1;

button.addEventListener('click',(e)=>{
    console.log(randomNumber)
    const input = parseInt(document.querySelector('#input').value);
    const result = document.querySelector('#result');
    const prevGuess = document.querySelector('#prevGuess');
    // console.log(input)
    if(!input || input<0 || input>100 || isNaN(input)){
        result.innerHTML = "Please Enter a Number"
    }
    if(maxAttemt<0){
        result.innerHTML = "You Lost"
    }
    if(input == randomNumber){
        result.innerHTML = "You Won"
    }
    maxAttemt = maxAttemt - 1;
    prevGuessArray.push(input);
    prevGuess.innerHTML = `Previous Guess ${prevGuessArray}`
    
    const remain = document.querySelector('#remain');
    remain.innerHTML = `Remaining Attempt :${maxAttemt}`
    
    
    
    

})