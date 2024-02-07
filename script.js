const answerEl = document.body
const questionEl = document.getElementById("question")
/*
   Let's create an emoji slot machine! Replace the hardcoded 
  data with random fruit emojis from an emojis API. 
   
   - Request emoji food data from the API resource below. Log it and look at it!
        - Write a function that takes in the data and returns a new array of only
        fruit emoji objects
        - Write a function to get 9 random fruits from your new array of fruit 
        
   - Load nine random fruits into the slot machine
*/

questionEl.innerHTML = `Let's create an emoji slot machine! Replace the hardcoded 
data with random fruit emojis`

import fruits from './data.js'
const slotMachine = document.querySelector('.emoji-slots-game'); 

function makeFruitArray(arr){
   const fruitOnly= arr.filter(a=> a.group === 'food fruit')
   return fruitOnly
}

function getRandomFruits(arr){
  slotMachine.innerHTML= ''
  const fruitArr = makeFruitArray(arr)
        for(let i = 0; i < 9; i++){
          let random = Math.floor(Math.random() * fruitArr.length)
          console.log(random)
          slotMachine.innerHTML +=`<li>${fruitArr[random].htmlCode.flat()}</li>`
        }
}

// console.log(getRandomFruits(fruits))

document.getElementById('spin').addEventListener('click', () => {
  getRandomFruits(fruits)
})