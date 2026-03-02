// getting the input value – make sure the elements exist before using them
const nameInput = document.getElementById('nameInput');
const numberInput = document.getElementById('numberInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPassword');
const addressInput = document.getElementById('address');
const fileInput = document.getElementById('fileInput');
const eOutput = document.getElementById('eOutput');
const btn = document.getElementById('btn');
const resetBtn = document.getElementById('resetBtn');

// Get input value on button click
btn.addEventListener('click', () => {
    const name = nameInput.value;
    const number = numberInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const address = addressInput.value;
    const file = fileInput.value;



    resetBtn.addEventListener('click', () => {
        nameInput.value = '';
        numberInput.value = '';
        emailInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';    
        addressInput.value = '';
        fileInput.value = '';
        eOutput.innerText = '';
    });
        // Display the input values
    eOutput.innerText= `Name: ${name}, Number: ${number}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}, Address: ${address}, File: ${file}`;
});
//image preview 
file.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '200px';
            img.style.height = '200px';
            document.querySelector('.imageContainer').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
