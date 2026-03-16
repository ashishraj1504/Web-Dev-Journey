// DOM - document object model

// dom 4 pillars
// selection of an element
// changing HTML
// changing CSS
// event listeners

var h1 = document.querySelector('h1');
h1.innerHTML = 'changed';
h1.style.color = 'pink';
h1.addEventListener('click', function(){
    console.log("hello");
    
});