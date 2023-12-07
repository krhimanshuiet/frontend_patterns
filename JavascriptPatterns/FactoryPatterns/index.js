const crypto = require('crypto') 

/*
DRY: The factory pattern is useful when we have to create multiple
objects that share the same properties, without having to repeat the 
same code over and over. A factory function can easily return a custom
object depending on the current environment, or user-specific configuration.
*/
const createUser = (firstName,lastName) => (
    {
    id:crypto.randomUUID(),
    createdAt:Date.now(),
    firstName,
    lastName,
    fullName:`${firstName} ${lastName}`
}
)

const u1 = createUser("himanshu","kumar")
const u2 = createUser("rakesh","kumar")
const u3 = createUser("ram","kumar")
const u4 = createUser("mahesh","kumar")

console.log({u1,u2,u3,u4});