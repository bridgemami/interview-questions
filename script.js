const questionEl = document.getElementById("question")

/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

.split() .join()
*/
questionEl.textContent= `Write a PANIC! function. The function should take in a sentence and return the same
    sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
    built in string methods.`

// Test your function
function panic(str) {
    const translate = str.split(' ').join('😱').toUpperCase().concat('!')
    
    document.body.innerHTML += `<p>${translate}</p>`
    return translate
}
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"))
console.log(panic('hello'))
