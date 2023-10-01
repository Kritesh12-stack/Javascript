const user = {
    userName : "Kritesh",
    bandWidth : 999,
    welcomeMessage : function(){
        console.log(this);
        return `${this.userName}, Welcome to the Web` 
    }
}

// console.log(user.welcomeMessage());
// user.userName = "Kritu";
// console.log(user.welcomeMessage());

// console.log(this);

// function test(){
//     console.log(this);
// }
// // test();

// const test = function(){
//     return this;
// }
// console.log(test())

// const test = () =>{
//     console.log(this);
// }
// test();

// -------------------now assigning operations in functions along with this

// function test(){
//     let userName = "Kritesh";
//     return `${this.userName}`;
// }
// test();

// const test = function(){
//     let userName = "Kritesh";    
//     return `${this.userName}`;
// }
// console.log(test());

// if we dont use let,var const if will print the userName coz at that time it will be a global variable 

// Arrow

// const test = (...num1) => {
//     return num1
// }
// console.log(test(3,4,5,6,7,7));

// const test = (...num1) =>  num1;
// console.log(test(3,4,5,6,7));

// const test = (...num1) => num1;
// console.log(test(3,4,5,6,7));

// const test = (...num1) => (num1)
// console.log(test(3,4,5,6,7));

// const test = () => ({userName : "Kritu"});
// console.log(test());