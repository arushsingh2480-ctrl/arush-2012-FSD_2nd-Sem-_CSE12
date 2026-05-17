function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3));//func expression
let add=(a,b)=>a+b;
console.log(add(2,3));
let subtract=(a,b)=>a-b;
console.log(subtract(5,3));
let sayHi=()=>console.log("hi!");
sayHi()