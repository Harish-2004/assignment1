// script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get the input values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const newPassword = document.getElementById('newPassword').value;

        // You can perform validation or AJAX requests here
        // For now, let's just display the input values
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('New Password:', newPassword);
    });
});
