class User{
    constructor(username,email,password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    capitaliseUsername(){
        return `${this.username.toUpperCase()}`
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const user1 = new User("Kritesh","kritesh@google.com",123);
console.log(user1.capitaliseUsername())
console.log(user1)

// Behined the scneces

// function User(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.capitaliseUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// // const user2 = new User("suraj","suraj@SpacePe",123)
// const user1 = new User("Kritesh","kritesh@google.com",123);
// console.log(user1.capitaliseUsername())
// console.log(user1)
