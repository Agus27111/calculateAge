This is very interseting for my journey with web development.

# How i build this app

## 1. HTML and CSS

i'm very confident with HTML and CSS

## 2. JavaScript

i have say the truth that im so confuse with the step to make application like this.

and to make my step clearly i just want to make like this.

// input
const days = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const myBtn = document.getElementById("btn");

// output display
const showYear = document.getElementById("years");
const showMonth = document.getElementById("months");
const showDay = document.getElementById("days");

//event listener
myBtn.addEventListener("click", basicValidation);

//Validation Functions:
function basicValidation() {
// Check if fields are empty
// Display warning messages if fields are empty
// Validate input values
// Display error messages if input values are invalid
// Otherwise, clear any existing messages and proceed to further validation
// Finally, call the function to check leap year
}

function validateInput() {
// Validate input fields
// Display error messages if input values are invalid
// Otherwise, clear any existing messages and proceed to further validation
// Finally, call the function to check leap year
}

function checkLeapYear() {
// Check if the given year is a leap year
// Depending on whether it's a leap year or not, proceed to calculate the age
// If it's a leap year, validate the number of days in February
// Calculate the age based on the input values
}

//Calculation Function:
function calculateDate() {
// Get the current date
// Calculate the difference between the current date and the user's input date
// Calculate the age in years, months, and remaining days
// Display the calculated age in the corresponding elements
}

in the course of writing code, I finally made efficiency between basicValidation() and validationInput(). and finally fix little bugs in // Validate input values because when we try to make wrong inputs in days and months, it will just showup the message error in a days but not in the works so wwe just add some variable to make it works.
let isValid = true;

if (parsedDay < 1 || parsedDay > 31) {
errorMsgDay.innerHTML = "Must be a valid day";
isValid = false;
}

if (parsedMonth < 1 || parsedMonth > 12) {
errorMsgMonth.innerHTML = "Must be a valid month";
isValid = false;
}

if (parsedYear < 1 || parsedYear > new Date().getFullYear()) {
errorMsgYear.innerHTML = "Must be in the past";
isValid = false;
}

return isValid;
