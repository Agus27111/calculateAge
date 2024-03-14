// Inputs 
const days = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const Mybtn = document.getElementById("btn");

// Display calculation
const ShowYear = document.getElementById("showAno")
const ShowMonth = document.getElementById("showMes")
const ShowDay = document.getElementById("showDias")

Mybtn.addEventListener("click", basicValidation);
const label = document.getElementsByTagName("label");
const inputs = document.getElementsByTagName("input");
const warning = document.getElementsByClassName("warning");

function basicValidation(){
  
  // Check if fields are empty!
  if(days.value == "" && month.value == "" && year.value == "")
  {
    // For loop to iterate through all warning classes, all elements with the label tag, and input and thus display the warning and change the necessary colors
    for(let i = 0; i <3; i++){
      warning[i].innerHTML= "This field is required";
      label[i].style.color = "#FF5757";
      inputs[i].style.border = "2px solid #FF5757";
      inputs[i].style.backgroundColor = "#F0F0F0";

    }
  }
    else{
      for(let i = 0; i <3; i++){
        warning[i].innerHTML= "";
        inputs[i].style.border = "2px solid #DBDBDB";
        label[i].style.color = "#716F6F";
        inputs[i].style.backgroundColor = "#FFF";
      }

      validateInput();
    }

}

function validateInput(){
    // Validate input fields
    const currentDate = new Date();

    if(days.value > 31 || days.value <= 0){
      errorData();
    }
    else if(month.value > 12 || month.value <= 0)
    {
      warning[1].innerHTML = "Must be a valid month";

      for (let i = 0; i < 3; i++) {
      label[i].style.color = "#FF5757";
      inputs[i].style.border = "2px solid #FF5757";
      }
    }

    else if(year.value > currentDate.getFullYear() || year.value <= 0)
    {
      warning[2].innerHTML = "Must be in the past";

      for (let i = 0; i < 3; i++) {
      label[i].style.color = "#FF5757";
      inputs[i].style.border = "2px solid #FF5757";
      }
    }

    else {
      clearMessages();
      checkLeapYear();
  }
 
}

function checkLeapYear() {

  if (isLeapYear(year.value)) 
  {
    if (month.value == 2 && days.value > 29) 
    {
        errorData();
    } 
      else 
      {
        calculateDate();
      }  
  } 
    else 
  {
    if (month.value == 2 && days.value > 28) 
    {
      errorData();
    } 
    else 
    {
      const monthsWith30Days = [4, 6, 9, 11];
      const monthsWith31Days = [1, 3, 5, 7, 8, 10, 12]; 

      const numericMonth = parseInt(month.value, 10);
      if(monthsWith31Days.includes(numericMonth) && days.value <= 31){
        calculateDate();
      }
      else if(monthsWith30Days.includes(numericMonth) && days.value <=30)
      {
        calculateDate();
      }
      else{
        errorData();
      }
    }
  }
}

function calculateDate() {
  let userDate = new Date(year.value, month.value, days.value);

  let currentDate = new Date();

  let difference = currentDate.getTime() - userDate.getTime();
  let years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  
  let totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));

  const months = Math.floor((totalDays % 365) / 30);
  const remainingDays = Math.floor((totalDays % 365) / 12);

  console.log(years, months, remainingDays)

  ShowYear.innerHTML = years;
  ShowMonth.innerHTML = months;
  ShowDay.innerHTML = remainingDays;

}

function errorData() {
  warning[0].innerHTML = "Must be a valid day";

  for (let i = 0; i < 3; i++) {
    label[i].style.color = "#FF5757";
    inputs[i].style.border = "2px solid #FF5757";
  }
}

function clearMessages() {
  warning[0].innerHTML = "";
  for (let i = 0; i <= 2; i++) {
    label[i].style.color = "#716F6F";
    inputs[i].style.border = "2px solid #DBDBDB";
  }
}

function isLeapYear(year) {
  if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}
