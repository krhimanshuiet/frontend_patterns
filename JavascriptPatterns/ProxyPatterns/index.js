const person = {
    name:'Ram',
    age:32,
    city:'delhi',
    state:"delhi",
    country:"india"
}

const proxyPerson = new Proxy(person , {
    get:(target,prop) => {
        console.log(`value of ${prop} is ${target[prop]}`);
        return target[prop];
    },
    set:(target,prop,value) => {
        console.log(`${target[prop]} is changed to ${value}`);
        target[prop] = value;
        return  true;
    }
})


const proxy2Person = new Proxy(person,{
    get:(target,property) => Reflect.get(target,property),
    set:(target,property,value) => Reflect.set(target,property,value)
})

// proxyPerson.name = "shayam"
// console.log(proxyPerson.name)
// proxy2Person.age += 1;
// console.log(proxy2Person.age);

// proxy challange 
function isValidEmail(email) {
    const tester =
      /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    return tester.test(email);
  }
  
function isAllLetters(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    return /^[a-zA-Z]+$/.test(char);
  }
const user = {
    firstName:"himanshu singh",
    lastName:'kumar',
    username:'hks3738',
    age:42,
    email:'hks@gmail.com'
}

const newUser = new Proxy(user , {
    get:(obj,prop) => {
        console.log(`${new Date} | The value of ${prop} is ${obj[prop]}`);
        Reflect.get(obj,prop)
    },
    set:(obj,prop,value) => {
        if(prop === 'username'){
            if(!isAllLetters(value)){
                throw Error("Its should contain letter only")
            }
            else if(value.length <= 3){
                throw Error('Length should be more than 3')
            }
        }
        else if(prop === 'email'){
            if(!isValidEmail(value)){
                throw Error("Please give valid email.")
            }
        }
        else if(prop === 'age'){
            if(!Number.isInteger(value)){
                throw Error("age must be number")
            }
            else if(value < 18){
                throw Error("min age should be 18")
            }
        }
        console.log(`${new Date} | The value of ${prop} is ${value}`);
        Reflect.set(obj,prop,value)
    }
})

newUser.email = 'abcd@gmail.com';
console.log(newUser.email);