const answerEl = document.body
const questionEl = document.getElementById("question")
/* Find Free Podcasts 

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]
*/

questionEl.innerHTML += `Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.
<br /><br />
Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
] 
`
import podcasts from "./data.js";


function getFreePodcasts(data){
    // 1) loop through the array
    // 2) return the values that you need
    // 3) filter the free podcasts
   const loopingData = data.map(d => {
    return {
        title: d.title,
        rating: d.rating,
        paid: d.paid
    }
   })
   const filtering= loopingData.filter(loop=> loop.paid === false)
   answerEl.innerHTML += `<p>${JSON.stringify(filtering)}</p>`
   return filtering
}

console.log(getFreePodcasts(podcasts))