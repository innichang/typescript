"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //num.toUpperCase; //when num doesn't have type checking, it can use string methods
    //return num + 2;
    //return "hello"; //doesn't pop an error....
    return num + 2;
} //Can put whatever type I want to accept, and what type to return
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
const loginUser = (name, email, isPaid = false) => { };
let myValue = addTwo(5);
getUpper("Inseok");
signUpUser("Inseok", "inni@gmail.com", false);
loginUser("Inseok", "inni@gmail.com");
// function getValue(myVal: number): boolean | string {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 OK"
// }
const getHello = (s) => {
    return "";
};
const heroes = ["thor", "spiderman", "ironman"];
// const heroes = [1, 2, 3]
//(hero): string declares the return value
heroes.map((hero) => {
    return `hero is ${hero}`;
}); //in this case, we don't need to decalre the type of 'hero' because ts considers the input value
//but return type needs to be declared
// function consoleError(err:string): void{
//     console.log(err);
// }
function handleError(err) {
    throw new Error(err);
}
