var score = 33;
score = 44;
score = "55";
var inni = {
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
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = [1, "2", true, 4];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "cabin"  //cannot be cabin
