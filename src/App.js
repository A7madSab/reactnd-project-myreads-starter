import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksList from "./BooksList";
import SearchPage from "./SearchPage";
import List from "./List";

class App extends React.Component {
  // initial state of the app
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchedBooks: [],
      searchString: ""
    };
    this.handelSearchString = this.handelSearchString.bind(this);
    this.updateShelf = this.updateShelf.bind(this);
  }

  handelSearchString(query) {
    this.setState({
      searchString: query
    });
    BooksAPI.search(query, 20).then(res => {
      this.setState({ searchedBooks: res });
    });
  }

  // Will fetch all books before it mounts on the dom
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  // update book shelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      BooksAPI.getAll().then(newBook => {
        return this.setState({
          books: newBook
        });
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <div>
              <SearchPage
                handelSearchString={this.handelSearchString}
                searchString={this.state.searchString}
              />
              <List
                searchedBooks={this.state.searchedBooks}
                updateShelf={this.updateShelf}
              />
            </div>
          )}
        />

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <BooksList
                books={this.state.books}
                updateShelf={this.updateShelf}
              />
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
