function formatFullName(firstName, lastName) {
  
  if (firstName === "" || lastName === "") {
    return "Invalid name input.";
  }

  let first =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();

  let last =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return last + ", " + first;
}


// testing
console.log(formatFullName("monica", "davila"));
console.log(formatFullName("MONICA", "DAVILA"));
console.log(formatFullName("", "davila"));