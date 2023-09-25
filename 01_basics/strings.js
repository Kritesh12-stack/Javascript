let name = "Kritesh ";
let repoName = "Javascript"
console.log(name + repoName);

console.log(`My name is ${name} and my repo name is ${repoName}`);

const newString = new String("Kritesh-htc");
console.log(newString.charAt(8));
console.log(newString.length);
console.log(newString.indexOf('-'));
console.log(newString.toUpperCase());
console.log(newString.replace('-','_'));
console.log(newString.substring(0,5));
console.log(newString.slice(-11,5));
console.log(newString.split('-'));

const newStrTwo = new String(" Kritesh-dot-com ");
console.log(newStrTwo.trim(" ","     "))
