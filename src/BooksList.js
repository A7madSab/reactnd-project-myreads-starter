import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

class BooksList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  render() {
    // console.log("bookList props", this.props);

    const { books } = this.props;

    let currentlyReadingBooks = books.filter(
      book => book.shelf === "currentlyReading"
    );

    let wantToReadBooks = books.filter(book => book.shelf === "wantToRead");
    let readBooks = books.filter(book => book.shelf === "read");

    // console.log("currentlyReadingBooks", currentlyReadingBooks);
    // console.log("wantToReadBooks", wantToReadBooks);
    // console.log("readBooks", readBooks);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReadingBooks.map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        onUpdateShelf={this.props.updateShelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {wantToReadBooks.map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        onUpdateShelf={this.props.updateShelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {readBooks.map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        onUpdateShelf={this.props.updateShelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksList;
