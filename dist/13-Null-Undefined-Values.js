"use strict";
let discount;
function specialDiscount(holidaySeason) {
    return discount = holidaySeason ? 0.25 : 0.15;
}
let holidayDiscount = specialDiscount(true);
console.log(holidayDiscount);
