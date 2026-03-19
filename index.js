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

// Task 2
function calculateTotalCost(price, quantity, taxRate) {

  if (typeof price !== "number" || typeof quantity !== "number" || typeof taxRate !== "number") {
    return "Invalid input.";
  }

  let total = price * quantity * (1 + taxRate);

  return total;
}

// test
console.log(calculateTotalCost(10, 2, 0.07));
console.log(calculateTotalCost(5, 3, 0.08));
console.log(calculateTotalCost("10", 2, 0.07));


// Task 3
function checkEligibility(age, isEmployed) {

  if (age > 18 && isEmployed === true) {
    return "Eligible";
  }
  else if (age > 18 && isEmployed === false) {
    return "Conditionally eligible";
  }
  else {
    return "Not eligible";
  }

}

// test
console.log(checkEligibility(25, true));
console.log(checkEligibility(25, false));
console.log(checkEligibility(17, true));


// Task 4
function calculateTotalCostWithDiscount(price, quantity, taxRate, discount) {

  if (typeof price !== "number" || typeof quantity !== "number" || typeof taxRate !== "number") {
    return "Invalid input.";
  }

  let total = price * quantity;

  if (discount) {
    total = total - discount;
  }

  total = total * (1 + taxRate);

  return total;
}

// test
console.log(calculateTotalCostWithDiscount(20, 2, 0.07, 5));
console.log(calculateTotalCostWithDiscount(20, 2, 0.07));