// Initialize EmailJS with your User ID (if required by EmailJS)
(function() {
    emailjs.init("p-vEdPnblIB1wBjtt");  // Replace with your EmailJS User ID if needed
})();

// Event listener for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Show loading spinner on submit button
    const submitButton = document.getElementById("submit-button");
    submitButton.disabled = true; // Disable the button
    submitButton.innerHTML = '<div class="spinner"></div>'; // Add loading spinner

    // Clear the previous status message
    document.getElementById("submission-status").innerHTML = '';

    // Send the form data using EmailJS
    emailjs.sendForm("service_vueoden", "template_ve0mi1i", this)  // Replace with your Service ID and Template ID
        .then(function() {
            // Show success message and reset form
            document.getElementById("submission-status").innerHTML = "Your message was sent successfully!";
            document.getElementById("contact-form").reset(); // Reset the form after successful submission
            submitButton.disabled = false; // Re-enable the button
            submitButton.innerHTML = 'Send'; // Reset button text
        }, function(error) {
            // Show error message and reset button
            document.getElementById("submission-status").innerHTML = "Failed to send the message. Please try again.";
            console.log(error);
            submitButton.disabled = false; // Re-enable the button
            submitButton.innerHTML = 'Send'; // Reset button text
        });
});
