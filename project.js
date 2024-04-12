// script.js
// To-Do List App
function calculatebmi()
{
const heightInput = document.getElementById('heightInput');
const weightInput = document.getElementById('weightInput');
const calculateButton = document.getElementById('calculateBmiButton');
const bmiResult = document.getElementById('bmiResult');

calculateButton.addEventListener('click', function() {
  const height = heightInput.value;
  const weight = weightInput.value;
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    document.getElementById('bmiResult').textContent = "Please enter valid height and weight.";
    return;
  }

  if (height && weight) {
    const bmi = weight / ((height / 100) * (height / 100));
    const categories = [
      { category: "Underweight", color: "#FF5722" },
      { category: "Normal weight", color: "#4CAF50" },
      { category: "Overweight", color: "#FF9800" },
      { category: "Obese", color: "#F44336" }
    ];
  
    let category = "";
    let color = "";
  
    // Determine the BMI category based on the calculated BMI value
    if (bmi < 18.5) {
      category = categories[0].category;
      color = categories[0].color;
    } else if (bmi < 25) {
      category = categories[1].category;
      color = categories[1].color;
    } else if (bmi < 30) {
      category = categories[2].category;
      color = categories[2].color;
    } else {
      category = categories[3].category;
      color = categories[3].color;
    }
    const bmiResult = document.getElementById('bmiResult');
  bmiResult.innerHTML = `
    <p>Your BMI: <span style="color: ${color};">${bmi.toFixed(2)}</span></p>
    <p>Category: <span style="color: ${color};">${category}</span></p>
    <p>${getRecommendation(category)}</p>
  `;
}

function getRecommendation(category) {
  let recommendation = '';

  switch (category) {
    case 'Underweight':
      recommendation =
        'You may want to consult with a healthcare professional to assess your nutritional needs.';
      break;
    case 'Normal weight':
      recommendation =
        'Great job! Maintain a balanced diet and regular physical activity to stay healthy.';
      break;
    case 'Overweight':
      recommendation =
        'Consider incorporating more exercise and mindful eating habits to manage your weight. A combination of cardiovascular exercises (such as jogging, cycling, or swimming) and strength training exercises (such as weightlifting or bodyweight exercises) can be beneficial.';
      break;
    case 'Obese':
      recommendation =
        'It\'s important to prioritize your health. Speak with a healthcare professional for guidance and support. In terms of diet, focus on consuming a calorie-controlled diet with a balance of macronutrients. Engaging in regular physical activity is crucial, and you may consider activities like brisk walking, aerobic exercises, or joining fitness classes.';
      break;
    default:
      recommendation = '';
      break;
  }

  return recommendation;
}
})
}

function calculateBirthDay() {
  var date = parseInt(document.getElementById("birthDateInput").value);
  var month = parseInt(document.getElementById("birthMonthInput").value) - 1; // Months are zero-based
 
  var year = parseInt(document.getElementById("birthYearInput").value);
  /*if (month <= 0 || month > 12) {
    alert("Invalid month input. Please enter a value between 1 and 12 (inclusive).");
    return;} */
    if (date < 1 || date > 31) {
      alert("Invalid day input. Please enter a value between 1 and 31 (inclusive).");
      return;
    }
   
    var isValidDate = isValidDayOfMonth(date, month, year);
    if (!isValidDate) {
      alert("Invalid date input. The selected month does not have the entered day.");
      return;
    }
    //var birthDate = new Date(year, month - 1, date);
 var birthDate = new Date(year, month, date);
  var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var birthDay = daysOfWeek[birthDate.getDay()];
  var zodiacSigns = [
    { name: "Capricorn", start: new Date(year, 0, 1), end: new Date(year, 0, 19) },
    { name: "Aquarius", start: new Date(year, 0, 20), end: new Date(year, 1, 18) },
    { name: "Pisces", start: new Date(year, 1, 19), end: new Date(year, 2, 20) },
    { name: "Aries", start: new Date(year, 2, 21), end: new Date(year, 3, 19) },
    { name: "Taurus", start: new Date(year, 3, 20), end: new Date(year, 4, 20) },
    { name: "Gemini", start: new Date(year, 4, 21), end: new Date(year, 5, 20) },
    { name: "Cancer", start: new Date(year, 5, 21), end: new Date(year, 6, 22) },
    { name: "Leo", start: new Date(year, 6, 23), end: new Date(year, 7, 22) },
    { name: "Virgo", start: new Date(year, 7, 23), end: new Date(year, 8, 22) },
    { name: "Libra", start: new Date(year, 8, 23), end: new Date(year, 9, 22) },
    { name: "Scorpio", start: new Date(year, 9, 23), end: new Date(year, 10, 21) },
    { name: "Sagittarius", start: new Date(year, 10, 22), end: new Date(year, 11, 21) },
    { name: "Capricorn", start: new Date(year, 11, 22), end: new Date(year, 11, 31) }
  ];
  function getBehaviorByZodiac(zodiacSign) {
    switch (zodiacSign) {
      case 'Aries':
        return 'Energetic, assertive, competitive, and confident.';
      case 'Taurus':
        return 'Patient, reliable, determined, and fond of comfort and stability.';
      case 'Gemini':
        return 'Curious, adaptable, sociable, and intellectually inclined.';
      case 'Cancer':
        return 'Emotional, nurturing, intuitive, and protective.';
      case 'Leo':
        return 'Confident, charismatic, generous, and loves being in the spotlight.';
      case 'Virgo':
        return 'Detail-oriented, practical, analytical, and seeks perfection.';
      case 'Libra':
        return 'Diplomatic, cooperative, harmonious, and values balance.';
      case 'Scorpio':
        return 'Passionate, intuitive, secretive, and has a strong sense of purpose.';
      case 'Sagittarius':
        return 'Adventurous, optimistic, philosophical, and loves freedom.';
      case 'Capricorn':
        return 'Ambitious, disciplined, responsible, and values tradition.';
      case 'Aquarius':
        return 'Independent, innovative, humanitarian, and values individuality.';
      case 'Pisces':
        return 'Imaginative, compassionate, intuitive, and tends to be emotionally sensitive.';
      default:
        return 'Unknown zodiac sign.';
    }
  }
  

  var zodiacSign = null;
  for (var i = 0; i < zodiacSigns.length; i++) {
    if (birthDate >= zodiacSigns[i].start && birthDate <= zodiacSigns[i].end) {
      zodiacSign = zodiacSigns[i].name;
      break;
    }
  }
  var behaviour = getBehaviorByZodiac(zodiacSign);

  document.getElementById("birthDayResult").textContent = "You were born on : " + birthDay + ".";
  document.getElementById("zodiacSignResult").textContent = "Your zodiac sign is: " + zodiacSign + ".";
  document.getElementById("behaviour").textContent = "Your zodiac behaviour is :" + behaviour + ".";
}
function isValidDayOfMonth(day, month, year) {
  var testDate = new Date(year, month , day);
  return testDate.getMonth() === month && testDate.getDate() === day;
}


function openTab(event, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  event.currentTarget.className += " active";
}
var detailsElements = document.getElementsByTagName('details');
  
  // Add event listener to each details element
  for (var i = 0; i < detailsElements.length; i++) {
    detailsElements[i].addEventListener('click', toggleContent);
  }
  
function toggleContent(id) {
  var content = document.getElementById(id);
  content.style.display = content.style.display === 'none' ? 'block' : 'none';
}
