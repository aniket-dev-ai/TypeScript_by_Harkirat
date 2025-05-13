// let x = 1; // Type inferencing   auto assumes the type


let x: number = 1; 
console.log(x)

// PROBLEM 1

function greet(name:string){
    console.log("hello "+name);
}

greet("Aniket")

function sum(a:number,b:number){
    return a+b;
}

let ans:number = sum(5,10);

console.log(ans);


function isLegal(age:number):boolean{
    return age>18;
}

console.log(isLegal(20));



function anotherFunction(fn:()=> void){
    setTimeout(fn, 1000);
}

anotherFunction(
    function(){    console.log("Hello Aniket")}
);