let score = 33;
let string = String(score);
console.log(typeof string);//String
let a = 123;
console.log(null === undefined);//false
console.log(+true);
console.log(+null);
console.log(+undefined);
console.log(a++,++a);
if(console.log(console.log("true"))){
    console.log("True")
}else{
    console.log("False");
}

console.log(null != undefined);
console.log(null !== undefined);

console.log(NaN == NaN);
console.log(NaN === NaN);
function abcd(a){
    console.log(a);
    a = "def";
}
a = "abc";
abcd(a);
console.log(a);
const isLogged = true;
//isLogged = false;
const id = Symbol('123');
const id2 = Symbol('123');
console.log(id,id2);
const obj = {
    name:'suraj',
    myFunction:()=>{
        console.log("My Function");
    }
}
console.log(typeof obj.myFunction);
