"use strict";
let score = 33;
score = 44;
score = "55";
let inni = {
    name: "Inni",
    id: 12345
};
inni = {
    userName: "inseok",
    id: 12345
};
// function getDatabaseId(id: number | string) {
//   //calls id through API
//   console.log(`DB id is: ${id}`);
// }
getDatabaseId(3);
getDatabaseId("3");
function getDatabaseId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id + 2;
    }
}
//Union Type applied to array
const data = [1, 2, 3];
const data2 = ["1", "2", "3"];
const data3 = [1, "2", true, 4];
let seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "cabin"  //cannot be cabin
