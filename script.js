const answerEl = document.body
const questionEl = document.getElementById("question")
/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/

questionEl.innerHTML += `Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done:
<br /><br />
{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}
} 
`
import userData from "./data.js";


function transformData(data){
    // 1) create a new array for this function
    // 2) map through the frunction
    // 3) create a new object within the map method
    // 4) push the object into the new array
    // 5) convert the date
    let newArr= []
    data.map(d =>{
    const date = new Date(d.dob.date)
    let dateString =date.toDateString()    
       let newObj = {
        fullname: `${d.name.first} ${d.name.last}`,
        birthday: dateString}
        newArr.push(newObj)
    })
    answerEl.innerHTML += JSON.stringify(newArr)
    return newArr
}

console.log(transformData(userData));