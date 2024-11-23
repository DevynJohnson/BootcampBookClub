//HTML for register and login forms

/* <div class="d-flex justify-content-evenly align-items-center m-5">

<div class="card border-primary text-center">
    <h3>New to the site? Register here!</h3>
    <form id="register-form" class="col-auto">
        <div class="input-group mb-2">
            <span class="input-group-text" for="newUsername" id="basic-addon1">Create Username: </span>
            <input type="text" class="form-control" id="newUsername" placeholder="username" required>
        </div>
        <div class="input-group mb-2 mt-2">
            <span class="input-group-text" for="newPassword" id="basic-addon1">Create Password:</span>
            <input type="password" class="form-control" id="newPassword" placeholder="password" required>
        </div>
        <div class="input-group mb-2 mt-2">
            <span class="input-group-text" for="newReadingGoal" id="basic-addon1">Set Reading Goal:</span>
            <input type="text" class="form-control" id="newReadingGoal" placeholder="total books this year"
                required>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</div>
<div id="registeredSuccessfully" class="alert alert-success" role="alert" style="display: none;">
</div>

<div class="card border-0 text-center"><h2>OR</h2></div>

<div class="card border-primary text-center">
    <h3>Welcome back! Login here.</h3>
    <form id="login-form" class="col-auto">
        <div class="input-group mt-2">
            <span class="input-group-text" for="username" id="basic-addon1">Username:</span>
            <input type="text" class="form-control" id="username" placeholder="Enter username" required>
        </div>
        <div class="input-group mb-2 mt-2">
            <span class="input-group-text" for="password" id="basic-addon1">Password:</span>
            <input type="password" class="form-control" id="password" placeholder="Enter password" required>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <div id="loginSuccess" class="alert alert-success" role="alert" style="display: none;"></div>
    <div id="loginFailed" class="alert alert-danger" role="alert" style="display: none;"></div>
</div>
</div> */

const registerForm = document.getElementById('register-form'); // Set the form element to a variable
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reset on form submission
    const newUsername = document.getElementById('newUsername').value; // Get the value of the username input field
    const newPassword = document.getElementById('newPassword').value; // Get the value of the password input field
    const newReadingGoal = document.getElementById('newReadingGoal').value; // Get the value of the reading goal input field

    const userData = {
        username: newUsername,
        password: newPassword,
        readingGoal: newReadingGoal
    };

    console.log(userData);
    // Retrieve existing user data array from local storage or create a new one
    let usersArray = JSON.parse(localStorage.getItem('usersArray')) || [];
    // Add the new user data to the array
    usersArray.push(userData);
    // Store the updated array back in local storage
    localStorage.setItem('usersArray', JSON.stringify(usersArray));


    localStorage.setItem('userData', JSON.stringify(userData)); // Store the user data in local storage


    const registeredSuccessfully = document.getElementById('registeredSuccessfully');
    registeredSuccessfully.textContent = `Registration complete. Welcome ${newUsername}!`; // Display a success message
    registeredSuccessfully.style.display = 'block';
});



const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reset on form submission
    const username = document.getElementById('username').value; // Get the value of the username input field
    const password = document.getElementById('password').value; // Get the value of the password input field

    const usersArray = JSON.parse(localStorage.getItem('usersArray')) || []; // Get the stored user data array from local storage and parse it

    const loginSuccess = document.getElementById('loginSuccess'); 
    const loginFailed = document.getElementById('loginFailed');

    // Check if the entered username and password match any stored username and password
    const user = usersArray.find(user => user.username === username && user.password === password);

    if (user) {
        loginSuccess.textContent = `Welcome back ${username}!`; // Display a success message if the username and password match
        loginSuccess.style.display = 'block';
        loginFailed.style.display = 'none';
    } else {
        loginFailed.textContent = 'Invalid username or password. Please try again.'; // Display an error message if the username and password do not match
        loginFailed.style.display = 'block';
        loginSuccess.style.display = 'none';
    }
});





