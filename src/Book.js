import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateShelf: PropTypes.func.isRequired
  };
  state = {
    shelf: this.props.book.shelf
  };

  handleUpdating = (evt, book) => {
    // console.log("handleUpdating", evt, book);
    this.props.onUpdateShelf(book, evt.target.value);
    this.setState({ shelf: evt.target.value });
  };

  render() {
    const { book } = this.props;
    // console.log(book.imageLinks.thumbnail);

    return (
      <div className="book">
        <div className="book-top">
          {book.imageLinks && (
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${book.imageLinks.thumbnail})`
              }}
            />
          )}
          <div className="book-shelf-changer">
            <select
              defaultValue={this.state.shelf}
              onChange={evt => this.handleUpdating(evt, book)}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option hidden="hidden">hidden</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
