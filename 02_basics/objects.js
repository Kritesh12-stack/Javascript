// singleton
// Object.create

// Object litrals

const mySym = Symbol("key1");

const jsUser = {
    name : "Kritesh",
    "full name" : "Kritesh Shrivastava",
    [mySym]:"myKey",
    age : 20,
    email : "kritesh@google.com",
    isLoggedIn : false,
    lastActive : ["Monday","Saturday"]
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym])
// console.log(jsUser)

jsUser.email = "kritesh@microsoft.com";
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(jsUser.greeting());

jsUser.presonalGreet = function(){
    console.log(`Hello JS user ${this["full name"]}`)
}
console.log(jsUser.presonalGreet());

Object.freeze(jsUser);

jsUser.name = "Kritu";
console.log(jsUser.name);