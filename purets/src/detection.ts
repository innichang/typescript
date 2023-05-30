function detectType(arg: number | string) {
  if (typeof arg === "string") return arg.toLowerCase(); //(parameter) arg: string
  return arg; //(parameter) arg: number
}

//typescript following the exeuction of the code, and makes its decision of the
//most specific value type at the given situation.
//because typeof arg === 'string' must be true to execute the code block inside
//the if statement, toLowerCase() which is a string method can be used,
//and then in the 'else' part of the code, arg is already a number type

function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide ID");
    return;
  }
  return id.toLowerCase();
}

//example of type guarding from official document
function printAll(strs: string | string[] | null) {
  if (strs !== null && typeof strs === "object") {
    for (const s of strs) {
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  }
}

//in operator narrowing
interface detectUser {
  name: string;
  email: string;
}

interface detectAdmin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: detectUser | detectAdmin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

//example of instanceof narrowing from official document
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}
//instanceof can only be used if the value can be constructed using the
//new keyword

//narrowing using type predicates. example from official document
type Fish = { swim(): void };
type Bird = { fly(): void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird food";
  }
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  //  return shape.side * shape.side; //since it can be circle or square
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.width * shape.height;

    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
