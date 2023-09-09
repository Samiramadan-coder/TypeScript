// Function Narrowing

// type Item = { productName: string };
// function itemOrItems(item: Item | Item[]): (number | string) {
//   if (Array.isArray(item)) {
//     return item.length;
//   } else {
//     return item.productName;
//   }
// };
// console.log(itemOrItems({ productName: "TS" }));
// console.log(itemOrItems([{ productName: "TS" }]));

// Object Narrowing
type MagazineInfo = {
  name: string;
  author: string;
  sales: number;
  international: boolean;
  price: number;
  publicationYear: number;
}

let magazine: MagazineInfo = {
  name: 'Health unleashed',
  author: 'Muslim Helalee',
  sales: 1111,
  international: true,
  price: 10.99,
  publicationYear: 3132
}

console.log(magazine);

// console.log(magazine.author);
// console.log(magazine.name);

type MagazineName = {
  name: string;
}

let magazineName: MagazineName = magazine;

console.log(magazineName.name);
