"use strict";
function getArrayItem(item) {
    return item[2];
}
let number = getArrayItem([1, 2, 3]);
console.log(number);
let string = getArrayItem(["Hi", "Hey", "Hello"]);
console.log(string);
let bool = getArrayItem([true, false, false]);
console.log(bool);
