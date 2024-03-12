function calculateAge() {
  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value) - 1;
  var year = parseInt(document.getElementById("year").value);
  var dob = new Date(year, month, day);
  var today = new Date();

  var ageInMilliseconds = today - dob;

  var ageDate = new Date(ageInMilliseconds);

  var years = ageDate.getUTCFullYear() - 1970;
  var months = ageDate.getUTCMonth();
  var days = ageDate.getUTCDate() - 1;
  document.getElementById("years").innerText = years;
  document.getElementById("months").innerText = months;
  document.getElementById("days").innerText = days;
}


