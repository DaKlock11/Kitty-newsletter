const firstNameElement = document.getElementById('firstName');
const lastNameElement = document.getElementById('lastName');

const submitButton = document.getElementById('submitButton');

function onClick(event) {
  const target = event.target; // => document.getElementById('submitButton');

  if (firstNameElement.value.length === 0) {
    alert('First name value is required');
  }

  if (lastNameElement.value.length === 0) {
    alert('Last name value is required');
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
