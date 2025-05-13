// let x = 1; // Type inferencing   auto assumes the type


let x: number = 1; 
console.log(x)

// PROBLEM 1

function greet(name:string){
    console.log("hello "+name);
}

greet("Aniket")