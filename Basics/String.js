let obj = {
    name:"Suraj",
    canFly:false,
    canTalk:true,
}

let coder = {
    canCode:true,
    canSolveDSA:true
}

coder.__proto__ = obj;
let a = 10;
function abcd(){
    let a = 12;
    return a;
}
console.log(a);
a = abcd();
console.log(a);
