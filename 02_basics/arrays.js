let arr = [0,1,2,3,"Kritesh",true];
// console.log(arr);

let myArr = new Array(0,1,2,3,4);
console.log(myArr);
myArr.push(5);
console.log(myArr);
myArr.pop();
console.log(myArr);
myArr.unshift(9);
console.log(myArr);
myArr.shift();
console.log(myArr);
console.log(myArr.indexOf(0));
console.log(myArr.includes(0));

// slice,splice
console.log(myArr);
let myNewArr = myArr.slice(0,2);
console.log(myNewArr);
console.log(myArr);
console.log("------------------------------------------------------------------")
let myNewArr2 = myArr.splice(0,2);
console.log(myNewArr2);
console.log(myArr);

console.log(myArr.length);
