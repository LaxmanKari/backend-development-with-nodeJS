let x = console.log; 

x("-1" * +23); // converts both argu to a number and then substract 
x("12 + 3 " - 4)

x(false - 7)//0
x("false" - 7)//Nan

x("070"- 10); // O/P is 60;  js will be able to convert 070 to 70 when 070
// is in string type i.e "070"

//Interesting case: // when 070 is in number type
// 070 is treated as 46 
console.log(070 - 10) // O/P is 46 

//If you observe valueOf() is not a abstract func i.e. we can use
// we have set the objects value as 8 using valueOf()
console.log(10  - {"name": "lakki", valueOf(){return 2;}}); // O/P :8 

//If valueOf() returns non primitive i.e not object , then toString() is called
console.log(10  - {
    "name": "lakki", 
    valueOf(){return {};},
    toString(){return 2;}
}
);  // O/P - 8

//Default behavior of toString() 
a = {"x" : 1} 
console.log(a.toString()); //  O/P : [object Object]

//Default behavior of valueOf() 
console.log(a.valueOf()); // O/P : { x: 1 }

//OVERRIDDING key 
a = {"x": 2,
     "x": 3
}
console.log(a.valueOf()); //O/P: { x: 3 }

//TRY THIS: 
let a = 45 + {a:10}; 
console.log(a); // O/P: 45[object Object] 
//How ?? 

{
    let a = 45 - {a:10}; 
    console.log(a); // O/P: NaN
}

//[undefined] becomes 0


{
    let x = console.log; 
let x1 = (2>3) ? 1 : 2; 
x(x1)
let x2 = (2<3) ? 2 : 3
x(x2);
}


let a1 = [undefined].toString();
console.log(a1);