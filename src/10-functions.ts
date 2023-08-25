let holidaySales = (
  product: string,
  sales: number,
  tax: number,
  discount: number,
): number => {

  let price: number = 0;

  if (product === "pens") price = 29;
  if (product === "erasers") price = 19;
  if (product === "pencils") price = 59;

  let totalSalesforIndividualProduct: number = price * sales;

  return (
    totalSalesforIndividualProduct -
    tax * totalSalesforIndividualProduct -
    discount * totalSalesforIndividualProduct
  );
}

const pens: number = holidaySales("pens", 20, 0.15, 0.25);
const erasers: number = holidaySales("erasers", 15, 0.12, 0.15);
const pencils: number = holidaySales("pencils", 50, 0.12, 0.15);

// console.log(pens);
// console.log(erasers);
// console.log(pencils);

// Functions Challenge
function multiplication(num1: number, num2: number): number {
  return num1 * num2;
}

// multiplication(1, 5);
// multiplication(115, 5);
// multiplication(115, '5'); // Error: type string is not assignable to type number

function emailList(email: string): string {
  return email;
}

// emailList(15); // Error: type number is not assignable to type string

// let add = (num: number, bool: boolean): number => num + bool // Error: Operator '+' cannot be applied to types 'number' and 'boolean'
let add = (num: number, bool: boolean): number => num + +bool;

let pluralize = function(str: string): string {
  return str + 's';
};

pluralize('Cake'); // Cakes

function decideOperation(num: number, bool: boolean): number {
  // if (bool) return (num + 1);
  // return (num - 1);

  return (bool ? num + 1 : num - 1);
}

decideOperation(10, true);
decideOperation(10, false);

function myArr(arr: number[]): number[] {
  return arr;
}

myArr([1, 2, 3]); // [1, 2, 3]
// myArr([1, '2', 3]); // Type string is not assignable to type number 
