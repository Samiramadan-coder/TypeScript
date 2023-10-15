// type Product = {
//   name: string;
// };

// let course: Product = {
//   name: 'TS Course',
//   price: 10.99 // Type Error
// };

// ---------------------------------
// type Product = {
//   [k: string]: string;
// };

// let course: Product = {
//   TS: 'TS Bootcamp',
//   JS: 'JS Bootcamp',
//   python: 'Python Bootcamp'
// };

// --------------------------------
// type Product = {
//   [priced: string]: number;
//   realeased: boolean;
// };

// let course: Product = {
//   TS: true,
//   JS: true,
//   realeased: true,
// }

// ----------------------------------
// type Product = {
//   [k: string]: {
//     name: string;
//     price: number;
//   };
// };

// let course: Product = {
//   TS: {
//     name: "TS Bootcamp",
//     price: 10.99,
//   },
// };

// ------------------------------------------

// type Product = {
//   name: string;
//   price: number;
//   moreInfo: {
//     released: boolean;
//     beginnerFriendly: boolean;
//     level: string;
//   };
// };

// function promoteProduct(
//   name: string,
//   price: number,
//   moreInfo: Product["moreInfo"]
// ): Product {
//   return {
//     name,
//     price,
//     moreInfo
//   }
// }

// console.log(promoteProduct("TS", 10.99, {
//   released: true,
//   beginnerFriendly: true,
//   level: "Beginner-Advanced"
// }));

// ------------------------------------------
// type Product = {
//   readonly name: string;
//   readonly price: number;
// }

// type ReadOnlyProduct = Readonly<{ name: string; price: number }>;
// type PartialProduct = Partial<{ name: string; price: number }>;

// ------------------------------------------
// const numers: number[] = [1, 2, 3, 4, 5];

// numers.push(6);
// numers.sort();

// -------------------------------------------
// const numers: ReadonlyArray<number> = [5, 2, 3, 1];
// numers.push()
// numers.sort()

// const strin: ReadonlyArray<string> = ["S", "B"];
