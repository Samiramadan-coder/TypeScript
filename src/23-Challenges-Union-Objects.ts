// Union Types
// function productId(): string | number {
//   return 112233
// }

// let id: string | number = productId(); // Correct with output 112233

// let id: number = productId(); // Type Error

// function productId2(): number {
//   return 112233;
// }

// let id: string | number = productId(); // Correct with output 112233

// ------------------------------

// Type Aliases

// Ex 1
//type BoolValues = true | false;

// Ex 2
// type Score = number;
// let avgScore: string = "11.5";
// let score: Score = avgScore; // Type Error

// Ex 3
// type Score = number;
// let avgScore: number = 11.5;
// let score: Score = avgScore; // Correct Example

// Ex 4
// function courseName(): string {
//   return "TS";
// }
// let typeScript: "TS" = courseName(); // Type Error

// EX 5
// type BookType = "A" | "B" | "C";
// let favBook: BookType = "A"; 

// EX 6
//let bool: true = false; // Type Error

// --------------------------------

// Functions Types

// EX 1
// function multiply(n: number): number {
//   return n * n;
// }
// const result: (n: number) => number = multiply;
// result(11); // 121

// EX 2
// function addition(n: number): number {
//   return n + n;
// }
// const result: (n: number) => string = addition; // Type Error

// EX 3
// function myStr(arg: number | boolean | string): string {
  // if (typeof arg === 'string') {
  //   return arg;
  // }
  // return "String";
  // return arg.toString();
// }

// EX 4
// function boolInverted(arg: boolean): boolean {
//   return !arg;
// }

// EX 5
// function doSomthing(num: number, operation: "add" | "subtract" | "do nothing"): number {
//   if (operation === "add") {
//     return num + 1;
//   }

//   else if (operation === "subtract") {
//     return num -1;
//   }

//   else {
//     return num;
//   }
// }

// EX 6
// function someFunc() {

// }

// const myNum: number = someFunc(); // Type Error

// EX 7
