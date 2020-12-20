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

function validateEmail(email) {

}

// DRY - stands for "Don't Repeat Yourself"

function validateField(element, fieldName) {

    // let validEmail;
    if (fieldName === 'email') {
        validateEmail(element.value);
        // validEmail = isValidEmail(element.value);
        return;
    }

    if (element.value.length === 0) {
        if(!document.getElementById(fieldName + 'Error')) {
            const fieldNameError = document.createElement('p');

            let errorMessage = '';

            // if (fieldName === 'firstName') {
            //   errorMessage = 'First name is invalid';
            // } else if (fieldName === 'lastName') {
            //   errorMessage = 'Last name is invalid';
            // } else if (fieldName === 'email') {
            //   errorMessage = 'Email is invalid';
            // }

            switch (fieldName) {
                case 'firstName': {
                    errorMessage = 'First name is invalid';
                    break;
                }
                case 'lastName': {
                    errorMessage = 'Last name is invalid';
                    break;
                }
                case 'phoneNum': {
                    errorMessage = 'Phone Number is invalid';
                    break;
                }
            }

            fieldNameError.innerHTML = errorMessage;
            fieldNameError.id = fieldName + 'Error';
            fieldNameError.className = 'error';

            // Get the firstName element's parent element
            const parent = element.parentElement;

            parent.appendChild(fieldNameError);
        }
    } else {
        const errorElement = document.getElementById(fieldName + 'Error');
        if (errorElement) {
            errorElement.remove()
        }
    }
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

    validateField(firstNameElement, 'firstName');
    validateField(lastNameElement, 'lastName');
    validateField(emailElement, 'email');
    validateField(phoneElement, 'phoneNum');

    // ASSIGNMENT 11/8/2020
    // Use the validateField function to get the PhoneNumber field
    // working just like the 3 previous fields


      //(OLD)This is an alert message function, previously used
    /*const phonenum = phoneElement.value;
    if (!isValidPhoneNumber(phonenum)) {
        alert('Phone Number is invalid');
    } else {
        alert('Phone Number is Valid');
    }*/
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
