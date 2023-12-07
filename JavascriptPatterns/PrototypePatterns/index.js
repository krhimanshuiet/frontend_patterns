// prototype patterns 

/*
If we want to share properties among many objects of
the same type, we can use the Prototype pattern
*/

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   bark() {
//     console.log(`${this.name} is barking!`);
//   }
//   wagTail() {
//     console.log(`${this.name} is wagging their tail!`);
//   }
// }

function Dog(name,age){
    this.name = name;
    this.age = age;
}

Dog.prototype.bark = function (){return `${this.name} barks`}
Dog.prototype.wagTail = function (){return `${this.name} wagging`}

const dog1 = new Dog("Max", 4);
const dog2 = new Dog("Sam", 2);
const dog3 = new Dog("Joy", 6);
const dog4 = new Dog("Spot", 8);

console.log({dog1,dog2,dog3,dog4});

console.log(dog1.bark());

function User(firstname,lastname,email){
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.fullname = `${firstname} ${lastname}`
}

User.prototype.checkLastOnline = function() {
    return `${this.fullname} was last online on ${Date.now()}`
}

User.prototype.sendEmail = function() {
    return `email sent to ${this.email}`
}

User.prototype.delete = function() {
    return `${this.fullname} deleted sucessfully`
}

const u1 = new User("himanshu","kumar","hks@gmail.com")
const u2 = new User("sonu","kumar","sonu@gmail.com")
const u3 = new User("ram","kumar","ram@gmail.com")
const u4 = new User("mohan","kumar","mohan@gmail.com")
const u5 = new User("roshan","kumar","roshan@gmail.com")
const u6 = new User("golu","kumar","golu@gmail.com")

console.log({u1,u2,u3,u4,u5,u6});

console.log(u1.checkLastOnline());
console.log(u2.sendEmail());
console.log(u3.delete());