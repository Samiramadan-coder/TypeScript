// let score: number = 19;
// let myName: string = 'Muslim' + ' ' + 'Helalee';
// let size: string = 15; // Error type number is not assignable to type string
// let passd: boolean = true || false;
// let failed: boolean = 15; // Error type number is not assignable to type boolean
// let language: string = 'Typescript'.length; // Error type number is not assignable to type string


// let score = 31;
// let size = 'Large';
// let book = 'And the mountains Echoed';
// let passd = false;

// let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(nums[2]); // 3
// let myArr1: boolean[] = [true, false];

// let myTuple1: [string] = ['TypeScript'];
// let myTyple2: [number] = [15];

// let myTuple3: [string, number] = ['TypeScript', 15];
// console.log(myTuple3[1]);

// enum ProductNames {
//   product1 = 'LapTops',
//   product2 = 'Mouse',
//   product3 = 'Keyboard'
// }

// console.log(ProductNames);

// enum ProductIds {
//   LapTops = 1,
//   Mouse,
//   Keyboard,
// }

// enum FavouriteProduct {
//   Name = ProductNames.product1,
//   Id = ProductIds[ProductNames.product1]
// }

// console.log(FavouriteProduct);

// let age: number = 21;

// if (age >= 21) {
//   console.log('Congratulation');
// }

let searchHistory: string[] = [
  "how to make money online",
  "benifits of eating garlic",
  "html css tutorial",
  "calisthenics"
];

for (let searchItem of searchHistory) {
  const item: string[] = searchItem.split(" ");

  for (let entry of item) {
    if (entry === 'html' || entry === 'css' ) {
      console.log('.......');
    }
  }
}

searchHistory.map(entry => {
  if (entry.includes("html") || entry.includes("css")) {
    console.log('......');
  }
})
