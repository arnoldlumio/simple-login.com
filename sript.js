document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Example of hardcoded credentials
    const validUsername = "admin";
    const validPassword = "password123";

    // Simple validation check
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to the homepage
        window.location.href = "home.html"; // Redirect to home page after successful login
    } else {
        document.getElementById('errorMessage').textContent = "Invalid username or password.";
    }
});



// Get the logout button
const logoutBtn = document.getElementById('logoutBtn');

// Add an event listener to handle logout
logoutBtn.addEventListener('click', function() {
    // Simulate logout action by redirecting back to the login page
    window.location.href = 'login.html'; // Assuming the login page is named login.html
});






document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Here, you would typically send the data to a server
        // For example: using fetch() to send the data to your backend
    } else {
        alert('Please fill in all fields.');
    }

    // Reset form fields
    document.getElementById('contact-form').reset();
});
