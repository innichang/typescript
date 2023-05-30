"use strict";
// const socre: Array<number> = [];
// const names: Array<string> = []
function identityOne(arg) {
    return arg;
}
function identityTwo(arg) {
    return arg;
}
function identityThree(arg) {
    return arg;
}
//when a certain data type is passed to the function,
//<Type> remembers the type of the argument and saves it.
function identityFour(arg) {
    return arg;
} //same as identityThree
identityFour("String");
// identityFour<Bottle>({ brand: "SamDaSoo", type: 2 });
function getSearchProducts(products) {
    return products[3];
} //should be one of the values from that array
//EExamples of using Generics in arrow function
const getMoreSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
const myObject = {
    connection: "connection",
    username: "username",
    password: "password"
};
//example of generics having 2 types
function anotherFunction(argOne, argTwo) {
    return {
        argOne,
        argTwo
    };
}
anotherFunction(3, myObject); //example
//example from documentation
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4, m: 5 };
getProperty(x, "a");
getProperty(x, "m");
let a = [1, 2, 3, 4, 5];
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
