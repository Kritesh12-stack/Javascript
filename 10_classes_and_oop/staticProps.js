class user {
    constructor(username,email,password){
        this.username = username,
        this.email = email,
        this.password = password
    }

    static createId(){
        return 123
    }
}

const user1 = new user("Kritesh","kritu@123.com",1234)
const user2 = new user("Kritu","kritu@123.com",1234)
const users = [user1,user2]
// console.log(user1)
// console.log(user2)
// console.log(users);
console.log(user1.createId());   // will give error