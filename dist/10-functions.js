"use strict";
let holidaySales = (product, sales, tax, discount) => {
    let price = 0;
    if (product === "pens")
        price = 29;
    if (product === "erasers")
        price = 19;
    if (product === "pencils")
        price = 59;
    let totalSalesforIndividualProduct = price * sales;
    return (totalSalesforIndividualProduct -
        tax * totalSalesforIndividualProduct -
        discount * totalSalesforIndividualProduct);
};
const pens = holidaySales("pens", 20, 0.15, 0.25);
const erasers = holidaySales("erasers", 15, 0.12, 0.15);
const pencils = holidaySales("pencils", 50, 0.12, 0.15);
function multiplication(num1, num2) {
    return num1 * num2;
}
function emailList(email) {
    return email;
}
let add = (num, bool) => num + +bool;
let pluralize = function (str) {
    return str + 's';
};
pluralize('Cake');
function decideOperation(num, bool) {
    return (bool ? num + 1 : num - 1);
}
decideOperation(10, true);
decideOperation(10, false);
function myArr(arr) {
    return arr;
}
myArr([1, 2, 3]);
