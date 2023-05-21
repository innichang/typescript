let greetings: string = "Hello Inseok";

greetings.toLowerCase();
console.log(greetings);

//number

let userId: number = 334455;

// userId.   //shows all the methods regarding number
userId.toFixed();
//userId = "Inseok"  cannot be declared since it's a string
//boolean
let isLoggedIn: boolean = false;

//isLoggedIn. //shows all the methods regarding boolean

//any
let hero: string;

function getHero(): string {
  return "thor";
} //can add return type of function too

hero = getHero(); //hero cannot have a boolean type as its value

export {};
