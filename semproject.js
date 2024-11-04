// JavaScript to handle mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


document.querySelector('.calculator-form').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const activityLevel = document.getElementById('activity').value;
  const goal = document.getElementById('goal').value;

  // Basic BMR calculation (for males, adjust if necessary)
  let bmr = 10 * weight + 6.25 * height - 5 * age + 5;

  // Adjust for activity level
  let calorieNeed;
  switch (activityLevel) {
      case 'sedentary': calorieNeed = bmr * 1.2; break;
      case 'light': calorieNeed = bmr * 1.375; break;
      case 'moderate': calorieNeed = bmr * 1.55; break;
      case 'active': calorieNeed = bmr * 1.725; break;
      case 'very-active': calorieNeed = bmr * 1.9; break;
  }

  // Adjust for goal
  if (goal === 'cut') calorieNeed -= 500;
  else if (goal === 'bulk') calorieNeed += 500;

  // Display result
  document.getElementById('calorie-result').innerHTML = 
      `Your daily calorie needs: <strong>${Math.round(calorieNeed)} calories</strong>`;
});


// JavaScript for FAQ Accordion Functionality
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
      const faqItem = button.parentElement;
      faqItem.classList.toggle('active');
  });
});
