// const socre: Array<number> = [];
// const names: Array<string> = []

function identityOne(arg: boolean | number): boolean | number {
  return arg;
}

function identityTwo(arg: any): any {
  return arg;
}

function identityThree<Type>(arg: Type): Type {
  return arg;
}
//when a certain data type is passed to the function,
//<Type> remembers the type of the argument and saves it.

function identityFour<T>(arg: T): T {
  return arg;
} //same as identityThree

identityFour("String");

interface Bottle {
  brand: string;
  type: number;
}

// identityFour<Bottle>({ brand: "SamDaSoo", type: 2 });

function getSearchProducts<T>(products: T[]): T {
  return products[3];
} //should be one of the values from that array

//EExamples of using Generics in arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
  const myIndex = 4;
  return products[myIndex];
};

interface Database {
  connection: string;
  username: string;
  password: string;
}

//example of generics having 2 types
function anotherFunction<T, U extends Database>(argOne: T, argTwo: U): object {
  return {
    argOne,
    argTwo
  };
}

//anotherFunction(3); //example

//example from documentation
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4, m: 5 };

getProperty(x, "a");
getProperty(x, "m");

let a = [1, 2, 3, 4, 5];
