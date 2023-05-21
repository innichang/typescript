// const User = {
//   name: "Inseok",
//   email: "inni@gmail.com",
//   isActive: true
// };

// function createUser({ name: string, isPaid: boolean }) {
//     name.
// }

// let newUser = { name: "Inni", isPaid: false, email: "inni@gmail.com" };
// //can pass on more information than expected in the function definition
// createUser(newUser);

// function createCourse(): { name: string; price: number } {
//   return { name: "reactjs", price: 399 };
// }

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUser(user: User): User {
//   return { name: "", email: "", isActive: true };
//   //must return all the properties since the function returns the type user
// }

// createUser({ name: "inni", email: "inni@gmail.com", isActive: true });

type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
};

const myUser: User = {
  _id: "12345",
  name: "Inni",
  email: "inni@gmail.com",
  isActive: true
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

myUser.email = "inseok@gmail.com";
//myUser._id = "142"; //cannot mod _id because of readonly

export {};
