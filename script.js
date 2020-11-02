const firstNameElement = document.getElementById('firstName');
const lastNameElement = document.getElementById('lastName');

const submitButton = document.getElementById('submitButton');

const emailElement = document.getElementById('email');

const phoneElement = document.getElementById('phoneNum');
/**
 * Checks to see if a string has 1 '@' sign and ends with .com
 * @param input - Email address to check
 * @return boolean
 */
function isValidEmail(input) {
  // counter variable to see how many '@' signs are in a string
  let atSigns = 0;

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    if (currentElement === '@') {
      atSigns += 1;
    }
  }

  return atSigns === 1 && input.endsWith('.com');
}

/** MUST ALWAYS USE "FOR LOOPS" TO BUILD APPROPRIATE FUNCTIONS OF INPUT TEXT*/

function onClick(event) {
  const target = event.target;

  // ASSIGNMENT 10/18/2020
  // Get the same in-form elements showing error validations
  // for:
  // * Email Address field
  // * Last Name field
  // * Phone Number field

  // EXTRA CREDIT - Make the errors pretty

  // ACCEPTANCE CRITERIA
  // Errors on fields should persist if the field is not corrent.
  // Errors on fields should go away if the error is corrected and the "submit" button is clicked
  // No alert() statements in the final product
  // No console.log() statements in the final product
  // No debugger; statements in the final product

  if (firstNameElement.value.length === 0) {
    if (!document.getElementById('firstNameError')) {
      // Create a <p> tag
      const firstNameError = document.createElement('p');

      // Set the HTML inside the <p> tag to "First name is invalid"
      firstNameError.innerHTML = 'First name is invalid';
      firstNameError.id = 'firstNameError';
      firstNameError.className = 'error';

      // Get the firstName element's parent element
      const parent = firstNameElement.parentElement;

      // Append the newly created element to the end of the parent's children
      parent.appendChild(firstNameError);
    }
  } else {
    const errorElement = document.getElementById('firstNameError');
    if (errorElement) {
      errorElement.remove();
    }
  }

  if (lastNameElement.value.length === 0) {
    if (!document.getElementById('lastNameError')) {
      
      const lastNameError = document.createElement('p');
      
      lastNameError.innerHTML = 'Last name is invalid';
      lastNameError.id = 'lastNameError';
      lastNameError.classname = 'error';
      
      const parent = lastNameElement.parentElement;
      parent.appendChild(lastNameError);
    } 
  } else {
      const errorElement = document.getElementById('lastNameError');
      if (errorElement) {
        errorElement.remove();
      }
    }
    //alert('Last name value is required');
  
  if (emailElement.value.length === 0) {
    if (!document.getElementById('emailError')) {
      
      const emailError = document.createElement('p');
      
      emailError.innerHTML = 'email is invalid';
      emailError.id = 'emailError';
      emailError.classname = 'error';
      
      const parent = emailElement.parentElement;
      parent.appendChild(emailErrorError);
    } 
  } else {
      const errorElement = document.getElementById('emailError');
      if (errorElement) {
        errorElement.remove();
      }
    }
    
  
  const email = emailElement.value;
  if (!isValidEmail(email)) {
    alert('Email is invalid');
  }
  const phonenum = phoneElement.value;
  if (!isValidPhoneNumber(phonenum)) {
    alert('Phone Number is invalid');
  } else {
    alert('Phone Number is Valid');
  }
}


function isValidPhoneNumber(input) {
  //let number = input.value;
  if (input.length != 10) {
    return false;
  }
  let dashSigns = 0;
  for (let i = 0; i < input.length; i++) {

    const currentElement = input[i];

    if (currentElement === '-') {
      dashSigns += 1;
    }
  }
  return dashSigns === 0 && input[0] != 0;

}
  // Email address needs:
  // a single '@'
  // ends in '.com'
  // Validate the email address!

  // VALID:
  // bjunya@gmail.com
  // d_klock@live.com
  // stevie@wonder.com

  //  INVALID:
  //  jeff@don@steve.com
  //  fake@address.net
  //  tommy@hilfiger.Steve.bannon.sucks@net
  //  this.is@.a.bad.address.@fish.net.com.net



  // NEW ASSIGNMENT 10/4/2020
  // Add a phone number field
  // Phone numbers should be strings of 10 characters
  // (not including country code). Do not include dashes
  // Phone numbers cannot start with 0
  // If a phone number includes dashes, throw an error
  // Phone numbers can only be digits 0-9

  // VALID:
  // 8582312382
  // 8182340010
  // 1231231234

  // INVALID:
  // 0982801094
  // 19478109292
  // 1-232-232-0041
  // 0898120292


submitButton.addEventListener('click', onClick);
