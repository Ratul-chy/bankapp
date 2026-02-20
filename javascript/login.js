//console.log("login.js loaded");

document.getElementById('login-btn').addEventListener ('click', function() {
    //1. get mobile number input
        const mobileNumber = document.getElementById('input-number');
        const contact = mobileNumber.value;
        console.log(contact);
    //2. get pin input
        const pinInput = document.getElementById('input-pin');
        const pin = pinInput.value;
        console.log(pin);
    //3. validate mobile number and pin
        if (contact === "01234567890" && pin === "1234") {
            alert("Login successful!"); 
            window.location.assign("/home.html"); // Redirect to home page
            //4. if valid, redirect to home page
             // Redirect to home page
        } else {
            //5. if invalid, show error message
            alert("Invalid mobile number or pin. Please try again.");
        }
    
    
})