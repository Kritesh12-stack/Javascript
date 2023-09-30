var c = 300;
if(true){
    let a = 10;
    const b = 12;
    // var c = 14;
    c =14;
}

// console.log(a); gives error "Which is good" BLOCK scope
// console.log(b); gives error "Which is good" BLOCK scope
console.log(c);  // has global scope despite being declared in the block

function one(){
    const userName = "Kritesh";
    function two(){
        const website = "Youtube";
        console.log(userName); // block scope can take variable from its global scope
    }
    // console.log(website)  gives error scope in not defined

    two();
}

one();

const userName = "Kritesh";
if(userName === "Kritesh"){
    const website = "Youtube";
    if(website === "Youtube"){
        console.log(`${userName} ${website}`);
    } 
}

// hoisting






console.log(addOne(5))
function addOne(num){
    return num + 1;
}
// console.log(addTwo); gives error cause variable names function 
const adding = function addTwo(num){
    return num + 2;
}
console.log(adding(4));

