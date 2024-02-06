const answerEl = document.body
const questionEl = document.getElementById("question")
/* 🌴 Save the Weekend 🌴

Your best friend is a copywriter who writes product descriptions 
for a living. You want to use your hacking skills to help them 
automate their job so you both can spend the weekend on a 
tropical island. 

Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 

Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description. 

Each description should look like this: 
[
    {
        id: 1,
        title: "Scrimba Podcast", 
        ...
        description: "Scrimba Podcast is a 50 minute education podcast hosted 
        by Alex Booker."
    }
    ...
]

If the podcast has more than one host, you can display only the first host.

Stretch goal: Display all three hosts in the description, seperated with commas: 

Example description: "Coding Corner is a 55 minute education podcast hosted by Treasure Porth, Guil Hernandez, and Tom Chant."
*/ 

questionEl.innerHTML += `Use array methods and the existing podcast data to write a function that
can generate a description for each podcast. 
<br /><br />
Add the description as a new property on each podcast object, and return
a new podcast array where each podcast has a description.
`

import podcasts from "./data.js";

function flattening (arr) {
  if(arr.length === 1) {
    return arr.join(' ')
  }
  else if (arr.length === 2) {
    return arr.join(' and ')
  }
  else {
    return arr.map(a => {
      if(a === arr[arr.length -2]){
        return a.concat(', and ')
      }
      if(a === arr[arr.length-1]){
      return a
    }
        else {
          return `${a}, `
        }
    }).join('')
  }
}

function createDescriptionsFor(data){
   const description = data.map(db => {
    return {...db,
            description: `${db.title} is a ${db.duration} minute ${db.tags[0]} podcast hosted by ${flattening(db.hosts)}.`
          }
   })
   const list = description.map(db => `<p>${db.description}</p>`)
   answerEl.innerHTML += `<section>${list.join(' ')}</section>`
    return description
}

console.log(createDescriptionsFor(podcasts))

