// EX 1
// function arrayOrItem<T>(elements: Array<T> | T): T {
//   if (Array.isArray(elements)) {
//     return elements[0];
//   } else {
//     return elements;
//   }
// }

// console.log(arrayOrItem([1, 2, 3]));
// console.log(arrayOrItem('ahmed'));
// console.log(arrayOrItem('a'));

// EX 2
// type Employee = {
//   name: string;
// };

// function myFunc(employeeOrEmployees: Employee | Employee[]): number | string {
//   if (Array.isArray(employeeOrEmployees)) {
//     return employeeOrEmployees.length;
//   };
//   return employeeOrEmployees.name;
// }

// console.log(myFunc({name: 'Sami'}));
// console.log(myFunc([{name: 'Sami'}]));

// EX 3
// type Employee = {
//   name: string;
//   positionTitle: string;
//   age: number;
//   hired: boolean;
// };

// const newHiring: Employee = {
//   name: 'Bill',
//   positionTitle: 'Juniro Developer',
//   age: 24,
//   hired: true
// };

// type EmployeeName = {
//   name: string;
// }

// const employeeName: EmployeeName = newHiring;
// console.log(employeeName.name);

// EX 4


