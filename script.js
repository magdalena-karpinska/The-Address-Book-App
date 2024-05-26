// Selecting form and inputs
const form = document.querySelector('#form');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword =document.querySelector('#cpassword')

// Adding Submit Event Listener
form.addEventListener('submit', (e) => {
  if(!validateInput())
    e.preventDefault();
})

// Validation Function
function validateInput() {
  const firstNameVal = firstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
  let success = true;
  
  // Checking if a string is empty
  if (firstNameVal === '') {
    success = false;
    setError()
  }
  setSuccess()
}