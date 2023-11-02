import resetPage from "./resetpage.js";


class Book {
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

export default class Library {
    constructor(array,size){
        this.library = array || [];
        this.size = size || 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    sizeOf() {
        return this.size;
    }

    addBook(title,author,pages,read) {
        if(this.sizeOf() >= 8){
            return;
        }

        let exists = false;

        this.library.forEach(book => {
            if(book.title === title){
                exists = true;
            }
        });

        if(exists === true){
            return console.log('Book Already Exists!');
        }

        const newBook = new Book(title,author,pages,read);
        this.library.push(newBook);
        this.size++;
        this.printBooks();
        this.saveBooks();
        return this.library;
    }

    removeBook(title) {
        if(this.isEmpty()){
            return 'Library is empty can not delete!';
        }

        if(this.sizeOf() === 1 && this.library[0].title === title){
            this.library.pop();
            this.size--; 
            this.saveBooks(); 
            resetPage('bookcontainer'); 
        }

        let position = 0;

        this.library.forEach(book => {
            if(book.title === title){
                this.library.splice(position,1);
                this.size--;   
            }
            position++;
        })

       this.printBooks(); 
       this.saveBooks();
    }

    printBooks() {
        //This checks if the library si empty and if it does it returns an error message.
        if(this.isEmpty()){
            return 'The library is empty give me books to print please!';
        }
        //This runs the resetpage meethod which cleans the dom before printing the list again.
        resetPage('bookcontainer');
        //This creates all the variable for the creation of a card to print.
        const container = document.querySelector('.bookcontainer');
        //This loops through the library and creates each card and prints it in order.
        this.library.forEach(book => {
            //Create a new element for each card
            const bookDiv = document.createElement('div');
            const bookTitle = document.createElement('h2');
            const bookAuthor = document.createElement('p');
            const bookPage = document.createElement('p');
            const bookRead = document.createElement('button');
            const bookDelete = document.createElement('p');
            // This creates id/class for each piece of the card for styling and more.
            bookDiv.classList = 'bookdivs';
            bookTitle.id = `${book.title} inner`;
            bookTitle.classList = 'booktitles';
            bookAuthor.id = `${book.author}`;
            bookAuthor.classList = 'bookauthors';
            bookPage.id = `${book.pages}`;
            bookPage.classList = 'bookpages';
            bookRead.id = `${book.read}`;
            bookRead.name = `${book.read} ${book.title}`;
            bookRead.classList = 'bookread';
            bookDelete.classList = 'deletebtns';
            bookDelete.id = `${book.title}`;
            //This creates the text content for each piece of the card
            bookTitle.textContent = `${book.title}`;
            bookAuthor.textContent = `${book.author}`;
            bookPage.textContent = `${book.pages}`;
            bookRead.textContent = `${book.read}`;
            bookDelete.textContent = 'X';
            //Append all to the card and then append the card to the page.
            bookDiv.appendChild(bookDelete);
            bookDiv.appendChild(bookTitle);
            bookDiv.appendChild(bookAuthor);
            bookDiv.appendChild(bookPage);
            bookDiv.appendChild(bookRead);
            //Appending card to the page
            container.appendChild(bookDiv);
        });
    }

    saveBooks() {
        /*After I finish the createpage function and some user interaction we will create and 
        utilize this to save the library the user created in local storage. */
        //Save the library and the size.
        localStorage.setItem('Library', JSON.stringify(this.library));
        localStorage.setItem('Size', JSON.stringify(this.size));
    }

    reassignRead(name,readstatus){
        if(this.isEmpty()){
            return 'Library is empty!';
        }

        this.library.forEach(book => {
            if(`${book.read} ${book.title}` === name){
                book.read = readstatus;
                console.log(`${book.read} ${book.title}`,this.read);
                this.printBooks();
                this.saveBooks();
            }
        })

    }
}

