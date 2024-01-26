const questionEl = document.getElementById("question")
const answerEl = document.body
/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

questionEl.innerHTML += `Write a function to find the food with the highest number of votes.
<br /> <br />
Example input: {<br />
    "🍕 pizza": 3, <br />
    "🌮 tacos": 10,<br /> 
    "🥗 salads": 7,<br />
    "🍝 pasta": 5
}<br /><br />
Example input:{<br />
    "🐈 cats": 19, <br />
    "🐕 dogs": 17<br />
} 

`
const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5
}

function findTheWinner(obj){
    // 1) create two variable to hold higgest vote count and the winning meal
    // 2) loop through object
    // 3) compare each vote tally
    // 4) toss the lower vote
 let winningVote = 0
 let winningMeal = ''
 for(let food in obj) {
    if(obj[food] > winningVote) {
        winningMeal = food
        winningVote = obj[food]
    }
 }
 answerEl.innerHTML += `<p>The winner is ${winningMeal} with ${winningVote} votes.</p>`
 return `The winner is ${winningMeal} with ${winningVote} votes.`
}

console.log(findTheWinner(gameNightFood));
console.log(findTheWinner({"🐈 cats": 19, "🐕 dogs": 17}));