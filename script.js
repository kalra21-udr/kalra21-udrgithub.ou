document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("feedbackForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const responseMessage = document.getElementById("responseMessage");
        
        if (name && email && message) {
            responseMessage.textContent = "Thank you for your feedback, " + name + "!";
            responseMessage.style.color = "green";
            
            document.getElementById("feedbackForm").reset();
        } else {
            responseMessage.textContent = "Please fill in all fields.";
            responseMessage.style.color = "red";
        }
    });
});
