document.addEventListener('DOMContentLoaded', function() {
    // Get the login form and data display div
    const loginForm = document.getElementById('loginForm');
    const dataDisplay = document.getElementById('dataDisplay');
  
    // Add event listener to the form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get the email and password values
      const email = document.getElementById('emailInput').value;
      const password = document.getElementById('passwordInput').value;
  
      // Password validation regular expression
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
      if (email === 'example@example.com' && password.match(passwordRegex)) {
        // Show the data display
        loginForm.classList.add('hidden');
        dataDisplay.classList.remove('hidden');
      } else {
        // Show an error message
        alert('Invalid email or password. Please try again.');
      }
    });
  });
  