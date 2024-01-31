const answerEl = document.body
const questionEl = document.getElementById("question")
/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

questionEl.innerHTML += `Write a function that takes in the media data and returns
a flat array of unique tags. 
<br />
Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]
`

import mediaData from "./data.js";

function getUniqueTags(data){
   const flatening = data.map(db => {
    return db.tags
   }).flat()
   const checking = {}
   const uniqueTags = flatening.filter(db => {
    if(!checking[db]){
        checking[db]= true
        return true
    }
    return false
   })
   answerEl.innerHTML+= `<p>${uniqueTags.join(', ')}</p>`
   return uniqueTags
}

console.log(getUniqueTags(mediaData));