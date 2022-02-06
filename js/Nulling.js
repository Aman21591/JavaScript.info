console.log('Hello World');
let user="Aman Yadav";
console.log(user ?? "Aman");

// let firstName=null;
// let secondName=null;
// let thirdMame="Amit Yadav";
// console.log(firstName ?? secondName ?? thirdMame ?? "MyName");
let firstName=null;
let secondName=null;
let thirdMame="Amit Yadav";
console.log(firstName || secondName || thirdMame || "MyName");

// let height=0;
// console.log(height || 100);
// console.log(height ?? 100);

let height=null;
let width=null;
let area=(height ?? 100)*(width ?? 50);
console.log(area);



