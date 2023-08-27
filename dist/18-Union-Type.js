"use strict";
let tip = (billAmount, tipPercentage) => {
    if (typeof tipPercentage === 'number') {
        return billAmount * tipPercentage;
    }
    else {
        let calculatedTip = billAmount * (parseInt(tipPercentage) / 100);
        return calculatedTip;
    }
};
let tipAmount = tip(100, '20 Percent');
console.log(tipAmount);
