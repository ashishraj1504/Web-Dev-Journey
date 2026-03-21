// DOM - document object model

        // day - 42

// dom 4 pillars
// selection of an element
// changing HTML
// changing CSS
// event listeners

// var h1 = document.querySelector('h1');
// var inc = document.querySelector('#inc');
// // h1.innerHTML = 'changed';
// // h1.style.color = 'pink';
// let a = 0;

// inc.addEventListener('click', function(){
//     a++;
//     h1.innerHTML = a;
    
// });

        // day - 43

var btn = document.querySelector('button')
var box = document.querySelector('#box')

btn.addEventListener('click',function(){
    var c1 = Math.floor(Math.random()*256);
    var c2 = Math.floor(Math.random()*256);
    var c3 = Math.floor(Math.random()*256);

    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})

var arr = ['ashish','rahul','mohit','shivam','arnav','atishey','sumit','aadarsh','pragati','samit']

var a = Math.floor(Math.random()*arr.length)

console.log(arr[a]);