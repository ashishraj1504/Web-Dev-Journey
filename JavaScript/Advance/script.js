// class Person{
//     constructor(name,age,email){
//         this.name = name
//         this.age = age
//         this.email = email
//     }
// }
// prototype - shared memory
// Person.prototype.course = "btech"

// let p1 = new Person("ashish",20,"e@h.com")
// let p2 = new Person("rahul",20,"r@g.com")
// let p3 = new Person("mohit",20,"m@f.com")

// call -> fnc chalata hai and this ki value set karta hai
//apply -> WAHI KARTA HAI JO CALL KARTA HAI AND arguments mein pahli value this ki and doosri value array hoti hai
// blind -> wahi karta hai jo call karta hai and aapko naya fnc deta hai

//callback -> ek func jo turant nhi chalega ye chalega jab aapka koi kaam complete hoga

// setTimeout(function(){
//     console.log("hey");
// },2000)

// function UserAddress(address,cb) {
//     console.log("fetching Details: ");
//     setTimeout(()=>{
//         cb({
//             city: "KP3",
//             state: "U.P"
//         })
//     },2000)
// }
// UserAddress("provide address", function(Details){
//     console.log(Details);
// })

//     day - 61

// ------ promises ------

// const prm = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, 3000);
// });

// prm
//   .then(() => {
//     console.log("complete");
//   })
//   .catch(() => {
//     console.log("rejected");
//   });

// -------- async await --------

// works on promises

// async function abc () {
//     let raw = await fetch(`https://randomuser.me/api/`);
//     let data = await raw.json();
//     console.log(data);
// }
// abc();

// function getnum() {
//     return new Promise((reslove, reject)=>{
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10);
//             if(num>=5){
//                 reslove(true);
//             }
//             else{
//                 reject(false);
//             }
//         }, 3000);
//     });
// }
// async function check() {
//     let v = await getnum();
//     console.log(v);
// }
// check();

//     day - 62

// syntax error -> written code mai error
// runtime error -> no error at time of writting code
// logical error -> diff work instead of some work

// try {
//     let a = 12;
//     console.log(a.name.first);
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log("helloo");
// }

// try {
//     let a = 12;
//     console.log(a.name.first);
// } catch (err) {
//     console.log(new Error("something went wrong"));
// }

//     day - 63

// async function getWeather(city){
//     try{
//         let apikey = `f83cb56ca2aefc2812b076c93255dd4c`;

//     let raw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&exclude={part}&appid=${apikey}`);

//     if(!raw.ok){
//         throw new Error("location name is wrong");
//     }

//     let realData = await raw.json();
//     console.log(realData);

//     }
//     catch(err){
//         console.log(err.message);
//     }

// }
// getWeather("london");

const users = [
    "a.gmail.com",
    "b.gmail.com",
    "c.gmail.com"
];
function sendEmail(email) {
  return new Promise((resolve, reject) => {
    let time = Math.floor(Math.random() * 5);
    setTimeout(() => {
      let prob = Math.floor(Math.random() * 10);
      if (prob <= 5) resolve("Email sent");
      else reject("email failed");
    }, time * 1000);
  });
}

async function sendEmails(email) {
  let allRepo = email.map(function (email) {
    return sendEmail(email)
      .then(function (data) {
        return data;
      })
      .catch(function (err) {
        return err;
      });
  });
  let ans = await Promise.all(allRepo);

  ans.forEach(function (status) {
    console.log(status);
  });
}
sendEmails(users);
