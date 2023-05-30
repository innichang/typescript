"use strict";
function detectType(arg) {
    if (typeof arg === "string")
        return arg.toLowerCase(); //(parameter) arg: string
    return arg; //(parameter) arg: number
}
//typescript following the exeuction of the code, and makes its decision of the
//most specific value type at the given situation.
//because typeof arg === 'string' must be true to execute the code block inside
//the if statement, toLowerCase() which is a string method can be used,
//and then in the 'else' part of the code, arg is already a number type
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    return id.toLowerCase();
}
//example of type guarding from official document
function printAll(strs) {
    if (strs !== null && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    }
    else if (typeof strs === "string") {
        console.log(strs);
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//example of instanceof narrowing from official document
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //  return shape.side * shape.side; //since it can be circle or square
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.width * shape.height;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
