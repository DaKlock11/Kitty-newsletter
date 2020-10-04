const firstNameElement = document.getElementById('firstName');
const lastNameElement = document.getElementById('lastName');

const submitButton = document.getElementById('submitButton');

const emailElement = document.getElementById('email');

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

function onClick(event) {
  const target = event.target; // Im so confused by this --> document.getElementById('submitButton');

  if (firstNameElement.value.length === 0) {
    alert('First name value is required');
  }

  if (lastNameElement.value.length === 0) {
    alert('Last name value is required');
  }

  const email = emailElement.value;
  if (!isValidEmail(email)) {
    alert('Email is invalid');
  }
}

function testEmailAddress(emailElement) {

    var atSymbol = emailElement.indexOf("@");

    if (atSymbol < 1) {
      alert('Email requires an @ sign');
    }
    if (atSymbol > 1) {
      alert('Email cannot have two @ signs');
    }

    var dot = emailElement.indexOf(".com");

    if (dot !== 1) {
      alert('Email must end in dot com');
    }

    if (dot === emailElement.length - 1) {
     alert('Great job');
    }
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


submitButton.addEventListener('click', onClick);
