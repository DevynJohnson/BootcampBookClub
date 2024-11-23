// Pulls the books objects from bookData.js using the function call.
booksData = getBooks();

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
        for (i=0; i<storedBooks.length; i++) {
            books.unshift(storedBooks[i]);
            console.log()
        }
        console.log("Retrieved data from localStorage");
    } else {
        localStorage.setItem('bookData', JSON.stringify(booksData));
        console.log("No localStorage detected. Adding bookData.");
        console.log("Check 'Application' under 'Dev Tools'");
        console.log("");
        for (j=0; j<booksData.length; j++) {
            console.log(booksData[j].title);
        }
    }
}

checkForData(booksData);