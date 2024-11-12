// Initialize EmailJS with your User ID (if required by EmailJS)
(function() {
    emailjs.init("p-vEdPnblIB1wBjtt");  // Replace with your EmailJS User ID if needed
})();

// Event listener for form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Send the form data using EmailJS
    emailjs.sendForm("service_vueoden", "template_ve0mi1i", this)  // Replace with your Service ID and Template ID
        .then(function() {
            alert("Your message was sent successfully!"); // Corrected alert function
        }, function(error) {
            alert("Failed to send the message. Please try again.");
            console.log(error);
        });
});

