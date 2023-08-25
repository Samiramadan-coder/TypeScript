let notSure1: undefined = undefined;
// let notSure2: undefined = null; // Type 'null' is not assignable to type 'undefined'.
// let notSure3: undefined = 123;  // Type '123' is not assignable to type 'undefined'.
//let notSure4: undefined = "Hey"; // Type '"Hey"' is not assignable to type 'undefined'.


let notSure5: undefined | number = 5;
let notSure6: undefined | number = undefined;
// let notSure7: undefined | number = null; // Type 'null' is not assignable to type 'number | undefined'