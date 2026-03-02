// Select elements
const nameInput = document.getElementById('name');
const ageInput = document.getElementById('age');
const colorInput = document.getElementById('color');
const generateBtn = document.getElementById('generateBtn');
const clearBtn = document.getElementById('clearBtn');
const output = document.getElementById('output');
const error = document.getElementById('error');
const body = document.getElementById('mainBody');
const greetingDisplay = document.getElementById('greeting');

// 1. Show greeting based on time immediately
function setGreeting() {
    const hours = new Date().getHours();
    let message = "Good Night";
    
    if (hours < 12) message = "Good Morning";
    else if (hours < 18) message = "Good Afternoon";
    else message = "Good Evening";
    
    greetingDisplay.innerText = message + "!";
}
setGreeting();

// 2. Generate Profile Logic
generateBtn.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const color = colorInput.value.trim();

    // Reset error
    error.innerText = "";

    // Extra Rule: Validation
    if (!name || !age || !color) {
        error.innerText = "Error: Please fill in all fields!";
        return;
    }

    // Output sentence
    output.innerText = ` My name is ${name} My age is ${age} years old and loves  ${color}.`;
    
    // Extra Rule: Change background color
    body.style.backgroundColor = color;
});

// 3. Extra Rule: Clear Button
clearBtn.addEventListener('click', () => {
    nameInput.value = "";
    ageInput.value = "";
    colorInput.value = "";
    output.innerText = "";
    error.innerText = "";
    body.style.backgroundColor = "#f0f2f5"; // Reset to default
});