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
    setError();
  } else {
    setSuccess();
  };

  if (lastNameVal === '') {
    success = false;
    setError();
  } else {
    setSuccess();
  };

  if (emailVal === '') {
    success = false;
    setError();
  } else {
    setSuccess();
  };

  if (passwordVal === '') {
    success = false;
    setError();
  } else {
    setSuccess();
  };

  if (cpasswordVal === '') {
    success = false;
    setError();
  } else if (cpasswordVal !== passwordVal) {
    success = false;
    SetError();
  } else {
    setSuccess();
  };

  return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup
}
