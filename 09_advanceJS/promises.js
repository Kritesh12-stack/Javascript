const promiseOne = new Promise((resolve,reject)=>{
    // DB calls
    // timed tasks
    setTimeout(() => {
        resolve("Promise 0ne is executed")
    }, 1000);
});
promiseOne.then((data)=>{console.log(data)})

new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Promise 2 is also exected")
    }, 1000);
}).then((data)=>{console.log(data)})

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const obj = {
            userName : "Kritesh",
            age : 21
        }
        resolve(obj)
    },1000)
}).then((users)=>{
    return users;
}).then((data)=>{console.log(data.userName)})

const promiseFour = new Promise((resolve,reject)=>{
    let error =  false;
    // let error =  true;
    const obj = {
        userName : "Kritesh",
        age : 21
    }
    setTimeout(() => {
        if(!error){
            resolve(obj)      
        }else{
            reject("ERROR : something went wrong")
        }
    }, 1000);
    
})

// promiseFour.then((data)=>{
//     console.log(data)
// }).catch((data)=>{
//     console.log(data)
// }).finally(()=>{
//     console.log("Promise is there")
// })

async function consumePromiseFour(){
    try {
        const response = await promiseFour;
        console.log(response) 
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFour()


// async function apiInfo(){
//     try {
//         const response = await fetch("https://api.github.com/users/Kritesh12-stack");
//         const data = await response.json()
//         console.log(data) 
//     } catch (error) {
//         console.log(error)
//     }
    
// }

// apiInfo()

fetch('https://api.github.com/users/Kritesh12-stack')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    return data;
})
.then((data)=>{
    console.log(data.login)
})
.catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Done")
})










