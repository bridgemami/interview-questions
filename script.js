const questionEl = document.getElementById("question")
const answerEl = document.body
/*  
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/


questionEl.textContent += `Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.`


// Solution 1: for loop 
function isPalindrome(str){
    // 1) split the string
    // 2) reverse the new array then join it
    // 3) check to see if the word is equal to the orginal word
    const reversingStr = str.split('').reverse().join('')
    return answerEl.innerHTML+= reversingStr === str ? `<p>${str}: ${true}</p>` : `<p>${str}: ${false}</p>`

}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));