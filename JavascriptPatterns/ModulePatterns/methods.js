const abc = 20; // private

// public 
const sum = (a,b) => a+b+abc;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

export {sum,subtract,multiply,divide}