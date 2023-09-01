// let productName: Function;

// productName = (product: string): string => {
//   return product;
// };

// console.log(productName("TS Bootcamp"));

// -------------------------------------

let productName: (product: string, price?: number) => string;

productName = (product, price = 10.99) => {
  return `${product}, ${price}`;
};

console.log(productName("TS Bootcamp"));
console.log(productName("TS Bootcamp", 99.99));
