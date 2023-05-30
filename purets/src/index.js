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
        // private _courseCount = 1;
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
class SubUser extends classUser {
    constructor() {
        super(...arguments);
        //acquires all the properties of classUser excluding properties that are mentioned as private
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const classInni = new classUser("inni@gmail.com", "inni");
//classInni.name canot access name because name is private
//classInni.deleteToken(); private property.... so this function is only accessible in the class
<<<<<<< HEAD
class User {
    constructor(email, name) {
        this.city = "Seoul";
        this.email = email;
        this.name = name;
        this.city;
    }
}
=======
// class User {
//   email: string;
//   name: string;
//   readonly city: string = "Seoul";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city;
//   }
// }
>>>>>>> ebd3b20 (day 6)
//const inni = new User("inni@gmail.com", "inni");
//inni.city;
