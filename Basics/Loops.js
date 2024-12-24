//For loop
for(let index=0;index<=10;index++){
    console.log(index);
}

//While Loop
let i = 0//initialization
while(i<=10){//validation
    console.log(i);
    i++;//updation
}

//do-while loop
 i = 10;
do{
    console.log(i);
    i++;
}while(i<=20)


//for-of loop
//for only arrays
const arr=[1,2,3,4,5];
for (const iterator of arr) {
    console.log(iterator); 
}
const obj={
    name:"Suraj",
    City:"Solapur"
}

//for objects and array
for (const value in obj ) {
    console.log(obj[value]);
}

//forEach loop
//requires callback function(can take normal and arrow function)
arr.forEach((value)=>{
    console.log(value);
})