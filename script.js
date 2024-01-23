const questionEl = document.getElementById("question")
const answerEl = document.body
/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

questionEl.innerHTML += `Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 
<br /> <br />
Example input: "Michael Bridgeman"<br />
Example output: {m:2, i:2, c:1, h:1, a:2, e:2, l:1, b:1, r:1, d:1, g:1, n:1}`


function countChars(str){
 const newStr= str.toLowerCase().split(' ').join('')
 let count= {}
 for(let i= 0; i< newStr.length; i++) {
    if(!count[newStr[i]]) {
        count[newStr[i]] = 1
    }
    else {
        count[newStr[i]] += 1
    }
 }
 answerEl.innerHTML+=`<p>${JSON.stringify(count)}</p>`
return count
}

console.log(countChars("Michael Bridgeman"));