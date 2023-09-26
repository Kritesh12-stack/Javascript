let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString('default',{
    weekday: "long"
}));
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString());
console.log(myDate.toUTCString());
console.log(myDate.toJSON());


console.log(myDate.getDate());
console.log(myDate.getMilliseconds());
console.log(Date.now())
