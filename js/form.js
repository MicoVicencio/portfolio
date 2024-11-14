
(function() {
    emailjs.init("p-vEdPnblIB1wBjtt"); 
})();


document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

   
    const submitButton = document.getElementById("submit-button");
    submitButton.disabled = true;
    submitButton.innerHTML = '<div class="spinner"></div>'; // Add loading spinner

    // Clear the previous status message
    document.getElementById("submission-status").innerHTML = '';

    // Send the form data using EmailJS
    emailjs.sendForm("service_vueoden", "template_ve0mi1i", this)  
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
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) { // Adjust scroll value as needed
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

