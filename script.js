function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function displayCurrentYear() {
  // Get the current year
  const currentYear = new Date().getFullYear();
  // Display the year in the element with the ID 'current-year'
  document.getElementById('current-year').textContent = currentYear;
}

// Call the function to display the current year
displayCurrentYear();
