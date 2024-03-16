// Input elements
const days = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const myBtn = document.getElementById("btn");

// Output elements
const showYear = document.getElementById("years");
const showMonth = document.getElementById("months");
const showDay = document.getElementById("days");

// Event listener
myBtn.addEventListener("click", basicValidation);

// Validation Functions
function basicValidation() {
  // Call validateInput() to perform basic validation
  if (!validateInput()) {
    return;
  }

  // Additional validation or operations can be performed here
  if (!checkLeapYear()) {
    alert("Invalid date input"); // Display an error message for invalid date input
    return;
  }

  // Calculate the date
  calculateDate();
}

function validateInput() {
  // Validate input fields
  // Display error messages if input values are invalid
  // Otherwise, clear any existing messages and proceed to further validation
  const errorMsgDay = document.getElementById("error-day");
  const errorMsgMonth = document.getElementById("error-month");
  const errorMsgYear = document.getElementById("error-year");
  const labels = document.getElementsByTagName("label");
  const inputs = document.getElementsByTagName("input");

  // Clear previous error messages
  errorMsgDay.innerHTML = "";
  errorMsgMonth.innerHTML = "";
  errorMsgYear.innerHTML = "";

  // Display warning messages if fields are empty
  if (days.value === "" || month.value === "" || year.value === "") {
    errorMsgDay.innerHTML = "This field is required";
    errorMsgMonth.innerHTML = "This field is required";
    errorMsgYear.innerHTML = "This field is required";
    for (let i = 0; i < 3; i++) {
      labels[i].style.color = "brown";
      inputs[i].style.border = "1px solid brown";
    }
    return false;
  }

  // Validate input values
  const parsedDay = parseInt(days.value);
  const parsedMonth = parseInt(month.value);
  const parsedYear = parseInt(year.value);
  let isValid = true;

  if (parsedDay < 1 || parsedDay > 31) {
    errorMsgDay.innerHTML = "Must be a valid day";
    labels[0].style.color = "brown";
    inputs[0].style.border = "1px solid brown";
    isValid = false;
  }

  if (parsedMonth < 1 || parsedMonth > 12) {
    errorMsgMonth.innerHTML = "Must be a valid month";
    labels[1].style.color = "brown";
    inputs[1].style.border = "1px solid brown";
    isValid = false;
  }

  if (parsedYear < 1 || parsedYear > new Date().getFullYear()) {
    errorMsgYear.innerHTML = "Must be in the past";
    labels[2].style.color = "brown";
    inputs[2].style.border = "1px solid brown";
    isValid = false;
  }

  return isValid;
}

function checkLeapYear() {
  // Check if the given year is a leap year
  const parsedYear = parseInt(year.value);
  const parsedMonth = parseInt(month.value);
  const parsedDay = parseInt(days.value);

  if (parsedMonth === 2) {
    // February is the second month (index 1)
    if (
      (parsedYear % 4 === 0 && parsedYear % 100 !== 0) ||
      parsedYear % 400 === 0
    ) {
      // It's a leap year
      return parsedDay >= 1 && parsedDay <= 29; // Return true if the day is valid for a leap year
    } else {
      // It's not a leap year
      return parsedDay >= 1 && parsedDay <= 28; // Return true if the day is valid for a non-leap year
    }
  }
  return true; // Return true for other months
}

function calculateDate() {
  // Get the current date
  const currentDate = new Date();

  // Get the user's input date
  const userDate = new Date(
    parseInt(year.value),
    parseInt(month.value) - 1,
    parseInt(days.value)
  );

  // Check if the user's input date is valid
  if (isNaN(userDate.getTime())) {
    // Handle invalid date input
    // For example, display an error message or return early
    alert("Invalid date input");
    return;
  }

  // Calculate the difference between the current date and the user's input date
  const calcDate = currentDate - userDate;

  // Calculate the age in years, months, and remaining days
  const calcYear = Math.floor(calcDate / (1000 * 60 * 60 * 24 * 365));
  const calcMonth = Math.floor(
    (calcDate % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  const calcDay = Math.floor(
    (calcDate % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );

  // Display the calculated age in the corresponding elements
  showYear.innerHTML = calcYear;
  showMonth.innerHTML = calcMonth;
  showDay.innerHTML = calcDay;
}
