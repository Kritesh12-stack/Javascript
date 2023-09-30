const user = {
    userName : "Kritesh",
    bandWidth : 999,
    welcome :function(){
        console.log(this);

        return `${this.userName} welocme`
    }
}

console.log(user.welcome());
user.userName = "Kritu";
console.log(user.welcome());

console.log(this);

function addTwo(){
    userName = "Kritesh";
    console.log(this.userName);  // not working
}

const addTo = function(){
    userName = "Kritesh";
    console.log(this.userName);  // not working
}