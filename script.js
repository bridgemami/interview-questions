const questionEl = document.getElementById("question")
const answerEl = document.body
/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

questionEl.innerHTML= `Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: <br /><br />
Divisible by 3 - Vacation! <br /><br />
Divisible by 5 - $100,000 bonus! <br /><br />
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht! <br /><br />
Not divisible by 3 or 5 - :( <br /><br />
    
Write a program to loop through all the ID numbers and print their prize. `
// Test your function
function awardBonuses(){
    // 1) loop through 1-100
    // 2) which number is divisiable by 3, 5, 3 & 5, or neither
    for( let i =1; i <= 100; i++) {
        if(i % 15 === 0) {
            answerEl.innerHTML += `<p><strong>${i}: JACKPOT! 1 Million and a Yacht!</strong></p>`
            console.log(`${i}: JACKPOT! 1 Million and a Yacht!`)
        }
        else if(i % 5 === 0) {
            answerEl.innerHTML += `<p>${i}: $100,000 bonus!</p>`
            console.log(`${i}: $100,000 bonus!`)
        }
        else if ( i % 3 === 0) {
            answerEl.innerHTML += `<p>${i}: Vacation!</p>`
            console.log(`${i}: Vacation!`)
 
        }
        else {
            answerEl.innerHTML += `<p>${i}: 😞</p>`
            console.log(`${i}: 😞`)
        }
    }
}

awardBonuses();