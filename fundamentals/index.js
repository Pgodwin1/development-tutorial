// variables:  are container that stores data values, this is where you can store values like numbers, strings, booleans, null or undefined and retrieve them. E.g:

// DataType: Kind of values are variable holds e.g numbers (o - 9), strings ("peter", 'peter', ``: template literal), booleans (true, false), null (unknown), undefined (let y)
//varible  = value

// keywords
// const, let, var, this, function, return 
// let can be reassigned
// const cannoy be reassigned: constant variable

// variable naming rules: camelCase, snake_case, you can't start a varible name with a number, you can't use hyphen in variable names.

let age  = 25 // inteters
let them = 87.9 // float
let me = 87632458976598739 // BigInt
age = 50
// const month = 6
// month = 9
console.log(age)
let name = "peter"
let y = true
let p = undefined // let p;
let k = null

//casing:
let firstName = "john" // camelCase
let first_name = "john" // snake_case
// let 6name = "john"
// let first-name = "john"

let items = [1, 3, 5] // array
let user = {
	name: "same",
	age: 98
} // object saves key-value pairs

console.log(user)
console.log(p, k)

console.log(`${name} is ${age} years old, is that ${y}`)// string concatenation

