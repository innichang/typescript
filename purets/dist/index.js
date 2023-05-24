"use strict";
// class classUser {
//   public email: string;
//   private name: string;
//   readonly city: string = "Seoul";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city;
//   }
// }
//instead of making a class like above you can also,
class classUser {
    constructor(email, name //private userId: string
    ) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Seoul";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    } //example of getter
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const classInni = new classUser("inni@gmail.com", "inni");
//classInni.name canot access name because name is private
//classInni.deleteToken(); private property.... so this function is only accessible in the class
console.log("here");
