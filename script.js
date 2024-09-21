const form = document.getElementById('myForm');
const firstname = document.getElementById('firstname-input');
const email = document.getElementById('email-input');
const password = document.getElementById('password-input');
const repeatPassword = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  // console.log(firstname)
  // prevent submit the form
  e.preventDefault(); 
  
  let errors = []

  if(firstname){
    errors = getSignupFormErrors(firstname, email, password, repeatPassword);
    console.log(errors);
    console.log("asd")
  }
  else{
    errors = getLoginFormErrors(email, password);
    // console.log("asd")
  }

  if(errors.length > 0){
    e.preventDefault();
    error_message.innerText = errors.join(". ")
  }
})

function getSignupFormErrors(firstname, email, password, repeatPassword){
  let errors = [];
  if(firstname.value === '' || firstname.value  == null){
    errors.push('Firstname is required')
    firstname.parentElement.classList.add('incorrect')
  }
  if(email.value  === '' || email.value  == null){
    errors.push('Email is required')
    email.parentElement.classList.add('incorrect')
  }
  if(password.value  === '' || password.value  == null){
    errors.push('Password is required')
    password.parentElement.classList.add('incorrect')
  }
  if(password.value.length < 8){
    errors.push('Password must have at least 8 characters')
    password.parentElement.classList.add('incorrect')
  }
  if(password.value !== repeatPassword.value){
    errors.push('Password does not match')
    password.parentElement.classList.add('incorrect')
    repeatPassword.parentElement.classList.add('incorrect')
  }

  return errors;
}

function getLoginFormErrors(email,password){
  let errors = []
  if(email.value  === '' || email.value  == null){
    errors.push('Email is required')
    email.parentElement.classList.add('incorrect')
  }
  if(password.value  === '' || password.value  == null){
    errors.push('Password is required')
    password.parentElement.classList.add('incorrect')
  }

  return errors;
}

const allInputs = [firstname, email, password, repeatPassword].filter(input => input != null);

allInputs.forEach(input => {
  input.addEventListener('input', ()=>{
    if(input.parentElement.classList.contains('incorrect')){
      input.parentElement.classList.remove('incorrect');
      error_message.innerText = '';
    }
  })
})
// firstname.parentElement.classList.add('incorrect')