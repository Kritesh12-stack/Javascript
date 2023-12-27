// class User{
//     constructor(email,password){
//         this.email = email;
//         this.password = password   
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value
//     }
// }

// const user = new User("Kritesh@123.com",1234)
// console.log(user.email);

// function User(email,password){
//     this.email = email;
//     this.password = password;



function User(email, password) {
    this._email = email;  // Use a different name for the actual data property
    this.password = password;

    Object.defineProperty(this, "email", {
        get: function () {
            return this._email.toUpperCase();
        },
        set: function (value) {
            this._email = value;
        }
    });
}

const user = new User("Kritesh@123.com", 1234);
console.log(user.email);
