const arr = [1,2,3,4,5,6]

arr.forEach((val)=>{
    // console.log(val)
})

const printMe = (val) => {
    console.log(val);
}
// arr.forEach(printMe)

arr.forEach((val,i,array) => {
    // console.log(val,i,array)
})

const arrObj = [
    {
        userID : 1,
        userName : "Kritesh"
    },
    {
        userID : 2,
        userName : "Kritu"
    },
    {
        userID : 3,
        userName : "Kri"
    }
]

arrObj.forEach((key)=>{
    // console.log(key.userID);
    // console.log(key.userName);
})
