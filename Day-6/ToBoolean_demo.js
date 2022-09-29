// To test ToBoolean abstract operation
// we can use logical not (!) as this uses ToBoolean internally

//list of falsy values (in ToBoolean abstract operation)
/*null
undefined
+0 
-0 
NaN
"" (empty string)
false
*/

//other than this list all returns true


console.log(!0); //true
/* 
0 ->false
ToBoolean(0) -> falsy 
!0 -> true
*/

console.log(!(-4));  //false
/*
-4 --> truthy 
ToBoolean(-4) --> true
!(-4) -> false
*/

console.log(!{}); //false

console.log(!(console.log(0)));
// console.log returns undefined
//undefined is falsy 
// !(falsy) returns true


