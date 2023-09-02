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
// function callAnotherFunction(func: (price: number, course: string) => string) {
//   return func(10.99, "TS");
// }  
// let caller = callAnotherFunction((price, course) => `The ${course} has a price of ${price}`);
// console.log(caller);

// EX 8
// type SomeFunc = () => string;
// const result: SomeFunc = () => 'TS Bootcamp';
// console.log(result());

// ----------------------------

// Object Type

// EX 1
// type Employee = {
//   name: string;
//   age: number;
//   job: string;
// }

// const employee: Employee = {
//   name: "John",
//   age: 40,
//   job: "Optom"
// }

// EX 2
// type OnlineCourse = {
//   name: string;
//   platform: string;
//   features: string[];
//   "meta-data": {
//     published: boolean;
//   }
// }

// let myCourse: OnlineCourse = {
//   name: "TS Bootcamp",
//   platform: "Udemy",
//   features: ["Practical", "Excercise Oriented", "Modern TS"],
//   "meta-data": {
//     published: true
//   }
// }

// console.log(myCourse["meta-data"]["published"]);
// console.log(myCourse["meta-data"].published);

// EX 3
// type Product = {
//   name: string;
//   publishedStatus? : boolean;
// } 
// const product1: Product = {name: "TS Bootcamp"}; // Error Type
// const product2: Product = {name: "TS Bootcamo", publishedStatus: true}; // Correct

// EX 4
// const onlineCourse = { name: "TS Bootcamp", price: 10.99 };
// const product = { ...onlineCourse, released: true };
// console.log(product);

// Ex 5
// type Product = {
  // holidaySales: () => string;
//   holidaySales(): string;
// }

// const product: Product = {
//   holidaySales: () => "Sales is On"
// }
// console.log(product.holidaySales());

// EX 6
// function getName({ name }: {name: string}): string {
//   return name
// }
// getName({ name: "Layla" });
// const { n } = { n: "Sami" };

// EX 7
// function isOnline({ online }: { online: boolean}): boolean {
//   return online;
// }
// isOnline({ online: true });

// -----------------------------------

// Nullability

// EX 1
// let vague: number | undefined = null; // Type Error

// EX 2
// let vague1: boolean | undefined = true ? true : undefined;
// let vague2: boolean = vague1; // Type Error

// EX 3
// let vague: string | undefined = undefined; // undefined

// EX 4
// let vague1: boolean | undefined = true ? true : undefined; // true
// let vague1: boolean | undefined = true ? undefined : true; // undefined

// let vague2: boolean;

// if (vague1 === undefined) {
//   vague2 = false;
// } else {
//   vague2 = true;
// }

// EX 5
function nullNarrow(arg: string | undefined): number | undefined {
  if (typeof arg === 'undefined' || isNaN(parseInt(arg))) {
    return undefined;
  } else {
    return parseInt(arg);
  }
}
