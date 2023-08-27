// let firstPassword: number | string = 123456;
// let firstPassword: number | string = '123456';

// -----------------------------------------
let tip = (billAmount: number, tipPercentage: string | number): number => {
  if (typeof tipPercentage === 'number') {
    return billAmount * tipPercentage;
  } else {
    let calculatedTip: number = billAmount * (parseInt(tipPercentage) / 100);
    return calculatedTip;
  }
}

// let tipAmount = tip(100, 0.15);
let tipAmount = tip(100, '20 Percent');
console.log(tipAmount);
