let books = [
    "book1.jpg", "book2.jpg", "book3.jpg", "book4.jpg", "book5.jpg"
];
const bookScroll = document.getElementById('book-scroll');
const scrollAmount = 100; 

// Function to load books into the scroll container
function loadBooks() {
    books.forEach(book => {
        const img = document.createElement('img');
        img.src = book;
        img.classList.add('book-img');
        bookScroll.appendChild(img);
    });
}

// Function to scroll books left or right
function scroll(direction) {
    const currentTransform = bookScroll.style.transform || "translateX(0)";
    let currentPosition = parseInt(currentTransform.replace(/[^0-9-]/g, ''));
    
    if (direction === 'left') {
        currentPosition = Math.min(currentPosition + scrollAmount, 0);
    } else if (direction === 'right') {
        const maxScroll = -(bookScroll.children.length * 110 - bookScroll.offsetWidth); // 110px per book with margin
        currentPosition = Math.max(currentPosition - scrollAmount, maxScroll);
    }
    
    bookScroll.style.transform = `translateX(${currentPosition}px)`;
}

// Event listeners for arrows
document.getElementById('left-arrow').addEventListener('click', () => scroll('left'));
document.getElementById('right-arrow').addEventListener('click', () => scroll('right'));

// Load books when the script runs
loadBooks();
// Imports the entire array from bookData.js
import {bookData} from './bookData.js';

/* 
Checks for existing data in localStorage. If it finds that the bookdata object already exists there, 
it will add it to an array called books that we can then use to do all kinds of fun stuff.
It the array is not found, we will then add our current list of book objects to localStorage.
You should find that when you refresh the page, the data will not be continusously added.

Let me know if you have any issues!
*/
function checkForData() {

    let books = [];

    const storedBooks = JSON.parse(localStorage.getItem('bookData'));
     
    if (storedBooks !== null) {
        for (let i=0; i<storedBooks.length; i++) {
            books.unshift(storedBooks[i]);
            console.log()
        }
        console.log("Retrieved data from localStorage");
    } else {
        localStorage.setItem('bookData', JSON.stringify(booksData));
        console.log("No localStorage detected. Adding bookData.");
        console.log("Check 'Application' under 'Dev Tools'");
        console.log("");
        for (let j=0; j<booksData.length; j++) {
            console.log(booksData[j].title);
        }
    }
}

for (let k=0; k < bookData.length; k++){
    console.log(bookData[k].title);

}

// Registration form code
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

// Login form code
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

// Add book form code
const bookForm = document.getElementById('bookForm');
  bookForm.addEventListener('submit', (event) => {

    event.preventDefault();

    const newBookAuthor = document.getElementById('newBookAuthor').value;
    const newBookCountry = document.getElementById('newBookCountry').value;
    const newBookImage = document.getElementById('newBookImage').value;
    const newBookLanguage = document.getElementById('newBookLanguage').value;
    const newBookLink = document.getElementById('newBookLink').value;
    const newBookPages = document.getElementById('newBookPages').value;
    const newBookTitle = document.getElementById('newBookTitle').value;
    const newBookYear = document.getElementById('newBookYear').value;

    const newBookData = {
        author: newBookAuthor,
        country: newBookCountry,
        image: newBookImage,
        language: newBookLanguage,
        link: newBookLink,
        pages: newBookPages,
        title: newBookTitle,
        year: newBookYear
    };

    // Let's confirm that we have the data.
    console.log(newBookData);
    // Retrieve existing user data array from local storage or create a new one.
    let userAddedBooks = JSON.parse(localStorage.getItem('userAddedBooks')) || [];
    // Add this glorious new data to the array.
    userAddedBooks.push(newBookData);
    // test that the array is now populated.
    console.log(userAddedBooks[0].newBookTitle);
    // Store this bad boy in local storage
    localStorage.setItem('userAddedBooks', JSON.stringify(userAddedBooks));
    // Empty the form. It looks nicer
    bookForm.reset(); 
  });

  

/*
<div class="container my-5">
        <h2 class="text-center mb-4">Completed Books</h2>
        <div class="book-container position-relative mb-3">
            <div id="left-arrow" class="arrow position-absolute start-0 top-50 translate-middle-y" style="font-size: 2rem; cursor: pointer;">&lt;</div>
            <div id="book-scroll" class="book-scroll d-flex overflow-hidden">
                <!-- Book images added here? -->
            </div>
            <div id="right-arrow" class="arrow position-absolute end-0 top-50 translate-middle-y" style="font-size: 2rem; cursor: pointer;">&gt;</div>
        </div>
    </div>

    <main class="container-fluid p-5">

        <!-- Button to trigger modal --> 
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#bookFormModal"> Add Book </button> 

        <!-- Modal --> 
        <div class="modal fade" id="bookFormModal" tabindex="-1" aria-labelledby="bookFormModalLabel" aria-hidden="true"> 
            <div class="modal-dialog"> 
                <div class="modal-content"> 
                    <div class="modal-header"> 
                        <h5 class="modal-title" id="bookFormModalLabel">Add a New Book</h5> 
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
                    </div> 
                    <div class="modal-body"> 
                        <form id="bookForm"> 
                            <div class="mb-3"> 
                                <label for="newBookTitle" class="form-label">Title</label> 
                                <input type="text" class="form-control" id="newBookTitle" required> 
                            </div> 
                            <div class="mb-3"> 
                                <label for="newBookAuthor" class="form-label">Author</label> 
                                <input type="text" class="form-control" id="newBookAuthor" required> 
                            </div> 
                            <div class="mb-3"> 
                                <label for="newBookCountry" class="form-label">Country of Origin</label> 
                                <input type="text" class="form-control" id="newBookCountry" required> 
                            </div> 
                            <div>
                                <label for="newBookLanguage" class="form-label">Language</label>
                                <input type="text" class="form-control" id="newBookLanguage" required>
                            </div>
                            <div class="mb-3"> 
                                <label for="newBookYear" class="form-label">Year of Publication</label> 
                                <input type="number" class="form-control" id="newBookYear" required> 
                            </div> 
                            <div class="mb-3"> 
                                <label for="newBookImage" class="form-label">Image URL</label> 
                                <input type="url" class="form-control" id="newBookImage" required> 
                            </div> 
                            <div class="mb-3"> 
                                <label for="newBookLink" class="form-label">Link</label> 
                                <input type="url" class="form-control" id="newBookLink" required> 
                            </div> 
                            <div class="mb-3"> 
                                <label for="newBookPages" class="form-label">Number of Pages</label> 
                                <input type="number" class="form-control" id="newBookPages" required> 
                            </div> 
                            <button type="submit" class="btn btn-primary">Save</button> 
                        </form> 
                    </div>
                </div>
            </div>
        </div>



        <!-- Modal  (Use this for the project1 registration modal)--> 
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#registrationFormModal"> Sign Up! </button> 

        <div class="modal fade" id="registrationFormModal" tabindex="-1" aria-labelledby="registrationModalLabel" aria-hidden="true"> 
            <div class="modal-dialog"> 
                <div class="modal-content"> 
                    <div class="modal-header"> 
                        <h5 class="modal-title" id="registrationFormModalTitle"> Register </h5> 
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
                    </div> 
                    <div class="modal-body"> 
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
                    </div>
                </div>
            </div>
        </div>


        <!-- Button to trigger login modal --> 
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#loginFormModal"> Login </button> 

        <!-- Modal --> 
        <div class="modal fade" id="loginFormModal" tabindex="-1" aria-labelledby="loginFormModalLabel" aria-hidden="true"> 
            <div class="modal-dialog"> 
                <div class="modal-content"> 
                    <div class="modal-header"> 
                        <h5 class="modal-title" id="bookFormModalLabel">Welcome Back!</h5> 
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> 
                    </div> 
                    <div class="modal-body"> 
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
                    </div>
                </div>
            </div>
        </div>
    </main>
*/

