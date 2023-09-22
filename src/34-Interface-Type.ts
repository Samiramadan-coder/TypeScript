// type Employee = {
//   readonly id: number;
//   name: string;
//   hobbies: string[];
// }

// ---------------------------------------------------------------------
// interface Department {
//   department: string[];
// };

// interface Employee extends Department {
//   readonly id: number;
//   name: string;
//   hobbies: string[];
//   employeeHobies: () => string[]
// }

// function getEmployeeInfo(
//   id: number,
//   name: string,
//   department: string[],
//   hobbies: string[]
// ): Employee {
//   return {
//     id,
//     name,
//     department,
//     hobbies,
//     employeeHobies() {
//       return this.hobbies
//     },
//   };
// }

// let employee: Employee = getEmployeeInfo(1, "Sami", ['HR'], ["Rading", "Walking"]);
// console.log(employee);

// ----------------------------------------------
// interface Product {
//   name: string;
//   price: number;
// }

// interface Product {
//   rating: number;
//   sales: number;
// }

// const course: Product = {
//   name: 'TS',
//   price: 10.99,
//   rating: 4.6,
//   sales: 1111,
// }

// -----------------------------------------------
// interface Product {
//   name: string;
//   price: number;
// }

// const course: Product = {
//   name: 'TS',
//   price: 10.99,
//   rating: 4.6,
//   sales: 1111,
// }

// interface Product {
//   rating: number;
//   sales: number;
// }

// -------------------------------------------------
// interface Product<T> {
//   price: T
// }

// const product1: Product<string> = {
//   price: '$10.99'
// }

interface Product<T1, T2, T3> {
  name: T1;
  price: T2;
  availability: T3;
}

const course: Product<string, number, boolean> = {
  name: 'TS',
  price: 10.99,
  availability: true,
}
