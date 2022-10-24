// ****************************************************TASK 1****************************************************

const animals = ['cat', 'dog', 'pig']

animals.pop()
console.log(animals)







// ****************************************************TASK 2****************************************************
const names = [
  'Olivia',
  'Noah',
  'Oliver',
  'lily',
  'alan',
  'maisy',
  'hannah',
  'Mike',
  'reece',
  'emma'
]

names.reverse()
console.log(`before`,names)

names.sort()
console.log(`after`, names)


const numbers = [ -5, 325, 67, 100000, 150]

numbers.sort()
console.log(numbers)










// ****************************************************TASK 3****************************************************

 //Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },

  
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objectsfunction compare(a, b) {
function compare(a,b) {
return a.age - b.age;}



const sortedPeople = people.sort(compare).map(item => item.name)
console.log(sortedPeople);