const firstString: string = 'Hello';
const secondString: string = 'World';

const concatStrings = (firstString: string, secondString: string): string => {
  return `${firstString} ${secondString}`;
}

const resultConcat = concatStrings(firstString, secondString);

console.log('TASK 1: ', resultConcat);
