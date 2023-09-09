type FuncType<T> = (elements: T[]) => number;

// function getArrayLength<T>(elements: T[]): number {
//   return elements.length;
// }

let getArrayLength: FuncType<number> = (elements) => {
  return elements.length;
}

let arrLength: number = getArrayLength([1, 2, 3]);
console.log(arrLength);
