let a = 23;
let b = a;
b=93; // copy of value is given to new variable in the stack
console.log(a);
console.log(b);


let userOne = {
    email : "user@gmail.com",
    age : 21
}

let userTwo = userOne;

userTwo.email = "Kritesh@gmail.com"; // orignal value is reference here in the heap

console.log(userOne.email);
console.log(userTwo.email);