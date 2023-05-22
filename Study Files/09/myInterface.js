//creating a new user. email/userId/google login/ db id etc...
var interInni = {
    dbId: 54321,
    email: "inni@gmail.com",
    userId: 12345,
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name, off) {
        return 10;
    }
};
interInni.email = "inseok@gmail.com";
// interInni.dbId = "1234" //cannot modify
