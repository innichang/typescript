"use strict";
//creating a new user. email/userId/google login/ db id etc...
const interInni = {
    dbId: 54321,
    githubToken: "github",
    email: "inni@gmail.com",
    userId: 12345,
    role: "admin",
    startTrial: () => {
        return "trial started";
    },
    getCoupon: (name, off) => {
        return 10;
    }
};
interInni.email = "inseok@gmail.com";
// interInni.dbId = "1234" //cannot modify
