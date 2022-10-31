import displayPopulation from "./birmingham.js";
import { fruits } from "./fruit.js";
import createListOfFruits from "./giveMeFruits.js";


const button = document.createElement('button')

const buttonText = document.createTextNode('list of fruits')

button.appendChild(buttonText)

button.onclick = () => createListOfFruits(fruits)

document.body.appendChild(button)


const helloButton = document.querySelector('#remove-handler-button')

helloButton.addEventListener('click', removeHandler)

function removeHandler() {
    const box = document.querySelector("#remove-handler")
    box.removeEventListener('mousemove', randomNumber)
}


document
  .querySelector("#remove-handler")
  .addEventListener("mousemove", randomNumber);

function randomNumber() {
  document.querySelector("#random-number").innerHTML = Math.random();
}


