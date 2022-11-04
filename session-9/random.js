

const randomButton = document.querySelector(".random-color");

const colors = ["red", "yellow", "green", "blue", "indigo", "violet"];

function selectRandomColor (items) {
    return items[Math.floor(Math.random()*items.length)];
}

function renderOnPage(color) {
    const titleTag = document.querySelector(".name")
    titleTag.textContent = color
}

randomButton.onclick = () => renderOnPage(selectRandomColor(colors));

