const questionEl = document.getElementById("question")
const answerEl = document.body
/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

questionEl.innerHTML += `Write a function that takes in an array 
and returns a new array with all the duplicates removed.
<br /> <br />
Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];`


const eggScrambleRecipe = [
    "🥓 bacon",
    "🥓 bacon", 
    "🍳 eggs",
    "🫑 green peppers",
    "🧀 cheese",
    "🌶️ hot sauce",
    "🥓 bacon",
    "🥦 broccoli", 
    "🧀 cheese",
    "🥦 broccoli", 
    "🌶️ hot sauce"
]

function removeDupesFromArray(arr){
// 1) create a new array
// 2) loop the arugment for the function
// 3) check to see if the item is in the new string
// 4) if not push it into the new array
    let newArr= []
    for( let i= 0; i < arr.length; i++) {
        console.log(arr[i])
        if(!newArr.includes(arr[i])){
             newArr.push(arr[i])
        }
    }
    answerEl.innerHTML+= `<p>${newArr.join(', ')}</p>`
    return newArr
}

console.log(removeDupesFromArray(eggScrambleRecipe));