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