let score: number | string = 33;
score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: number;
};

let inni: User | Admin = {
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

function getDatabaseId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id + 2;
  }
}

//Union Type applied to array
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = [1, "2", true, 4];

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "cabin"  //cannot be cabin
