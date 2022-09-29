console.log(null==undefined); //true
console.log(undefined==null); //true
console.log(10=="10"); //true 
console.log(10=="12"); //false 
//one is number so other is converted to a number i.e ToNumber("12") gives 12  
console.log('99'==99) //true
console.log(false==0); // ToNumber(false) = 0 //true
console.log(true==10); //ToNumber(true) =1 //false 
console.log()

let a =5; 
if(a){ // if(condition) //expects a bool value, so a will be converted to bool, as 5 is truthy
  console.log("Hi") //prints
} 

if(a == true){ //on is bool, so bool will be converted to ToNumber, ToNumber(true) gives 1 , 5 not value to 1
    console.log("Yo")//doesn't print
}

