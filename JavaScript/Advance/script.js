class Person{
    constructor(name,age,email){
        this.name = name
        this.age = age
        this.email = email
    }
}
// prototype - shared memory
Person.prototype.course = "btech"

let p1 = new Person("ashish",20,"e@h.com")
let p2 = new Person("rahul",20,"r@g.com")
let p3 = new Person("mohit",20,"m@f.com")