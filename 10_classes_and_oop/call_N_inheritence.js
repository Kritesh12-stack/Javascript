// function setUsername(username){
//     this.username = username;
// }

// function createUser(username,email,password){
//     setUsername.call(this,username);
//     this.email = email;
//     this.password = password;

//     return this
// }
// const user = new createUser("kritesh","kritesh@google.com",123456789)
// console.log( user)


class User{
    constructor(username){
        this.username = username;
    } 
}

class createUser extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password
    }
}

const user1 = new createUser("kritesh","kritesh@google.com",123456789)
console.log(user1)
