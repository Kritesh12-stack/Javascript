const arr = [1,2,3,4,5,6,7];
const arrSumTotal = arr.reduce((acc,val)=>{
    // console.log(`acc : ${acc} & val : ${val}`);
    return acc + val
},0)
// console.log(arrSumTotal)

const shoppingCart = [
    {
        courseName : "js",
        price : 1000
    },
    {
        courseName : "java",
        price : 2000
    },
    {
        courseName : "py",
        price : 1100
    }
]

const totalBill = shoppingCart.reduce((acc,val)=>acc + val.price,0);
// console.log(totalBill);