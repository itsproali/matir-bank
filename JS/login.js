// Entering Bank home page
document.getElementById('login-button').addEventListener('click', function () {
    // Get User Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // Get User Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value
    // Checking Email and Password
    if (userEmail == 'example@gmail.com' && userPassword == 'secret') {
        window.location.href = 'home.html'
    }
    else {
        alert("You entered wrong Email or Password. Please Enter Email: example@gmail.com                                 Password: secret")
    }
});
