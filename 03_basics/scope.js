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