type simeArray = (string | number)[];

interface Hometask {
  howIDoIt: string,
  simeArray: simeArray,
  withData: [{ howIDoIt: string, simeArray: simeArray }],
}

const MyHometask: Hometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

console.log('TASK-2: ', MyHometask);
