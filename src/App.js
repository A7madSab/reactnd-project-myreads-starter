import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksList from "./BooksList";
import SearchPage from "./SearchPage";

class App extends React.Component {
  // initial state of the app
  state = {
    books: [],
    searchedBooks: [],

    showSearchPage: false
  };

  // Will fetch all books before it mounts on the dom
  componentDidMount() {
    this.FetchAllBooks();
  }

  // fetch all books function
  FetchAllBooks = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  };

  // update book shelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      this.getAllBooks();
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
                userBooks={this.state.books}
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
