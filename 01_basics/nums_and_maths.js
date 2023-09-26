let a = 1200;
let b = new Number(1200000);
console.log(a);
console.log(b);
console.log("-----------------------------------------------------------------------------------------------------");

console.log(b.toFixed(2));
console.log(b.toString().length);
console.log(b.toLocaleString());
console.log(b.toLocaleString('en-IN'));
console.log("-----------------------------------------------------------------------------------------------------");

// =======================Maths============================================================================================

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.round(4.6));
console.log("-----------------------------------------------------------------------------------------------------");

// console.log(Math.random());
// console.log("-----------------------------------------------------------------------------------------------------");

const c = Math.random();
console.log(c);
console.log(Math.floor(c*10) + 1)

const min = 10;
const max = 20;
console.log(Math.floor(c*10) + (max-min+1));

