const questionEl = document.getElementById("question")
const answerEl = document.body
/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

questionEl.textContent= `Write a function that takes in a string of letters
and returns a sentence in which every other letter is capitalized.`
// Test your function
function altCaps(str){
    // 1) create a new variable for the new string 
    // 2) loop over the string
    // 3) find the even index or zero position and convert it to a capitalize letter
    // 4) for the odd number index convert it to lower case
    // 5) make sure the new string joins together
    let newStr = ``
    for(let i = 0; i < str.length; i++) {
        if(i % 2 ===0) {
            newStr += str[i].toUpperCase()
        }
        else {
            newStr += str[i].toLowerCase()
        }
    }
    answerEl.innerHTML +=`<p>${newStr}</p>`
    return newStr;
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));