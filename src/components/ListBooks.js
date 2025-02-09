import React from "react";
import Bookshelf from "./BookShelf";
import { Link } from "react-router-dom";

class ListBooks extends React.Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          <Bookshelf
            bookShelfTitle="Currently Reading"
            books={this.props.books.currentlyReading}
            onMoveBook={this.props.onMoveBook}
          />
          <Bookshelf
            bookShelfTitle="Want To Read"
            books={this.props.books.wantToRead}
            onMoveBook={this.props.onMoveBook}
          />
          <Bookshelf
            bookShelfTitle="Read"
            books={this.props.books.read}
            onMoveBook={this.props.onMoveBook}
          />
        </div>

        <div className="open-search">
          <Link to={process.env.PUBLIC_URL + "/search"} className="open-search">
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
