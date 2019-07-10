import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import PropTypes from "prop-types";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.QueryChange = this.QueryChange.bind(this);
  }
  static propTypes = {
    searchedBooks: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  QueryChange = query => {
    this.props.handelSearchString(query);
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.props.searchString}
              onChange={event => this.QueryChange(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.props.searchedBooks.map((book, index) => (
              <Book
                key={index}
                book={book}
                onUpdateShelf={this.props.updateShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
