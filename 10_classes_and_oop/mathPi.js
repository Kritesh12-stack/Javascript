// const pi = Math.PI
// console.log(pi)
// Math.PI = 2.14
// console.log(Math.PI)
// const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor)

const user1 = {
    id : 1,
    name : "Shouib"
}

// console.log(user1.name)

Object.defineProperty(user1,"id",{
    writable : false
})
user1.id = 3;
console.log(user1.id)