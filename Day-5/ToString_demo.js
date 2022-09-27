console.log("Kari" + "Laxman");

console.log(undefined + "node"); 
/* 
 ToString(undefined) --> "undefined"
*/ 

console.log("5" + null); 

/* 
One of them is already a string so both of them becomes a string
*/ 

console.log("sanket" + true); 
/* 
 ToString(true) --> "true"
*/

console.log("lakki" + [null,undefined])// lakki,

console.log("lakki" + {"a" : 10}); 

/* 
"lakki" is already a primitive
{"a" : 10} ---> is not a primitive, so we call toPrimitive without a hint,
means hint --> number 
 we first call valueOf on {"a" : 10} --> and it returns same object
 we call toString -> toString will return '[object Object]' which is a string i.e. primitive

 O/P : lakki[object Object]

*/

console.log(10 - {"a": 45}); // O/P: NaN 
/* 
10 is already a number 
{"a":45} is going to get converted ToNumber, and this is an object 
for objct we call ToPrimitive with hint Number
first we call valueOf -> it returns the same object -> {"a": 45}
then we call toString _. it returns '[object Object]' which is primitive 
so call ToNumber on '[object Object]' again which gives NaN
therefore, 10 - NaN == NaN
*/

let x = {"b":90, valueOf(){return 2;} }
console.log(x - 10) //-8 
/*
x is an object, w need to pass it to ToPrimitive with hint Number
we call valueOf -> it returns 2; which is a primitive
x becomes 2  10 is already a number
2-10 = -8 
*/

console.log(x + "lakki");//2lakki;

console.log("lakki" + {"a":90, valueOf(){return {};}, toString(){return {}}});
//TypeError: Cannot convert object to primitive value