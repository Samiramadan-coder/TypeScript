// type guards

// 1----------------------- typeof
// function getProductPrice(product: string | number): number {
//   if (typeof product === 'string') {
//     return parseInt(product)
//   }

//   return product;
// }

// const coursePrice = getProductPrice("10");
// console.log(coursePrice);

// 2------------------ instanceof
// let newDate = new Date();

// if (newDate instanceof Date) {
//   console.log("Yes");
// } else {
//   console.log('failed');
// }

// 3-------------------- specific value check
// let someValue = null;

// if (someValue === null) {
//   console.log('success');
// } else {
//   console.log('failed');
// }

// 4----------------------- Truthy and falthy value
// let someValue = true;

// if (!someValue) {
//   console.log('success');
// } else {
//   console.log('failure');
// }

// 5-------------- Built-in Method
let someArr = [1, 2, 3];

