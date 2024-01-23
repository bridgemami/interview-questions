const questionEl = document.getElementById("question")
const answerEl = document.body
/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 


questionEl.innerHTML += `Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  
<br /><br />
Example input: "aabbccb1212"
Example output: "abc12"`


// Solution 1: for loop 
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
function removeDupeChars(chars){
    // 1) convert the string to an array
    // 2) create a new array without the dulicates
    // 3) loop over the array
    // 4) while looping compare what exist in the new string
    // 5) join the new array into a string
    const trimPassword = chars.split('')
    let cleanPassword =[]
    for( let i =0; i< trimPassword.length; ++i) {
        if(cleanPassword.includes(trimPassword[i])) {
            null
        }
        else {
           cleanPassword.push(trimPassword[i])
        }
    }
    answerEl.innerHTML += `<p>${cleanPassword.join('')}</p>`
    return cleanPassword.join('')
}

console.log(removeDupeChars(password));
console.log(removeDupeChars('aabbccb1212'));