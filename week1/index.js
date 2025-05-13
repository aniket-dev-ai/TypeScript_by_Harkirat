"use strict";
// let x = 1; // Type inferencing   auto assumes the type
let x = 1;
console.log(x);
// PROBLEM 1
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


