function myFunc(){
    console.log("Function is running");
}
myFunc();

//rest operator
function addNumber(num1,num2,...arr){
    return num1 + num2 + arr.reduce((acc,curr)=>acc+curr,0);
}
console.log(addNumber(10,20,30,40,50));

//closure Function

function one(){
    const FirstName = "Suraj ";
    function two(){
        const lastName = "Gund";
        console.log(FirstName + lastName)//output will be "Suraj Gund" as it has access to variable of parent 
    }
    //console.log(lastName)//Will give error as Scope of lastName is in function two only can't access outside the scope
    two();
}
one();


//Arrow Function
const arrowFunction = ()=>{
    const name = "Suraj"
    console.log(this.name)
}
arrowFunction();

//IIFE - Immediately Invoked Fuction Expression
(function iife(){
    console.log("IIFE Function executed")
})()
