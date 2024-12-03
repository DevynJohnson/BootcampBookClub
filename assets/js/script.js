
document.addEventListener('DOMContentLoaded', (event) => {
    //search form feature moved inside the beginning of the dom for funtionality.
    const books = bookData;

    // Handle the search form submission
    const searchForm = document.getElementById('searchBooks');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const query = event.target.querySelector('input[type="search"]').value.toLowerCase();
        const results = books.filter(book => book.title.toLowerCase().includes(query));
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
    
    const completeBookModal = document.getElementById('completeBookModal');
    let bsCompleteBookModal;

    if (completeBookModal) {
        bsCompleteBookModal = new bootstrap.Modal(completeBookModal);
    } else {
        console.error('Modal element not found: #completeBookModal');
    }

    const bookScroll = document.getElementById('book-scroll');
    if (!bookScroll) {
        console.error('Element not found: #book-scroll');
    }
    const scrollAmount = 110;
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const bookForm = document.getElementById('bookForm');
 

    console.log("Register Form:", registerForm);
    console.log("Login Form:", loginForm);
    console.log("Book Form:", bookForm);
    console.log("Search Form:", searchForm);
    console.log("Complete Book Modal:", completeBookModal);
    console.log("Book Scroll:", bookScroll);

    // Function to populate the dropdown with user-added books
    function populateBookSelect() {
        if (typeof(Storage) !== "undefined") {
            const bookSelect = document.getElementById('bookToComplete');
            if (!bookSelect) {
                 console.error("Book select element not found");
                return;
            }
            bookSelect.innerHTML = '';  // Clear existing options
        
            try {
                const userAddedBooks = JSON.parse(localStorage.getItem('userAddedBooks')) || [];
                userAddedBooks.forEach(book => {
                    const option = document.createElement('option');
                    option.value = book.title;
                    option.textContent = `${book.title} - ${book.author}`;
                    bookSelect.appendChild(option);
                    //console.log(userAddedBooks);
                });
            } catch (error) {
                console.error("Error parsing userAddedBooks from localStorage:", error);
            }
        } else {
            console.error("Sorry, your browser does not support Web Storage...");
        }
    }

    // Function to scroll books left or right
    function scroll(direction) {
        if (!bookScroll) return;
        
        const currentTransform = bookScroll.style.transform || "translateX(0)";
        let currentPosition = parseInt(currentTransform.replace(/[^0-9-]/g, ''));
        
        if (direction === 'left') {
            currentPosition = Math.min(currentPosition + scrollAmount, 0);
        } else if (direction === 'right') {
            const maxScroll = -(bookScroll.children.length * 110 - bookScroll.offsetWidth); 
            currentPosition = Math.max(currentPosition - scrollAmount, maxScroll);
        }
        
        bookScroll.style.transform = `translateX(${currentPosition}px)`;
    }

    // Function to handle book completion
    function handleBookCompletion(event) {
        event.preventDefault();
        const bookSelect = document.getElementById('bookToComplete');
        console.log(bookSelect);
        if (!bookSelect) {
            console.error("Book select element not found");
            return;
        }
        const selectedBookTitle = bookSelect.value;
        console.log("Selected Book Title:", selectedBookTitle);

        if (typeof(Storage) !== "undefined") {
            try {
                const userAddedBooks = JSON.parse(localStorage.getItem('userAddedBooks')) || [];
                const bookToComplete = userAddedBooks.find(book => book.title.toLowerCase() === selectedBookTitle.toLowerCase());
                console.log("Book to Complete:", bookToComplete);

                if (bookToComplete) {
                    updateCompletedBooks(bookToComplete);
                    if (bsCompleteBookModal) {
                         bsCompleteBookModal.hide();
                    }
                } else {
                    alert("Error: Book not found in your list.");
                }
            } catch (error) {
                console.error("Error processing book completion:", error);
            }
        } else {
            console.error("Sorry, your browser does not support Web Storage...");
        }
    }

    // Function to update the completed books in localStorage
    function updateCompletedBooks(book) {
        if (typeof(Storage) !== "undefined") {
            try {
                let completedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];
                console.log("Before update:", completedBooks);
                
                if (!completedBooks.some(b => b.title === book.title)) {
                    completedBooks.push(book);
                    localStorage.setItem('completedBooks', JSON.stringify(completedBooks));
                    console.log("After update:", completedBooks);
                    if (bookScroll) {
                        const img = createBookImage(book);
                        if (img) {
                            bookScroll.appendChild(img);
                        }
                    }
                }
            } catch (error) {
                console.error("Error updating completed books:", error);
            }
        } else {
            console.error("Sorry, your browser does not support Web Storage...");
        }
    }

    // Function to create book image element with error handling
    function createBookImage(book) {
        if (!book.image) {
            console.warn("Book image URL missing for:", book.title);
            return null;
        }
        const img = document.createElement('img');
        img.src = book.image;
        img.classList.add('book-img', 'completed');
        img.dataset.book = JSON.stringify(book);
        img.onerror = () => {
            console.error("Failed to load image for book:", book.title);
            img.src = "./assets/images/default-book-cover.jpg"; // Use correct path for fallback image
        };
        return img;
    }

    // Function to display completed books
    function displayCompletedBooks() {
        console.log('we got to this function');
        if (!bookScroll) {return};
        console.log (bookScroll);
        if (typeof(Storage) !== "undefined") {
            try {
                let completedBooks = JSON.parse(localStorage.getItem('completedBooks')) || [];
                console.log("Completed books found:", completedBooks);
                completedBooks.forEach(book => {
                    const img = createBookImage(book);
                    if (img) {
                        bookScroll.appendChild(img);
                    }
                });
            } catch (error) {
                console.error("Error displaying completed books:", error);
            }
        } else {
            console.error("Sorry, your browser does not support Web Storage...");
        }
    }

    // Initial Data Check
    function checkForData() {
        if (typeof(Storage) !== "undefined") {
            try {
                let storedBooks = JSON.parse(localStorage.getItem('bookData')) || [];
                if (storedBooks.length === 0) {
                    localStorage.setItem('bookData', JSON.stringify(bookData));
                    console.log("No localStorage detected. Added initial bookData.");
                } else {
                    console.log("Retrieved bookData from localStorage");
                }
            } catch (error) {
                console.error("Error checking for initial data:", error);
                localStorage.setItem('bookData', JSON.stringify(bookData));
            }
        } else {
            console.error("Sorry, your browser does not support Web Storage...");
        }
    }

    // Event listeners for arrows
    function setupArrowListeners() {
        const leftArrow = document.getElementById('left-arrow');
        const rightArrow = document.getElementById('right-arrow');
        if (leftArrow) leftArrow.addEventListener('click', () => scroll('left'));
        if (rightArrow) rightArrow.addEventListener('click', () => scroll('right'));
    }

    // Event listener for the complete book form
    const completeForm = document.getElementById('completeForm');
    if (completeForm) {
        completeForm.addEventListener('submit', handleBookCompletion);
    } else {
        console.error('Complete book form not found');
    }

    // Populate the book select when the modal is shown
    if (completeBookModal) {
        completeBookModal.addEventListener('show.bs.modal', () => {
            console.log("Modal is showing, populating book select...");
            populateBookSelect();
            console.log("After populating book select");
        });
    }

    // Load and display any previously completed books
    displayCompletedBooks();

    // Check for initial data
    checkForData();

    setupArrowListeners();
});
// Imports the entire array from bookData.js
import {bookData} from './bookData.js';

//console.log(bookData);

/* 
Checks for existing data in localStorage. If it finds that the bookdata object already exists there, 
it will add it to an array called books that we can then use to do all kinds of fun stuff.
It the array is not found, we will then add our current list of book objects to localStorage.
You should find that when you refresh the page, the data will not be continusously added.

Let me know if you have any issues!
*/

    let books = [];
    const storedBooks = JSON.parse(localStorage.getItem('bookData'));
     
    if (storedBooks !== null) {
        for (let i=0; i<storedBooks.length; i++) {
            books.unshift(storedBooks[i]);
            console.log(books[0]); 
            console.log("CheckForDataSuccess"); 
        }
        console.log("Retrieved data from localStorage");
    } else {
        localStorage.setItem('bookData', JSON.stringify(bookData));
        console.log("No localStorage detected. Adding bookData.");
        console.log("Check 'Application' under 'Dev Tools'");
        console.log("");
        console.log("CheckForDataSuccess"); 
        for (let j=0; j<storedBooks.length; j++) {
            console.log(storedBooks[j].title);
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


// function for selecting a random book from the list.
function getRandomBook() {

    const storedBooks = JSON.parse(localStorage.getItem('bookData'));
    const randBookTitle = document.getElementById('randBookTitle');
    const randBookAuthor = document.getElementById('randBookAuthor');
    const randBookDescription = document.getElementById('randBookDescription');
    const randBookImage = document.getElementById('randBookImage');

    let randomNumber = Math.floor(Math.random() * storedBooks.length);

    randBookTitle.textContent = storedBooks[randomNumber].title;
    randBookAuthor.textContent = storedBooks[randomNumber].author;
    randBookDescription.textContent = storedBooks[randomNumber].description;
    randBookImage.setAttribute('src', storedBooks[randomNumber].imageLink);
  }

// Creating a list of styles to choose from.
function setStyles() {
    const styleList = []

    const style1 = {
        primary: '#EEEEEE',
        secondary: '#686D76',
        tertiary: '#373A40',
        accent: '#DC5F00'
    }
    styleList.push(style1);

    const style2 = {
        primary: '#F5F7F8',
        secondary: '#F4CE14',
        tertiary: '#495E57',
        accent: '#45474B'
    }
    styleList.push(style2);

    const style3 = {
        primary: '#384B70',
        secondary: '#507687',
        tertiary: '#FCFAEE',
        accent: '#B8001F'
    }
    styleList.push(style3);

    const style4 = {
        primary: '#F3EFE0',
        secondary: '#434242',
        tertiary: '#222222',
        accent: '#22A39F'
    }
    styleList.push(style4);

    const style5 = {
        primary: '#E4E0E1',
        secondary: '#D6C0B3',
        tertiary: '#AB886D',
        accent: '#493628'
    }
    styleList.push(style5);

    const style6 = {
        primary: '#884A39',
        secondary: '#C38154',
        tertiary: '#FFC26F',
        accent: '#F9E0BB'
    }
    styleList.push(style6);

    const style7 = {
        primary: '#43766C',
        secondary: '#F8FAE5',
        tertiary: '#B19470',
        accent: '#76453B'
    }
    styleList.push(style7);

    const style8 = {
        primary: '#000B58',
        secondary: '#003161',
        tertiary: '#006A67',
        accent: '#FFF4B7'
    }
    styleList.push(style8);

    document.addEventListener('DOMContentLoaded', () => {
        const colorSelect = document.getElementById('colorSelect');

        // load saved color
        const savedStyles = JSON.parse(localStorage.getItem('savedStyles'));
        if (savedStyles) {
            document.body.style.backgroundColor = savedStyles.primary;
        }

        colorSelect.addEventListener('change', (event) => {
            const selectedStyle = event.target.value;
            document.body.style.backgroundColor = styleList[selectedStyle].primary;

            // save selected color;
            localStorage.setItem('savedStyles', JSON.stringify(savedStyles[selectedStyle].primary));
        })
    });
}

function getBookGoal() {
    const totalBookGoal = document.getElementById('bookGoal');
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    totalBookGoal.textContent = storedUserData.readingGoal;

    console.log(totalBookGoal.textContent);
};

function populateBooksLeft() {
    let booksLeft = document.getElementById('navBarBookCount');
    let userData = JSON.parse(localStorage.getItem('userData'));
    let goal = userData.readingGoal;
    let soFar = 25;
    let name = userData.username;
    booksLeft.textContent = `Books left: ${soFar}/${goal}, ${name}!`;
}

function currentBook() {

}

function markBookComplete() {

}

getRandomBook();
checkForData();
populateBooksLeft();
getBookGoal();
setStyles();

