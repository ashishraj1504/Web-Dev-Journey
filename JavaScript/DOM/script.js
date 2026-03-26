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

// var btn = document.querySelector('button')
// var box = document.querySelector('#box')

// btn.addEventListener('click',function(){
//     var c1 = Math.floor(Math.random()*256);
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);

//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
// })

// var arr = ['ashish','rahul','mohit','shivam','arnav','atishey','sumit','aadarsh','pragati','samit']

// var a = Math.floor(Math.random()*arr.length)
// console.log(arr[a]);


        // day - 44

// var btn = document.querySelector('button')
// var main = document.querySelector('main')

// btn.addEventListener('click',function(){
//         var div = document.createElement('div')
//         var x = Math.floor(Math.random()*90)
//         var y = Math.floor(Math.random()*90)
//         var r = Math.floor(Math.random()*100)
//         var c1 = Math.floor(Math.random()*256)
//         var c2 = Math.floor(Math.random()*256)
//         var c3 = Math.floor(Math.random()*256)
//         div.style.height = '70px'
//         div.style.width = '70px'
//         div.style.position = 'absolute'
//         div.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//         div.style.left = x+'%'
//         div.style.top = y+'%'
//         div.style.rotate = r+'deg'
//         main.appendChild(div)
// })

        // day - 45

// setTimeout - delay

// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')
// btn.addEventListener('click',function(){
//         h1.innerHTML = 'changing user'
//         setTimeout(function(){
//                 h1.innerHTML = 'i am velzod'
//         },2000)
// })

//  setInterval - controlled loop

// var btn = document.querySelector('button')
// var h1 = document.querySelector('h1')
// var inner = document.querySelector('.inner')
// var grow = 0
// btn.addEventListener('click',function(){

//         btn.style.pointerEvents = 'none';
//         var num = 30 + Math.floor(Math.random()*50)
//         var int = setInterval(function(){
//                 grow++
//                 h1.innerHTML = grow+'%'
//                 inner.style.width = grow+'%'
//         },num)
//         setTimeout(function(){
//                 clearInterval(int)
//                 btn.innerHTML = 'Downloaded'
//                 btn.style.opacity = 0.5
//                 console.log('downloaded in',num/10,'sec');
                
//         },num * 100)
// })

        // day - 46

// var img = document.querySelector('img')
// var love = document.querySelector('#love')

// img.addEventListener('dblclick',function(){
//         love.style.opacity = 1
//         love.style.transform = 'translate(-50%,-50%) scale(1) rotate(0deg)'
//         setTimeout(() => {
//                 love.style.transform = 'translate(-50%,-350%) scale(1) rotate(60deg)'
//         }, 800);
//         setTimeout(() => {
//                 love.style.opacity = 0
//         }, 1000);
//         setTimeout(() => {
//                 love.style.transform = 'translate(-50%,-50%) scale(0) rotate(-60deg)'
//         }, 1200);
// })

                // day - 47

const users = [
  {
    username: "ashish_dev",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    profession: "Frontend Developer",
    description: "Passionate about building interactive UI using React and JavaScript."
  },
  {
    username: "anyone_codes",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    profession: "Backend Developer",
    description: "Loves working with APIs, databases, and server-side logic."
  },
  {
    username: "random_ui",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    profession: "UI/UX Designer",
    description: "Designs clean and user-friendly interfaces with great user experience."
  },
  {
    username: "rahul_ai",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    profession: "AI Engineer",
    description: "Works on machine learning models and intelligent systems."
  }
];

var sum = ''
users.forEach(function(ele){
        sum += `<div class="card">
                <img src="${ele.image}" alt="">
                <h2>${ele.username}</h2>
                <h3>${ele.profession}</h3>
                <p>${ele.description}</p>
        </div>`
})
var main = document.querySelector('main')
main.innerHTML = sum