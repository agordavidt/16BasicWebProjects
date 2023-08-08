const num1 = Math.ceil(Math.random() * 10);  // a number between 1 and 10
const num2 = Math.ceil(Math.random() * 10);
// console.log(num1);

const questionEl = document.getElementById("question");
questionEl.innerText = `What is ${num1} multiply by ${num2}`;

const inputEl = document.getElementById("input");
const formEl = document.getElementById("form");

const correctAns = num1 * num2;
// add invent listerner to the html form to track submissions
// add event listener to the form (submit)
// create a call back function to listen for event (envent listenner)

formEl.addEventListener("submit", ()=>{
    const userAns = inputEl.value;
    console.log(userAns, typeof userAns);

    
})



