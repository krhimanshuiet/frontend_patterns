let instance;
let counter = 0;

// 1. Creating the `Counter` class, which contains a `constructor`, `getInstance`, `getCount`, `increment` and `decrement` method.
// Within the constructor, we check to make sure the class hasn't already been instantiated.


class Counter {
    constructor(){
        if(instance){
            throw new Error('You can only create one instance');
        }
        instance = this;
    }

    getCount(){
        return counter;
    }

    increment(){
        return ++counter;
    }

    decrement(){
        return --counter;
    }
}
// 2. Setting a variable equal to the the frozen newly instantiated object, by using the built-in `Object.freeze` method.
// This ensures that the newly created instance is not modifiable.

const singletonCounter1 = Object.freeze(new Counter());



// 3. Exporting the variable as the `default` value within the file to make it globally accessible.
export default singletonCounter1;




let counter1 = 0;

// 1. Create an object containing the `getCount`, `increment`, and `decrement` method.
const counterObject = {
  getCount: () => counter1,
  increment: () => ++counter1,
  decrement: () => --counter1,
};

// 2. Freeze the object using the `Object.freeze` method, to ensure the object is not modifiable.
export const singletonCounter2 = Object.freeze(counterObject);

// 3. Export the object as the `default` value to make it globally accessible.
// export  singletonCounter2;


let counter2 = 0;

export const singletonCounter3 = Object.freeze({
  getCount: () => counter2,
  increment: () => ++counter2,
  decrement: () => --counter2,
});