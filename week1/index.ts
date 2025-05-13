let x: number = 1; // x ek number type ka variable hai, value 1 assign ki gayi hai
console.log(x) // x ki value console par print hogi

// PROBLEM 1

function greet(name:string){ // greet function ek string parameter leta hai
    console.log("hello "+name); // "hello " ke saath name ko jod kar print karta hai
}

greet("Aniket") // greet function ko "Aniket" ke saath call kiya

function sum(a:number,b:number){ // sum function do number parameters leta hai
    return a+b; // dono numbers ka sum return karta hai
}

let ans:number = sum(5,10); // sum function ko 5 aur 10 ke saath call kiya, result ans me store kiya

console.log(ans); // ans ki value console par print ki

function isLegal(age:number):boolean{ // isLegal function ek number leta hai aur boolean return karta hai
    return age>18; // agar age 18 se badi hai to true, warna false return karega
}

console.log(isLegal(20)); // isLegal function ko 20 ke saath call kiya, result print kiya

function anotherFunction(fn:(name:string)=> void){ // anotherFunction ek function leta hai jo string parameter leta hai aur kuch return nahi karta
    setTimeout(fn, 1000); // us function ko 1 second (1000ms) baad call karta hai
}

anotherFunction(
    function(){    console.log("Hello Aniket")} // anonymous function diya, jo "Hello Aniket" print karega
);

anotherFunction(() => greet("Aniket The Great")); // arrow function diya, jo greet ko call karega

function greet2(user: {
    name:string,
    age : number
}){ // greet2 function ek object leta hai jisme name (string) aur age (number) hai
console.log("Hello ji ", user.name) // "Hello ji" ke saath user ka name print karta hai
}

let user={
    name:"Aniket",
    age:20
} // user object banaya jisme name aur age diya

greet2(user) // greet2 function ko user object ke saath call kiya

type UserType ={
    firstName:string,
    LastName:string,
    Age:number
} // UserType naam ka type banaya jisme firstName, LastName (string) aur Age (number) hai

function greeter(user:UserType){ // greeter function ek UserType object leta hai
    console.log(user.firstName) // user ka firstName print karta hai
    console.log(user.LastName) // user ka LastName print karta hai
    console.log(user.Age) // user ki Age print karta hai
}

let user2 = {
    firstName : "Aniket",
    LastName : "Srivastava",
    Age : 20
} // user2 object banaya jo UserType ke structure ko follow karta hai

greeter(user2) // greeter function ko user2 ke saath call kiya






type Users = Record<string,number>;

const userr : Users ={
    "Age1":19,
    "SexCount":0
}

console.log(userr)