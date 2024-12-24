const human={
    name:"Suraj",
    "full name" : "Suraj Gund",
    email:"sg@gmail.com",
    city:"Solapur",
    isLoggedIn:false

}
console.log(human["full name"]);
console.log(human.isLoggedIn);

//using symbol as key in object
const sym = Symbol(123);
const obj = {
    [sym]:"Suraj"
}

console.log(obj);

obj.greeting=function(){
    console.log("Hello There");
}
obj.greeting();
//console.log(console.log());


//Spread operator
const a = {1:"suraj",2:"Gund"};
const b = {3:"abcd",4:"gund"};
const c = {...a,...b};
console.log(c);

//Destructuring

const {name} = human;
console.log(name);

