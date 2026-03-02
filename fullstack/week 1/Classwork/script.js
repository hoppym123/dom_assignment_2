
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
outputs.textContent =`My name is: ${name},My age is ${age},My location is ${location},My job is ${job} ` 

});