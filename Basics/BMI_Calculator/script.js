
// console.log(height,weight);
const button = document.querySelector('button');
console.log(button);

button.addEventListener('click',(e)=>{
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    if( !height || height < 0 || isNaN(height)){
        result.innerHTML = "<span>Height is not a number</span>"
    }
    else if(!weight || weight < 0|| isNaN(weight)){
       result.innerHTML = "<span>Width is not a number</span>"
    }else{
        const answer = (weight/((height*height)/10000)).toFixed(2);
        if(answer<19){
            result.innerHTML = `BMI is ${answer} - Under Weight`
        }else if(answer >=19 && answer <=26){
            result.innerHTML = `BMI is ${answer} - Normal Weight`
        }else{
            result.innerHTML = `BMI is ${answer} - Over Weight`
        }
    }


})