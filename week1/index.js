"use strict";
let x = 1;
console.log(x);
function greet(name) {
    console.log("hello " + name);
}
greet("Aniket");
function sum(a, b) {
    return a + b;
}
let ans = sum(5, 10);
console.log(ans);
function isLegal(age) {
    return age > 18;
}
console.log(isLegal(20));
function anotherFunction(fn) {
    setTimeout(fn, 1000);
}
anotherFunction(function () { console.log("Hello Aniket"); });
anotherFunction(() => greet("Aniket The Great"));
function greet2(user) {
    console.log("Hello ji ", user.name);
}
let user = {
    name: "Aniket",
    age: 20
};
greet2(user);
function greeter(user) {
    console.log(user.firstName);
    console.log(user.LastName);
    console.log(user.Age);
}
let user2 = {
    firstName: "Aniket",
    LastName: "Srivastava",
    Age: 20
};
greeter(user2);
