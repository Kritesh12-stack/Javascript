
// ["String1","String2","String3"];
// [{},{},{}]

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num);
}

const str = "Hello World!";
for(const i of str){
    if(i === " "){
        continue
    }
    // console.log(i);
}

const map = new Map;  // special datatypes that have unique key value pairs
map.set("IN","India")
map.set("US","United States")
map.set("EN","England")
map.set("FR","France")

for (const [key,value] of map) {
    // console.log(key);
    // console.log(`${key} : ${value}`)
}

const obj = new Object;
obj.name = "Kritesh"
obj['fullName'] = "Kritesh Shrivastava"

for (const key of obj) {         // gives error when object is used
    // console.log(key);
}
