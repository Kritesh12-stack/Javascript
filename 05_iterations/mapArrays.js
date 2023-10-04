arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = [];
arr.forEach((i)=> {
    newArr.push( i+10);
})
// console.log(newArr)

let newArr2 = arr.map((i)=>{return i+10})
// console.log(newArr2)

newArr2 = arr.map((i)=> i+10)
             .map((i)=> i+1) 
             .filter((i)=> i>19);
// console.log(newArr2)


