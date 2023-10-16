// script.js
document.querySelector('form').addEventListener('submit', function (event) {
    const email = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email === '' || password === '') {
        alert('Please fill in both fields.');
        event.preventDefault(); // Prevent the form submission if validation fails.
    }
});
