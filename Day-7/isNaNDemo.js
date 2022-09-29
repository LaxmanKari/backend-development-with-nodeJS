let a = "10";
let b = "abc"; 
let c = "lakki"; 
let d = 10 - c; 

console.log(isNaN(a)); //false
console.log(isNaN(b)); //true
console.log(isNaN(c)); //true
console.log(isNaN(d)); //true


let x = 9; 
console.log(x);
console.log((typeof(x)== 'number' && isNaN(x) ? "NaN value" : "Not NaN value"));