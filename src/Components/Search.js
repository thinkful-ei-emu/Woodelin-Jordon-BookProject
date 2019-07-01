import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSearch}>
                    <label>Search:</label>
                    <input name="search" id="search" type="text"></input>
                    <button type="submit">Search</button>

                    <label>Print Type</label>
                    <select id="print-type">
                        <option value="">Please choose an option</option>
                        <option value="1">Print type 1</option>
                        <option value="2">Print type 2</option>
                    </select>

                    <label>Book Type</label>
                    <select id="book-type">
                        <option value="">Please choose an option</option>
                        <option value="ebooks">Ebooks</option>
                        <option value="free-books">Free Books</option>
                    </select>
                </form>
            </div >
        );
    }


}

export default Search;