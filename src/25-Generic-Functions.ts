function getArrayItem<T>(item: Array<T>): T {
  return item[2];
}

let number: number = getArrayItem<number>([1, 2, 3]);
console.log(number);

let string: string = getArrayItem<string>(["Hi", "Hey", "Hello"]);
console.log(string);

let bool: boolean = getArrayItem<boolean>([true, false, false]);
console.log(bool);

