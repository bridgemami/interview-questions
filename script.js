const answerEl = document.body
const questionEl = document.getElementById("question")
/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

questionEl.innerHTML += `It's the day after Halloween 🎃 and all the candy is on sale!
<br /><br />
To buy up all the candy, use map() and filter() to put all the
candy into a 'shoppingCart' array. 
<br /><br />
The new array should contain only the item and the price, like
this: 
<br /><br />
Expected output: 
[
    {item: "🍭", price: 2.99},
    {item: "🍫", price: 1.99}, 
    {item: "🍬", price: 0.89}
 ]
`
import products from "./data.js";

function getSaleItems(data){
    const filtering = data.filter(d => d.type === 'sweet')
    const shoppingCart= filtering.map(d=> {
        return {
            item: d.item,
            price: `$${d.price}`
        }
    })
    answerEl.innerHTML +=`<p>${JSON.stringify(shoppingCart)}</p>`
    return shoppingCart
};

console.log(getSaleItems(products))