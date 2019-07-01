import React from 'react';
// import BookApi from './BookApi';

class Search extends React.Component {
    // validatePrintType = (event) => {
    //     let printT = event.target.printType.value;
    //     if (printT.value === "") {
    //         return 'Must select print type'
    //     } else {
    //         return printT;
    //     }
    // }
    // validateBookType = (event) => {
    //     let bookT = event.target.printType.value;
    //     if (bookT.value === "") {
    //         return 'Must select book type'
    //     } else {
    //         return bookT;
    //     }
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSearch}>
                    <label>Search:</label>
                    <input name="search" id="search" type="text"></input>
                    <button type="submit">Search</button>

                    <label>Print Type
                        {/* <p className="error">{this.validatePrintType()}</p> */}
                    </label>
                    <select name="printType" id="printType">
                        <option value="all">All volume content types</option>
                        <option value="books">Just books</option>
                        <option value="magazines">Just magazines</option>
                    </select>

                    <label>Book Type</label>
                    <select name="bookType" id="bookType">
                        <option value="ebooks">All Google eBooks</option>
                        <option value="free-ebooks">Free Google eBooks</option>
                        <option value="full">Public can view entire volume text</option>
                        <option value="paid-ebooks">Google eBooks with a price</option>
                        <option value="partial">Public able to see parts of text</option>
                    </select>
                </form>
            </div >
        );
    }


}

export default Search;