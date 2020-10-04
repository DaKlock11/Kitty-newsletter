// We need to check and see if an email address has only ONE
// '@' sign inside of it.

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
