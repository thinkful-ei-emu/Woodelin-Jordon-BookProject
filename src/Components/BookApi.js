import React from 'react';
import Search from './Search';
import Book from './Book';

// const booklist = this.state.books.map((item, index) => {
//     return (
//         <li key={index}>
//             <Book />
//         </li>
//     )
// })

class BookApi extends React.Component {
    state = {
        books: [],
        q: null,
        filter: null,
        bookType: null,
    }





    getBooks = (title) => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Response invalid');
                }
                return response;
            })/////////////
            .then(response => response.json())////////
            .then(data => {
                console.log(data)
                let books = data.items.map(book => {
                    const title = book.volumeInfo.title;
                    const authors = book.volumeInfo.authors;
                    const description = book.volumeInfo.description;

                    return {
                        title,
                        authors,
                        description,
                    }
                })
                console.log(books);
                this.setState({
                    books,
                })
            })///////
    }


    handleSearch = (event) => {
        event.preventDefault();
        let title = event.target.search.value;
        console.log(title);
        this.setState({
            q: title,
        });
        this.getBooks(title);
    }





    render() {

        return (
            <div>
                <Search handleSearch={this.handleSearch} />
                <ul>
                    <li>BOOK</li>
                </ul>
            </div>
        );
    }
}

export default BookApi;