const firstNameElement = document.getElementById('firstName');
const lastNameElement = document.getElementById('lastName');

const submitButton = document.getElementById('submitButton');

const emailElement = document.getElementById('email');

function onClick(event) {
  const target = event.target; // Im so confused by this --> document.getElementById('submitButton');
  
  if (firstNameElement.value.length === 0) {
    alert('First name value is required');
  }

  if (lastNameElement.value.length === 0) {
    alert('Last name value is required');
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



}

submitButton.addEventListener('click', onClick);
