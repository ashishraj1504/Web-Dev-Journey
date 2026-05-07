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