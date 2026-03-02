//Declaring variables

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

//we add event listner here
btn.addEventListener("click", ()=> {
    const name = nameInput.value;
    const age = ageInput.value;
    output.textContent = `My name is: ${name},My Age is: ${age}`;
});
//practice
const namesInput = document.getElementById("namesInput");
const agesInput = document.getElementById("agesInput");
const locationInput = document.getElementById("locationInput");
const jobInput = document.getElementById("jobInput");
const btns = document.getElementById("btns");
//event listner
btns.addEventListener("click", ()=>{
const name =namesInput.value;
const age=agesInput.value;
const location =locationInput.value;
const job =jobInput.value;
output.textContent =`My name is: ${name},My age is ${age},My location is ${location},My job is ${job} ` 

});