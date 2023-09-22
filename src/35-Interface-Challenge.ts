// EX 1
// interface Product {
//   readonly id: number;
//   name: string;
//   category: string;
// };

// function getProductInfo(id: number, name: string, category: string): Product {
//   return {
//     id,
//     name,
//     category
//   };
// }

// const product: Product = getProductInfo(1, 'Iphone', 'mobile');
// console.log(product);

// EX 2
// type Cat = {
//   name: string;
// }

// interface Dog {
//   name: string;
// }

// const cat: Cat = { name: 'George' };
// const dog: Dog = cat;

// console.log(dog.name);

// Ex 3,
// interface ProductName {
//   name: string;
// }

// interface ProductPrice extends ProductName {
//   price: number;
// }

// const product: ProductPrice = {
//   name: 'Name',
//   price: 10
// };

// Ex 4
type ProductName = {
  name: string;
}

interface ProductPrice extends ProductName {
  price: number;
}

const product: ProductPrice = {
  name: 'TS',
  price: 10
};
