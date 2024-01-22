const questionEl = document.getElementById("question")
const answerEl = document.body
/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
questionEl.textContent= `Write a function "whisper" that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning.`

// Test your function
function whisper(str) {
    // 1) concat the shh
    // 2) convert the string to lower case
    // 3) first three steps make into one variable
    // 4) check if the the string ends with ! 
    const translate = 'shhh... ' + str.toLowerCase()
    if(str.endsWith('!')){
        const withPointAtEnd = translate.slice(0, -1)
        answerEl.innerHTML += `<p>${withPointAtEnd}</p>`
        return withPointAtEnd
    }
    else {
        answerEl.innerHTML += `<p>${translate}</p>`
        return  translate
    }
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));