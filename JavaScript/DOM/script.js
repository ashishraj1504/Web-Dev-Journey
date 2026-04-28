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

// const users = [
//   {
//     username: "ashish_dev",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//     profession: "Frontend Developer",
//     description: "Passionate about building interactive UI using React and JavaScript."
//   },
//   {
//     username: "anyone_codes",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//     profession: "Backend Developer",
//     description: "Loves working with APIs, databases, and server-side logic."
//   },
//   {
//     username: "random_ui",
//     image: "https://randomuser.me/api/portraits/women/3.jpg",
//     profession: "UI/UX Designer",
//     description: "Designs clean and user-friendly interfaces with great user experience."
//   },
//   {
//     username: "rahul_ai",
//     image: "https://randomuser.me/api/portraits/men/4.jpg",
//     profession: "AI Engineer",
//     description: "Works on machine learning models and intelligent systems."
//   }
// ];

// var sum = ''
// users.forEach(function(ele){
//         sum += `<div class="card">
//                 <img src="${ele.image}" alt="">
//                 <h2>${ele.username}</h2>
//                 <h3>${ele.profession}</h3>
//                 <p>${ele.description}</p>
//         </div>`
// })
// var main = document.querySelector('main')
// main.innerHTML = sum

                // day - 49

// var allbtn = document.querySelectorAll('button')

// allbtn.forEach(function(ele){
//         ele.addEventListener('click',function(){
//                 if(ele.innerHTML == 'Add Friend'){
//                         ele.innerHTML = 'Remove Friend'
//                 }
//                 else{
//                         ele.innerHTML = 'Add Friend'
//                 }
//         })
// })

                // day - 50

const reels = [
  {
    username: "travelwithriya",
    likeCount: 12450,
    isLiked: true,
    commentCount: 342,
    caption: "Sunsets just hit different in Goa 🌅",
    video: "https://www.pexels.com/download/video/17961476/",
    userProfile: "https://i.pravatar.cc/150?img=1",
    shareCount: 120,
    is_follow: true
  },
  {
    username: "fit_rahul",
    likeCount: 8930,
    isLiked: false,
    commentCount: 210,
    caption: "No excuses. Just results 💪",
    video: "https://www.pexels.com/download/video/34992110/",
    userProfile: "https://i.pravatar.cc/150?img=2",
    shareCount: 75,
    is_follow: false
  },
  {
    username: "foodie_nisha",
    likeCount: 15670,
    isLiked: true,
    commentCount: 489,
    caption: "Street food diaries in Delhi 😍",
    video: "https://www.pexels.com/download/video/35322357/",
    userProfile: "https://i.pravatar.cc/150?img=3",
    shareCount: 210,
    is_follow: true
  },
  {
    username: "techwitharjun",
    likeCount: 5420,
    isLiked: false,
    commentCount: 98,
    caption: "Top 3 apps you must try in 2026 📱",
    video: "https://www.pexels.com/download/video/19891724/",
    userProfile: "https://i.pravatar.cc/150?img=4",
    shareCount: 60,
    is_follow: false
  },
  {
    username: "dance_with_me",
    likeCount: 22340,
    isLiked: true,
    commentCount: 760,
    caption: "Trying this trending dance 🔥",
    video: "https://media.istockphoto.com/id/2242583008/video/colorful-parakeets-sitting-inside-cage-with-perch-and-toy.mp4?s=mp4-640x640-is&k=20&c=H9L_85djztbEPH9tcB13un8u2zj0f5CbxgIHK-taDoE=",
    userProfile: "https://i.pravatar.cc/150?img=5",
    shareCount: 340,
    is_follow: true
  },
  {
    username: "naturelover_amit",
    likeCount: 6780,
    isLiked: false,
    commentCount: 150,
    caption: "Peaceful morning vibes 🌿",
    video: "https://www.pexels.com/download/video/17961476/",
    userProfile: "https://i.pravatar.cc/150?img=6",
    shareCount: 90,
    is_follow: false
  },
  {
    username: "makeupbykavya",
    likeCount: 18760,
    isLiked: true,
    commentCount: 520,
    caption: "Soft glam look tutorial 💄",
    video: "https://media.istockphoto.com/id/2242583008/video/colorful-parakeets-sitting-inside-cage-with-perch-and-toy.mp4?s=mp4-640x640-is&k=20&c=H9L_85djztbEPH9tcB13un8u2zj0f5CbxgIHK-taDoE=",
    userProfile: "https://i.pravatar.cc/150?img=7",
    shareCount: 280,
    is_follow: true
  },
  {
    username: "comedy_king",
    likeCount: 25400,
    isLiked: true,
    commentCount: 890,
    caption: "Tag your best friend 😂",
    video: "https://www.pexels.com/download/video/19891724/",
    userProfile: "https://i.pravatar.cc/150?img=8",
    shareCount: 500,
    is_follow: false
  },
  {
    username: "carcraze_vik",
    likeCount: 11230,
    isLiked: false,
    commentCount: 305,
    caption: "Dream car spotted 🚗🔥",
    video: "https://www.pexels.com/download/video/34992110/",
    userProfile: "https://i.pravatar.cc/150?img=9",
    shareCount: 150,
    is_follow: true
  },
  {
    username: "bookworm_sara",
    likeCount: 7340,
    isLiked: true,
    commentCount: 180,
    caption: "This book changed my perspective 📚",
    video: "https://www.pexels.com/download/video/17961476/",
    userProfile: "https://i.pravatar.cc/150?img=10",
    shareCount: 95,
    is_follow: false
  }
];

var allreel = document.querySelector('.allreels')

function addData(){
        var sum = ''
        reels.forEach(function (elem,idx) {
                sum += `<div class="reel">
                        <video autoplay loop muted src="${elem.video || 'https://media.istockphoto.com/id/2212565932/video/woman-strolling-with-dog-on-tranquil-beach-at-sunset.mp4?s=mp4-640x640-is&k=20&c=9esc-nqMuqwQjVb16hUH0vJkF_aNG1I8K94jaoTJ080='}"></video>
                        
                        <div class="bottom">
                        <div class="user">
                                <img src="${elem.userProfile}" alt="">
                                <h4>${elem.username}</h4>
                                <button id=${idx} class="follow" >${elem.is_follow ? 'Following' : 'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                        </div>

                        <div class="right">
                        <div id=${idx} class="like">
                                <h4 class="likeIcon">
                                <i class="${elem.isLiked ? 'ri-heart-3-fill love' : 'ri-heart-3-line'}"></i>
                                </h4>
                                <h6>${elem.likeCount}</h6>
                        </div>

                        <div class="comment">
                                <h4 class="commentIcon"><i class="ri-chat-3-line"></i></h4>
                                <h6>${elem.commentCount}</h6>
                        </div>

                        <div class="share">
                                <h4 class="shareIcon"><i class="ri-send-ins-line"></i></h4>
                                <h6>${elem.shareCount}</h6>
                        </div>

                        <div class="menu">
                                <h4 class="menuIcon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                        </div>
                </div>`
        })
        allreel.innerHTML = sum
}
addData()

allreel.addEventListener('click',function(dets){
        if(dets.target.className == 'like'){
            if(!reels[dets.target.id].isLiked){
                reels[dets.target.id].likeCount++;
                reels[dets.target.id].isLiked = true
            }
            else{
                reels[dets.target.id].likeCount--;
                reels[dets.target.id].isLiked = false
            }
        }
        if(dets.target.className == 'follow'){
            if(!reels[dets.target.id].is_follow){
                reels[dets.target.id].is_follow = true
            }
            else{
                reels[dets.target.id].is_follow = false
            }
        }
    
    addData();

})