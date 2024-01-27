const answerEl = document.body
const questionEl = document.getElementById("question")
/*  
Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.

Example output: 73.44
*/

questionEl.innerHTML += `Use reduce() to total the groceries. 
Then find a method that will round the total to 2 decimal places.
`

import shoppingCart from "./data.js";

function total(arr){
    // 1) map the the array to get an array with only price
    // 2) use the reduce method to add up the different prices
    const map = arr.map(({price}) => price)
    const totalSum = map.reduce((a,b) => a + b)
    answerEl.innerHTML +=`
    <p>[${map.join(', ')}]</p>
    <p>${totalSum.toFixed(2)}</p>`
    return totalSum.toFixed(2)
}

console.log(total(shoppingCart));
