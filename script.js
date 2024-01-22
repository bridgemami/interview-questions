const questionEl = document.getElementById("question")
const answerEl = document.body
/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

questionEl.textContent= `Write a function that will capitalize every word in a sentence. `
// Test your function
function capitalizeWord(word){
    // 1) I need to capitalize the first letter and capitalize it
    // 2) rejoing the capitalize letter
    const newStr = word.slice(0,1).toUpperCase()+ word.slice(1)
    answerEl.innerHTML += `<p>For a word: ${newStr}</p>`
    return newStr
}

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/ 

function toTitleCase(str){
    // 1) I need to loop through the sentence
    // 2) Each word I need to capital the first letter
    // 3) Then recreate the senetence with the new change
    let splittingTheString=  str.split(' ')
    const newStr = splittingTheString.map(word => { 
          return capitalizeWord(word)
    }).join(' ')
    answerEl.innerHTML += `<p>For a sentence: ${newStr}</p>`
return newStr
}

// Test your functions
console.log(capitalizeWord("pumpkin"));
console.log(toTitleCase("pumpkin pranced purposefully across the pond"));