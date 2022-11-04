// create an array of books that renders in HTML



const favouriteBooks = [
    
    { 
    
   
    name: "The Alchemist",
    author: "Paulo Coelho",
    price: 7},

    {name: "Still me",
    author: "Jojo Moyes",
    price: 10},

    {name: "The girl with the louding voice ",
    author: "Abi Dare",
    price: 11
}
]

const loopContainer = document.querySelector(".loop-container");
const title = document.createElement("h2");
const titleText = document.createTextNode("Favourite Books");
title.appendChild(titleText);
loopContainer.appendChild(title);


favouriteBooks.map((item) => {
    let list = document.createElement("ul");
    let listItem1 = document.createElement("li");
    let listItem2 = document.createElement("li");
    let listItem3 = document.createElement("li");
    
    listItem1.textContent = item.name;
    listItem2.textContent = item.author;
    listItem3.textContent = item.price;

    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);
    loopContainer.appendChild(list)
});
    











// function getSecondAuthor () {
//     return favouriteBooks
// }

// const randomButton = document.querySelector(".random-color");
// randomButton.onclick = () => (console.log(favouriteBooks[0].author));



// const favouriteColours = [
//     "yellow",
//     "blue",
//     "pink"
// ]



