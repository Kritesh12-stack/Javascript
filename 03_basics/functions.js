function sayMyName(){
    console.log("Kritesh");
}

// sayMyName();

function addTwoNum(number1,number2){
    if(typeof(number1)=== 'number' && typeof(number2)=== 'number'){
        return number1 + number2;
    }
    return 'undefined arguments'
}

const vrble = addTwoNum(3,5);
// console.log(vrble)

function userLoginWelcome(userName){
    if(!userName){          // !userName means userName is not their which means false(undefined is taken as empty value) but ! makes it true
        return "pls enter username"
    }
    return `${userName} just logged in`
}

// console.log(userLoginWelcome());
// console.log(userLoginWelcome("Kritesh"));

function userLoginWelcomeDefault(userName="Kritu"){
    return `${userName} just logged in`
}

// console.log(userLoginWelcomeDefault());

function calCartItems(num1){
    return num1;
}
// console.log(calCartItems(200))
// console.log(calCartItems(200,300,400,1000))

function effectiveCalCartItems(...num1){
    return num1;
}
// console.log(effectiveCalCartItems(200,300,400,1000));

// what if

function effectiveCalCartItemsDemo(val1,val2,...num1){
    return num1;
}
// console.log(effectiveCalCartItemsDemo(200,300,400,1000));

function objectHandler(anyObject){
    if(typeof anyObject !== 'object'){
        return "Invalid Argument"
    }
    return `Username : ${anyObject.userName } , Price : ${anyObject["price"]} `
}

const user = {
    userName : "Kritesh",
    price : 500
}

// console.log(objectHandler(user));

// console.log(objectHandler({userName:"Kritu",price:600}));

function secVal(arr){
    if(!Array.isArray(arr)){
        return "Invalid argument";
    }
    return `Second value of array : ${arr[1]}`
}
const myArr = [200,300,400,500];
// console.log(secVal(myArr));
// console.log(secVal([200,300,400,500]));