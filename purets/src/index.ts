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
