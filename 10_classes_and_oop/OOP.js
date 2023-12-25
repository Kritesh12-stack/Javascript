// const user = {
//     userName : "Kritesh",
//     loginCount : 8,
//     isLoggedIn : true,

//     nameLength : function(){
//         console.log(this.userName.length)
//     }
// }

// console.log(user.nameLength())


function createUSer(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const user1 = new createUSer("Kritesh",8,true)
const user2 = new createUSer("Kritu",9,false);
console.log(user1.constructor)
