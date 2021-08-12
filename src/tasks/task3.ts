interface MyArray<T> {

  [N: number]: T,

  reduce<A>(fn: (accumulator: T, value: T, index: number) => A, initialValue?: any): A
}

let arr: MyArray<number> = [1, 7, 9];

console.log('Пример-1: ', arr.reduce((accum, val) => accum + val));
console.log('Пример-2: ',arr.reduce((accum, val) => accum + val, 5));
console.log('Пример-3: ',arr.reduce((accum, val) => accum + val, '5'));
