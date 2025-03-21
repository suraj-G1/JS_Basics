//filter
const arr= [1,2,3,4,5];
const newArray = arr.filter((num)=> num!==3);//filter out on given condition and return new Array && Doesn't change original array
console.log(newArray,arr);

const addition = arr.reduce((acc,curr)=>{
    return acc+curr;
},5)
console.log(addition);


const add = arr.map((num)=>num+10);
console.log(arr);
console.log(add)

