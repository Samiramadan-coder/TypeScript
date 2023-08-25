function printHello(): void {
  console.log('Hello');
}

printHello();

let productCategory: string;
let shoppingCart = (category: string): void => {
  productCategory = category;
}

console.log(shoppingCart('T-Shirt')); // undefined

let movieName1: void = undefined;
// let movieName2: void = 123; // Type number is not assignable to type void

