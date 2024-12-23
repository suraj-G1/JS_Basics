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

const string = "suraj-Gund";
console.log(string.slice(0));
console.log(string.replace('-',' '));

for(let i=1;i<=10;i++){
    console.log(Math.floor(Math.random()*(6-1+1))+1);
}
