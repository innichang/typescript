//creating a new user. email/userId/google login/ db id etc...

interface interUser {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string;
  startTrial(): string; //what type of data it will return
  getCoupon(couponname: string, value: number): number;
}

interface interUser {
  githubToken: string;
}

interface interAdmin extends interUser {
  role: "admin" | "ta" | "student";
}

const interInni: interAdmin = {
  dbId: 54321,
  githubToken: "github",
  email: "inni@gmail.com",
  userId: 12345,
  role: "admin",
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "inni1995", off: 10) => {
    return 10;
  }
};

interInni.email = "inseok@gmail.com";
// interInni.dbId = "1234" //cannot modify
