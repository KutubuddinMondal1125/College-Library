// Project 2 ----Building a Library System.
// Using ES6 Class.

// Book Class
class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

//Display Class
class Display {

    add(book) {
        console.log('Adding to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString = `
                        <tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr> `
        tableBody.innerHTML += uiString;
    }

    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 3 || book.author.length < 3) {
            return false;
        } else {
            return true;
        }
    }

    show(type, displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `
        
                            `

    }
}

// Add submit listner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit)

function libraryFormSubmit(e) {
    console.log('You have clicked on Add Book button');
    e.preventDefault();

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    let type;
    if (fiction.checked) {
        type = fiction.value;
    } else if (programming.checked) {
        type = programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type)
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('Success');
    } else {
        display.show('Error');
    }

}