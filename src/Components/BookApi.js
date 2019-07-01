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

    // static get booklist() {
    //     return booklist;
    // }




    getBooks = (title) => {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${title}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Response invalid');
                }
                return response;
            })
            .then(response => response.json())
            .then(data => console.log(data))
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
                    {}
                </ul>
            </div>
        );
    }
}

export default BookApi;