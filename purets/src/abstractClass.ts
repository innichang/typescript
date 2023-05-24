abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    return 9;
  }

  //abstract getSepia(): void
  //declaring abstract is saying that no definition is going to be provided, not sure how anyone is going to implement it
} //when abstract is declared, no new objects can be declared

class Instagram extends TakePhoto {
  constructor(public cameraMode: string, public filter: string, public burst: number) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const abstractInni = new Instagram("test", "test", 3);

abstractInni.getReelTime();
