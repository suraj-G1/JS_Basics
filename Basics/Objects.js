const human={
    name:"Suraj",
    "full name" : "Suraj Gund",
    email:"sg@gmail.com",
    city:"Solapur",
    isLoggedIn:false

}
human.abc = "abc";
console.log(human);
console.log(human["full name"]);
console.log(human.isLoggedIn);

//using symbol as key in object
const sym = Symbol(123);
const obj = {
    [sym]:"Suraj"
}
console.log("Here",obj);

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


//Looping through Keys and Values of Object
console.log(Object.keys(human));
console.log(Object.values(human));
console.log(Object.entries(human));

