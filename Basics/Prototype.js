const arr = ['a','b','c'];
console.log(arr);
Array.prototype.addNumber = function(){
    console.log("Here from Array");
}

arr.addNumber();
const obj = {
    name:'Suraj'
}
//obj.addNumber();