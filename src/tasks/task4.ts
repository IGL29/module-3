interface IHomeTask {

  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  }
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    value: 'win'
  }
}

type MyPartial<T> = {
  [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

interface Rules {
  type: string,
  prompt: string
}

type ValidationScheme<T> = {
  [K in keyof T]: {
    value: T[K],
    check: boolean,
    rules?: Rules[]
  }
}

console.log('TASK 4: ', homeTask);
