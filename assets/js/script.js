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

}//HTML for register and login forms

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

    // Update the welcome message
    const welcomeMessageElement = document.getElementById('welcomeMessage');
    welcomeMessageElement.textContent = `Welcome to the club ${newUsername}! Use the search bar above to look for a book title or add one of your own to manage your reading list!`;

     // Close the modal
     const registrationModal = bootstrap.Modal.getInstance(document.getElementById('registrationFormModal'));
     registrationModal.hide();

    displayBookGoal(); // Update user reading goal after registration is completed
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

  // Use search bar in nav to search for books by title
document.addEventListener('DOMContentLoaded', () => {
    const books = bookData;

    // Check if user data is found in local storage and update the welcome message
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        const welcomeMessageElement = document.getElementById('welcomeMessage');
        welcomeMessageElement.textContent = `Welcome back ${userData.username}! Use the search bar above to look for a book title or add one of your own to manage your reading list!`;
    }

    // Handle the search form submission
    const searchForm = document.getElementById('searchBooks');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = event.target.querySelector('input[type="search"]').value.toLowerCase();
        // Retrieve user-added books from local storage
        const userAddedBooks = JSON.parse(localStorage.getItem('userAddedBooks')) || [];
        
        // Combine the bookData and userAddedBooks
        const allBooks = books.concat(userAddedBooks);
        const results = allBooks.filter(book => book.title.toLowerCase().includes(query));
        displaySearchResults(results);
    });

    // Function to display search results
    function displaySearchResults(results) {
        const searchResults = document.getElementById('searchResults');
        searchResults.innerHTML = '';

        if (results.length === 0) {
            searchResults.innerHTML = '<p class="text-center">No books found, please check your search and try again or use the Add A Book feature.</p>';
            return;
        }

        results.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('col-md-4', 'mb-3');
            bookCard.innerHTML = `
                <div class="card">
                    <img src="${book.imageLink}" class="card-img-top" alt="${book.title}">
                    <div class="card-body">
                        <h5 class="card-title">${book.title}</h5>
                        <p class="card-text">${book.author}</p>
                    </div>
                </div>
            `;
            searchResults.appendChild(bookCard);
        });
    }
});



// function for selecting a random book from the list.
function getRandomBook() {
    const randBookTitle = document.getElementById('randBookTitle');
    const randBookAuthor = document.getElementById('randBookAuthor');
    const randBookDescription = document.getElementById('randBookDescription');
    const randBookImage = document.getElementById('randBookImage');

    let randomNumber = Math.floor(Math.random() * bookData.length);
    /*
    console.log(randomNumber);
    console.log(bookData[randomNumber].author);
    console.log(bookData[randomNumber].title);
    console.log(bookData[randomNumber].year);
    console.log(bookData[randomNumber].language);
    console.log(bookData[randomNumber].country);
    console.log(bookData[randomNumber].link);
    console.log(bookData[randomNumber].imageLink);
    */
    randBookTitle.textContent = bookData[randomNumber].title;
    randBookAuthor.textContent = bookData[randomNumber].author;
    randBookDescription.textContent = bookData[randomNumber].description;
    randBookImage.setAttribute('src', bookData[randomNumber].imageLink);

  }


getRandomBook();

// Function to display the user's reading goal
function displayBookGoal() {
    const goal = document.getElementById('goal'); // Define goal element as a variable
    const user = JSON.parse(localStorage.getItem('userData')); // Get the user data from local storage and parse it
    if (user && user.readingGoal) {
        goal.textContent = `Your reading goal for this year is ${user.readingGoal} books.`; // Display the user's reading goal if it exists
    } else {
        goal.textContent = 'Please register to set a personal reading goal.'; // Display a message if the user has not set a reading goal
    }
}

// Call displayBookGoal on page load to show the goal if the user is already logged in
displayBookGoal();