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
  // private _courseCount = 1;
  protected _courseCount = 1;

  readonly city: string = "Seoul";
  constructor(
    public email: string,
    public name: string //private userId: string
  ) {}

  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  } //example of getter

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends classUser {
  //acquires all the properties of classUser excluding properties that are mentioned as private
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const classInni = new classUser("inni@gmail.com", "inni");
//classInni.name canot access name because name is private

//classInni.deleteToken(); private property.... so this function is only accessible in the class

class User {
  email: string;
  name: string;
  readonly city: string = "Seoul";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
    this.city;
  }
}

const inni = new User("inni@gmail.com", "inni");
//inni.city;
