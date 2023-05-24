// class classUser {
//   public email: string;
//   private name: string;
//   readonly city: string = "Seoul";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city;
//   }
// }

//instead of making a class like above you can also,

class classUser {
  readonly city: string = "Seoul";
  constructor(public email: string, public name: string) {}
}

// const classInni = new classUser("inni@gmail.com", "inni");
//classInni.name canot access name because name is private
