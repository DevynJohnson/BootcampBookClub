//HTML for register and login forms

/* <div class="container mt-5">
        <h2>Register</h2>
        <form id="register-form" class="mb-4">
            <div class="form-group">
                <label for="newUsername">Username</label>
                <input type="text" class="form-control" id="newUsername" placeholder="Enter username" required>
            </div>
            <div class="form-group">
                <label for="newPassword">Password</label>
                <input type="password" class="form-control" id="newPassword" placeholder="Enter password" required>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
        <div id="registeredSuccessfully" class="alert alert-success" role="alert" style="display: none;"></div>

        <h2>Login</h2>
        <form id="login-form" class="mb-4">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Enter username" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter password" required>
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
        <div id="loginSuccess" class="alert alert-success" role="alert" style="display: none;"></div>
        <div id="loginFailed" class="alert alert-danger" role="alert" style="display: none;"></div>
    </div> */

const registerForm = document.getElementById('register-form'); // Set the form element to a variable
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reset on form submission
    const newUsername = document.getElementById('newUsername').value; // Get the value of the username input field
    const newPassword = document.getElementById('newPassword').value; // Get the value of the password input field

    localStorage.setItem('username', newUsername); // Store the username in local storage
    localStorage.setItem('password', newPassword); // Store the password in local storage
    
    const registeredSuccessfully = document.getElementById('registeredSuccessfully'); 
    registeredSuccessfully.textContent = `Registration complete. Welcome ${newUsername}!`; // Display a success message
    registeredSuccessfully.style.display = 'block'; 
});



const loginForm = document.getElementById('login-form'); // Set the form element to a variable
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reset on form submission
    const username = document.getElementById('username').value; // Get the value of the username input field
    const password = document.getElementById('password').value; // Get the value of the password input field

    const storedUsername = localStorage.getItem('username'); // Get the stored username from local storage
    const storedPassword = localStorage.getItem('password'); // Get the stored password from local storage

    const loginSuccess = document.getElementById('loginSuccess'); 
    const loginFailed = document.getElementById('loginFailed');

    if (username === storedUsername && password === storedPassword) { // Check if the entered username and password match the stored username and password
        loginSuccess.textContent = `Welcome back ${username}!`; // Display a success message if the username and password match
        loginSuccess.style.display = 'block';
        loginFailed.style.display = 'none';
    } else {
        loginFailed.textContent = 'Invalid username or password. Please try again.'; // Display an error message if the username and password do not match
        loginFailed.style.display = 'block';
        loginSuccess.style.display = 'none';
    }
});





