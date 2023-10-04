const obj = new Object;
obj.name = "Kritesh"
obj['fullName'] = "Kritesh Shrivastava"

for (const key in obj) {         
    // console.log(`${key} : ${obj[key]}`);
} 


const arr = ["js","java","cpp","py"];

for (const key in arr ){
    // console.log(key);
    // console.log(arr[key])
}

const map = new Map;  
map.set("IN","India")
map.set("US","United States")
map.set("EN","England")
map.set("FR","France")

for (const [key,value] in map) {
    // console.log(key);    not printing anything console is empty
    // console.log(`${key} : ${value}`)
}