const questionEl = document.getElementById("question")
const answerEl = document.body
/*
Alex from Scrimba wants to know how many new students have attended 
Scrimba's weekly Town Hall event this year. 

He has an array of first-time attendees for each month of the year. 
Help him find the total number of attendees! Your function should
take in an array and return a number representing the total number
of new attendees. 

Example input: [1,2,3]
Example output: 6
 */

questionEl.innerHTML += `Your function should
take in an array and return a number representing the total number
of new attendees.
<br /> <br />
Example input: [50,53,61,67,60,70,78,80,80,81,90,110]<br /><br />
Example input: [1,2,3]
`

const studentCount = [50,53,61,67,60,70,78,80,80,81,90,110];

function sumArray(arr){
    // 1) use the reduce method to get the sum of an array
    const sumOfArray = arr.reduce((a,b) => a + b)
    answerEl.innerHTML += `<p>Sum is: ${sumOfArray}</p>`
    return sumOfArray
}

console.log(sumArray(studentCount));
console.log(sumArray([1,2,3]));