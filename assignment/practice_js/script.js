        //Level 1 – Basic Function, Array & Object Code Tasks (Easy)
//Write a function `sayHello()` that prints `"Hello JavaScript"`.
function sayhello(){
    console.log("Hello JavaScript");
}
sayhello();

//Create a function `add(a, b)` that returns their sum and log the result.
function add(a,b){
    return a+b;
}
console.log(add(3,5));

//Write a function with a default parameter `name ="Guest"` that prints `"Hi <name>"`.
function print(name = "guest"){
    console.log(`hi ${name}`);
}
print("ashish");

//Use rest parameters to make a function that adds unlimited numbers.
function adds(...num){
    let sum = 0;
    for (const val of num) {
        sum += val;
    }
    console.log(sum);
}
adds(1,2,3,4);

//Create an IIFE that prints `"I run instantly!"`.
(function(){
    console.log("running instantly");
})();

//Make a nested function where the inner one prints a variable from the outer one.
function outer(){
    let a = 2;
    function inner(){
        console.log(a);
    }
    inner();
}
outer();

// Useful array methods

// push() → add at end
// pop() → remove from end
// shift() → remove from start
// unshift() → add at start

// Use a `for` loop to print all elements of an array.
let array = [1,2,3,4];
function printLoop(arr){
    // arr.forEach(ele => {
    //     console.log(ele);
    // });
    for(let ele of arr){
        console.log(ele);
    }
}
printLoop(array);

//Create an object `person` with keys `name`, `age`,and `city`, and print each key’s value.
let person = {
    name : "ashish",
    age : 19,
    city : "Noida"
};
function printObj(obj){
    // console.log(obj.name);
    // console.log(obj.age);
    // console.log(obj.city);
    for(let key in obj){
        console.log(obj[key]);
    }
}
printObj(person);

//Use `setTimeout()` to log `"Time’s up!"` after 2 seconds.
setTimeout(() => {
    console.log("Time's up!");
},2000);