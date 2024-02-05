const answerEl = document.body
const questionEl = document.getElementById("question")
/* Night at the Scrimbies 

It's time for the Scrimbies, a prestigious award show for podcast hosts.
We need to assemble a list of podcast hosts so we can start handing out awards. 

Write a function that takes in the podcast data and
returns a flat array of podcast hosts. There are quite a few ways to approach
this, but try solving the problem using reduce(). 

Once you have a flat array of hosts, write a second function to randomly assign each host a prize
from the awards array. 

Example output: ["🏆 Alex Booker", "⭐ Bob Smith", "💎 Camilla Lambert" ...] 

*/ 

questionEl.innerHTML += `Use reduce() to write a function that returns the average number of likes.
`

import podcasts from "./data.js";

const awards = ["🏆", "⭐", "💎", "🥇", "👑"];

function getHosts(data){
  let flat = data.reduce((a,b) => {
         return a.concat(b.hosts)
 }, []
 )
 return flat
}

function assignAwards(data){
 const hosts = getHosts(data)
 const randomReward = () => Math.floor(Math.random() * awards.length)
const award = hosts.map(a => `${awards[randomReward()]} ${a}`)
answerEl.innerHTML += `${award.join(', ')}`
return award
}


console.log(getHosts(podcasts));
console.log(assignAwards(podcasts));
