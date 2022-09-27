//ToNumber type conversison when we gt argument as a string
// JS iterators over the string and if it is able to convert to a number ,it will or else return Nan

const x = console.log; 
x("123" - 2); //121
x("-123" - 2); //-125
x("00123" - 2); //121
x("001.23" - 2); //-0.77
x("001fg23" - 2); //Nan
//ToNumber(001fg23) --> NaN because this string cannot be parsed a number

x(undefined - 3); // NaN

/* 
undefined is not a valid number,so we make it undergo ToNumber abstract operation
ToNumber(undefined) -> NaN 
NaN - 2 --> for any number when you do any operation with NaN it results NaN

NaN - 3 == NaN

*/

x(null - 5); 
/* 
null is not a valid number,so we make it undergo ToNumber abstract operation
ToNumber(null) -> 0

null - 5 == -5

*/

// NaN type is Number

// x(Symbol("123") - 3); //TypeError: Cannot convert a Symbol value to a number

x(4 - true) // 3

// ToNumber(true) returns 1;

x("0xf" - 1); //14
/* 
"0xf", is a string, but in the starting we have 0x which denotes start of hexadecimal value
so JS tries to convert to a number if the hexadecimal value is valid. 
"0xf" returns 15 
15 - 1 gives us 14
*/

x("0xz" - 1); //NaN
//0xz is not a valid hexadecimal 

console.log("0o11" - 1); //8
// "0o11" is a string,and can become a valid octal number
// ToNumber("0o11" --> 9) 
//9 -1 gives 8