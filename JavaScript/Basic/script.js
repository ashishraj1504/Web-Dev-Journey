// console.log("ashish");
// console.info("raj");
// console.warn("warn");
// console.error("error");
// console.table();

// let nm = prompt("name ?");
// console.log(nm);

// alert("alert");

        // day  -  28

// how to add comments
//datatypes - types of data
    // ashish - String
    // 12 - Number
    // 73.38 - float
    // null char array object boolean etc

// undifined
    // var a;

//NaN
    // koi operation ka number mai val nhi hai to phir - NaN aaiyega

// relative and primitive datatypes in js
    // var a = [1,2,3,4];
    // var s = a; // s mai a ka reference gaya hai copy nhi huwa hai
    // reference - array object function - direct value can't copy
    // primitives - number boolean strings null undefined NaN - direct value can copy

        // day  -  30

// arithmetic operator
    // + - * / % **
    // 2 ** 3 = 8 basically power

// assignment operators
    // = += -= *= /= %=

// comparison operator
    // == === != !== > < >= <=
    // == (not strict) never use this | === (strict compare) use this
    // != (not strict) never use this | !== (strict compare) use this

// logical op
    // && || !(not)
    
//ternary op
    //condition ? dothis : dothat

// type checking op
    //1. typeof     2. instanceof

// optional chancing
    // ?. (safe access to nested values)
    // let obj = {};
    // obj?.name?.first;

        // day  -  32

// let a = 1;
// if(a>10){
//     console.log("hello");
// } else{
//     console.log("bye bye");
// }
// // 0 "" false NaN null undefined document.all
// // kuch bhi dikhe -> true
// if(0){
//     console.log("hey");
// } else{
//     console.log("working");
// }

// for(let i=1;i<5;i++){
//     console.log(i);
// }

        // day  -  33

// jab bhi prompt se kuch daalo ge wo hamesha string dega agar number mai chaiye to 
// parseInt();
// Number();
// +prompt("number: ");

// let password = "ashish";
// let i=0;
// for(i=0;i<3;i++){
//     let pass = prompt("enter password: ");
//     if(pass === password){
//         console.log(pass);
//         break;
//     }

// }
// if(i===3) console.log("account locked");

        // arrays

// Useful array methods

// push() → add at end
// pop() → remove from end
// shift() → remove from start
// unshift() → add at start