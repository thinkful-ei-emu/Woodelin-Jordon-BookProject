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
        // filter: null,
        // bookType: null,
    }





    getBooks = (title, bookType, printType) => {

        let url = `https://www.googleapis.com/books/v1/volumes?q=${title}&filter=${bookType}&printType=${printType}`;


        console.log(url);
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
                    const image = book.volumeInfo.imageLinks.thumbnail;
                    const price = book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 'No Price Info';

                    return {
                        title,
                        authors,
                        description,
                        price,
                        image,
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
        let bookType = event.target.bookType.value;
        let printType = event.target.printType.value;

        console.log(title);
        this.setState({
            q: title,
            filter: printType,
            bookType: bookType,
        });
        this.getBooks(title, bookType, printType);
    }





    render() {
        const list = this.state.books.map((item, index) => {
            return (
                <li key={index}>
                    <Book title={item.title} authors={item.authors} description={item.description} price={item.price} image={item.image} />
                </li>
            )
        })

        return (
            <div>
                <Search handleSearch={this.handleSearch} />
                <ul id="booklist">
                    {list}
                </ul>
            </div>
        );
    }
}

export default BookApi;