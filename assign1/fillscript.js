// Get the current year
// Get the current year
const currentYear = new Date().getFullYear();

// Populate the year dropdown with options from the current year to 20 years ago
const yearDropdown = document.getElementById('year');
for (let i = currentYear; i >= currentYear - 20; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    yearDropdown.appendChild(option);
}
