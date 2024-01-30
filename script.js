const answerEl = document.body
const questionEl = document.getElementById("question")
/*
Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.

Expected output: 9.97  
*/

questionEl.innerHTML += `Use reduce() and only reduce() to calculate and return 
the total cost of only the savory
items in the shopping cart.
<br /><br />
Expected output: 9.97`


import shoppingCart from "./data.js";

function totalSavory(arr){
    const totalSum = arr.reduce((a,b) => {
        if(b.type=== 'savory'){
            a += b.price
        }
        return a
    },0)
   
    answerEl.innerHTML += `<p>${newArray.join(', ')}</p>
    <p>Total is $${totalSum}.
   `
    return totalSum
}

console.log(totalSavory(shoppingCart));
