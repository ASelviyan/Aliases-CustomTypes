// Costume type are types that you create your self
// Costume types cannot have variable names that are already being used by javascript 
//this is how you build a costume type first you add the type key word and then a variable name followed by the value you want that costume type to have
type Combined = number | string 

//EX1: simple example
//so instead of doing this 
let add: number | string 
//you would do this 
let add1: Combined

//EX2: object example 
//instead of this
function greet1(user: { name: string; age: number }) {
    console.log('Hi, I am ' + user.name);
  }
   
  function isOlder1(user: { name: string; age: number }, checkAge: number) {
    return checkAge > user.age;
  }

//you can do this
//literal type called user
type User = { name: string; age: number };
 
//being used as a parameters costume type
function greet2(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder2(user: User, checkAge: number) {
  return checkAge > user.age;
}