// type Employee = {
//   id: number;
//   name: string;
//   department: string;
// }

// const employee: Employee = {
//   id: 1,
//   name: 'Sami',
//   department: 'Design'
// };

// const hiredEmployee = JSON.stringify(employee);

// console.log(typeof hiredEmployee);

// function getEmployeeInfo(employeeObject: string) {
//   // return JSON.parse(employeeObject);

//   // Old Method
//   // return (<Employee>JSON.parse(employeeObject));

//   // New Method
//   return JSON.parse(employeeObject) as Employee;
// }

// console.log(getEmployeeInfo(hiredEmployee));

