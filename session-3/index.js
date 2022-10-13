// This is a comment in JavaScript
// You can see where this file is connected to your HTML in the index.html on line 14
//let a = 5;
//const b = 10;
//let c = a + b;

//console.log(c);

//a = 20;

//console.log(a + c);

//c = a + b;


//console.log(c);

const userName = "Patience";

function sayHey () {
   console.log("HeygirlHey"+ ' ' + userName) ;
}


function conversation () {
    sayHey();
    console.log("How are you");
    console.log("Goodbye");
}

conversation()

function futureAge (name, age) {
    const calculatedAge = age + 5;
return "Hi" + " " + name + " " + "you will be" + " " + calculatedAge + " " + "in 5 years.";
}

console.log(futureAge("Patience", 26))