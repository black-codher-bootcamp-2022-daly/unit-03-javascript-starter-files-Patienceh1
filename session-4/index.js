// ****************************************************TASK 1 - OBJECTS****************************************************
 const personA = {
    name: "Micah",
    age: 4,
    location: "Sutton",
    likes: "trains",
};

const personB = {
    name: "Naishe",
    age:2,
    location: "wolves",
    likes: "peppa big"
};

const personC = {
    name: "Aaron",
    age: 1,
    location: "Sutton",
    likes: "blanky",
};

const personD = {
    name: "adie",
    age:0,
    location: "wolves",
    likes: "milk",
}

function biograghy(person) {
return `Hi, my name is ${person.name},
      I am ${person.age},
      I live in ${person.location}, 
      I like ${person.likes}`
}


console.log(biograghy(personA));













// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***
/*
 const x = 6;
 const y = 4;

 const addition = x + y + x;

 console.log("Addition: x + y " + addition);

 const subtraction = x - y;

 console.log("Subtraction: x - y " + subtraction);

 const multiplication = x * x;

 console.log("multiplication: x * y " + multiplication);

 const division = x * y;

 console.log("multiplication: x * x " + multiplication);



 const multiplication2 = x * y * x;
console.log("here I multiply" + " " + multiplication2);

const subtraction2 = x - y + x;
console.log("Take it away" + " " + subtraction2);

const addition2 = x + y + x;
console.log(" Add it up" + " " + addition2);

const division2 = x / y * x;
console.log("divide it" + " " + division2);









// ****************************************************TASK 3****************************************************

const myAge = 26;
const minDrivingAge = 17;

const drivingAge = (myAge > minDrivingAge);

console.log("Am I old enough to drive," + " " + drivingAge);





// HOME WORK TASK 1 



function addition (x, y) {
    return x + y;
}
function subtraction (x, y) {
    return x - y;
}

function multiplication (x, y) {
    return x * y;
}

function division (x, y) {
    return x / y;
}

const calculator = {
add:addition,
subtract:subtraction,
multiply:multiplication,
divide:division,
};

console.log(calculator.multiply(5, 8))
*/


function whoIsOlder (personA, personB) {
  
  const ageDifference = personA.age - personB.age

return `${personA.name} is ${ageDifference} years older than ${personB.name}` 
};

console.log(whoIsOlder(personA, personB))