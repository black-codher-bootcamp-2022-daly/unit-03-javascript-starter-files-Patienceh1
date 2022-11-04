

const randomButton = document.querySelector(".random-color");

const colors = ["red", "yellow", "green", "blue", "indigo", "violet"];

function selectRandomColor (items) {
    return items[Math.floor(Math.random()*items.length)];
    
}




randomButton.onclick = () => (selectRandomColor(colors));

