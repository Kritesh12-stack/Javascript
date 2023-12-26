class User{
    constructor(email,password){
        this.email = email;
        this.password = password   
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
}

const user = new User("Kritesh@123.com",1234)
console.log(user.email);