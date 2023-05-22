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

const interInni: interUser = {
  dbId: 54321,
  email: "inni@gmail.com",
  userId: 12345,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "inni1995", off: 2) => {
    return 10;
  }
};

interInni.email = "inseok@gmail.com";
// interInni.dbId = "1234" //cannot modify
