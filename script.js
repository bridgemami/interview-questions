const answerEl = document.body
const questionEl = document.getElementById("question")
/* Welcome Aboard Scrimba Airlines 

Our Scrimba Airlines in-flight entertainment package 
includes a variety of podcasts. We need to add a feature that suggests
podcasts to our patrons based on whether a flight is short or long. 

Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest. 

Your function shouldn't return anything. Instead log a numbered list 
of the title and duration of 
each podcast to the console, like this:

1. Crime Fan, 150 minutes
2. Mythical Creatures, 99 minutes
3. Crime Crime Crime, 70 minutes
4. Coding Corner, 55 minutes
5. Scrimba Podcast, 50 minutes
6. Something about Witches, 35 minutes

*/

questionEl.innerHTML += `Your sort function should take two arguments: the podcast data and
flight length. If the flight is 60 minutes or less, sort the podcast list 
from shortest to longest. If it's anything else, sort from longest
to shortest.  
<br /><br />
Expected output:<br />
1. Crime Fan, 150 minutes<br />
2. Mythical Creatures, 99 minutes<br />
3. Crime Crime Crime, 70 minutes<br />
4. Coding Corner, 55 minutes<br />
5. Scrimba Podcast, 50 minutes<br />
6. Something about Witches, 35 minutes<br />
`

import podcasts from "./data.js";

function sortByDuration(data, flightLength){
  const sortArray = data.sort((a,b) => {
    if(flightLength > 60){
        return b.duration - a.duration
    }
    else{
        return a.duration - b.duration
    }
  })
  const order = sortArray.forEach((a, i) => {
    answerEl.innerHTML += `<p>${i + 1}. ${a.title}, ${a.duration} minutes</p>`
   return `${i + 1}. ${a.title}, ${a.duration} minutes`
})
return order
}

sortByDuration(podcasts, 60)
sortByDuration(podcasts, 61)