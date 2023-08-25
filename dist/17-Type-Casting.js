"use strict";
const employee = {
    id: 1,
    name: 'Sami',
    department: 'Design'
};
const hiredEmployee = JSON.stringify(employee);
console.log(typeof hiredEmployee);
function getEmployeeInfo(employeeObject) {
    return JSON.parse(employeeObject);
}
console.log(getEmployeeInfo(hiredEmployee));
