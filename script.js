const questionEl = document.getElementById("question")
const answerEl = document.body
/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

questionEl.innerHTML= `Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

<p>Example input: "allergy", "gallery"<br />
Example output: true</p>

<p>Example input: "rainbow", "crossbow"<br />
Example output: false</p>

<p>Example input: "inch", "chin"<br />
Example output: true</p>
`

function isAnagram(str1, str2){
    // 1) check if the length is the same
    // 2) use split method on the string
    // 3) sort the new array
    // 4) join the array as one word
    // 5) check to see if they match
    if (str1.length === str2.length) {
       const word1 = str1.split('').sort().join('')
       const word2 = str2.split('').sort().join('')
       if(word1===word2) {
        answerEl.innerHTML += `<p>Yes, it is  an anagram</p>`
        return true
       }
       }
    
    else {
        answerEl.innerHTML += `<p>Not an anagram</p>`
        return false
    }
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));
console.log(isAnagram("inch", "chin"));