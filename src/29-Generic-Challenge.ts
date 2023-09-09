// Generic Array 

// EX 1
// let myArrr: Array<string> = ['a', 'b', 'c'];

// EX 2
// let myArrr: Array<boolean> = [true, false];

// Ex 3
// let myArrr: Array<Array<string>> = [['a'], ['b']];

// EX 4
// function someArr(): Array<number> {
//   let numArr: Array<number> = [];
//   numArr.push(15);
//   numArr.push(35);
//   return numArr;
// } 

// EX 5
// function someArr(): Array<Array<number>> {
//   let numArr: Array<Array<number>> = [];
//   numArr.push([15]);
//   numArr.push([35]);
//   return numArr;
// }

// EX 6
// function someArr(): Array<Array<string>> {
//   let strArr: Array<Array<string>> = [];
//   strArr.push(['TS']);
//   strArr.push(['JS', 'Java']);
//   return strArr;
// }

// EX 7
// let someArr: Array<Array<Array<Array<string | number>>>> = 
// [[[[1, 2], ['c#'], ['JS', 'Java'], ['html', 'css', 'ts']]]];
// console.log(someArr[0][0][3][2]); // ts

// Generic Functions

// EX 1
// function returnArg<T>(element: T): T {
//   return element;
// }

// returnArg('html');
// returnArg(115);
// returnArg(true);

// EX 2
// function returnLength<T>( elements: T[]): number {
//   return elements.length;
// }

// returnLength(['html', 'css']); // 2
// returnLength([1, 2, 3, 4]); // 4
// returnLength([true, false, 1, 10, 'a']); //5 

// EX 3
// function myStr<T>(elements: Array<T>): T {
//   return elements[4];
// }
// myStr(['a', 'b', 'c', 'd', 'e', 'f']); // e

// EX 4
// function someFunc<Elements>(elements: Array<Elements>): Elements {
//   return elements[elements.length - 1];
// }

// someFunc<number>([1, 2, 3]); // 3
// someFunc<boolean>([true, false]); // false
// someFunc<string>(['Hey', 'hi']); // hi

// Generic Object

// EX 1
// type AirConditionar<T> = {
//   winter: T;
//   summer: T;
// }

// const myAc: AirConditionar<string> = {
//   winter: 'Warm',
//   summer: 'Cold',
// }

// EX 2
type SmartPhone<T1, T2, T3> = {
  manufacture: T1;
  model: T2;
  rating: T3;
}

const myPhone: SmartPhone<string, string, number> = {
  manufacture: 'Samsung',
  model: 'J6+',
  rating: 3.5
}
const phoneSpecs: (string | number)[] = [myPhone.manufacture, myPhone.model, myPhone.rating]
