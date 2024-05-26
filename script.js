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
    setError(firstName, 'First Name is required');
  } else {
    setSuccess(firstName);
  };

  if (lastNameVal === '') {
    success = false;
    setError(lastName, 'Last Name is required');
  } else {
    setSuccess(las);
  };

  if (emailVal === '') {
    success = false;
    setError(email, 'Email is required');
  } else {
    setSuccess(email);
  };

  if (passwordVal === '') {
    success = false;
    setError(password, 'Password is required');
  } else {
    setSuccess(password);
  };

  if (cpasswordVal === '') {
    success = false;
    setError(cpassword, 'Confirm Password is required');
  } else if (cpasswordVal !== passwordVal) {
    success = false;
    SetError(cpassword, 'Password does not match');
  } else {
    setSuccess(cpassword);
  };

  return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success')
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('error');

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');

}
