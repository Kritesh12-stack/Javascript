let marvel = ["Ironman","Spiderman","Blackwidow"];
let dc = ["batman","superman","wonderwomen"];

// let all_heroes = marvel.concat(dc);
// console.log(all_heroes);

let all_heroes = [...marvel,...dc];
console.log(all_heroes);

const confused_array = [1,2,3,[4,5],6,[7,[8]]];
const solved_array = confused_array.flat(Infinity);
console.log(solved_array);

console.log(Array.isArray("Kritesh"));
console.log(Array.from("Kritesh"));
console.log(Array.from({name:"Kritesh"})); // find why

let score1 = 23;
let score2 = 45;
let score3 = 100;
console.log(Array.of(score1,score2,score3));