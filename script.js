const answerEl = document.body
const questionEl = document.getElementById("question")
/*
    You're online shopping for holiday gifts, but money is tight
    so we need to look at the cheapest items first. 
    Use the built in sort() method to write a function that returns a new array of
    products sorted by price, cheapest to most expensive. 
    
    Then log the item and the price to the console: 
    
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
*/

questionEl.innerHTML += `Use the built in sort() method to write a function that returns a new array of
products sorted by price, cheapest to most expensive. 
<br /><br />
Then log the item and the price to the console: 
<br /><br />
    💕,0
    🍬,0.89
    🍫,0.99
    🧁,0.99
    📚,0.99
    ... continued
`

import products from "./data.js";

function sortProducts(data){
    const sorting= data.sort((a,b) => a.price - b.price)
   answerEl.innerHTML += `<p>${JSON.stringify(sorting)}</p>`
   return sorting
}

const listByCheapest = sortProducts(products);
console.log(listByCheapest);