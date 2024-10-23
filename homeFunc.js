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
