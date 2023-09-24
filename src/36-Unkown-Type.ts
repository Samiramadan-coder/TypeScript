// let someStr: unknown = "Hey";
// let discount: unknown = 25;
// let otherNum: number = discount; // type error

// -----------------------------
// let discount: unknown = "25";
// let otherNum: number = typeof discount === 'number' ? discount : 10;
// console.log(otherNum); 

// -----------------------------
// let courseName: any = 'TS';
// let coursePrice: number = courseName;
// console.log(coursePrice);

// -----------------------------
// let courseName: any = 'TS';
// let coursePrice: unknown = courseName;

// -----------------------------
// let courseName: unknown = 'TS';
// let coursePrice: any = courseName;


// ----------------------------
// let courseName: unknown = 'TS';
// let coursePrice: any = courseName;
// let price: number = coursePrice;
// console.log(price);

// let courseName: any = 'TS';
// let coursePrice: unknown = courseName;
// let price: number = typeof coursePrice === 'number' ? coursePrice : 9.99;
// console.log(price);


// let courseName: unknown & string = 'TS';
// let courseName: unknown & string = '20';
// let product: string = courseName;

