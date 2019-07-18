import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.QueryChange = this.QueryChange.bind(this);
  }

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
      </div>
    );
  }
}

export default SearchPage;
