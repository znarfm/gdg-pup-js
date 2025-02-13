function checkAge() {
  let ageFromInput = document.getElementById("ageInput").value;
  let age = parseInt(ageFromInput);

  let category =
    age >= 0 && age <= 12 // Check if age is between 0 and 12
      ? "Child"
      : age < 20 && age > 12 // Check if age is between 13 and 19
      ? "Teen"
      : age >= 20 // Check if age is 20 or above
      ? "Adult"
      : "Invalid age"; // If age is negative value or invalid value

  document.getElementById("result").innerHTML = category;
}
