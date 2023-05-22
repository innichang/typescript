// const user: (string | number)[] = [1, "Inni"];

let tUser: [string, number, boolean];

// tUser = [true, 123, "inni"] //doesn't work
tUser = ["inni", 123, true];

let rgb: [number, number, number] = [255, 132, 231];
//better because rgb oly contains 4 numbers

type tupleUser = [number, string];

const newUser: tupleUser = [112, "inni@gmail.com"];

newUser[1] = "inni.com";
newUser.push(1); //....?

export {};
