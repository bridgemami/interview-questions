const answerEl = document.body
const questionEl = document.getElementById("question")
/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/ 

questionEl.innerHTML += `The function should eliminate everything but bugs and flowers. Use your function in the API call.  
<br /><br />
`

import animals from './data.js'
const flowerBed = document.querySelector('.emoji-flower-bed');
function clearTheGarden(arr){
  const newArr = []
   arr.map(a => {
      if(a.group === 'plant flower' || a.group === 'animal bug') {
        flowerBed.innerHTML += `<li>${a.htmlCode[0]}</li>`;
        return newArr.push(a)
      }
    })
    return newArr
  }

console.log(clearTheGarden(animals))