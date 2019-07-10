import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import BooksList from "./BooksList";
import SearchPage from "./SearchPage";

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
      searchedBooks: this.state.books.filter(book => {
        return (
          book.title.toLowerCase().includes(query.toLowerCase()) ||
          book.authors
            .join()
            .toLowerCase()
            .includes(query.toLowerCase())
        );
      }),
      searchString: query
    });
  }

  // Will fetch all books before it mounts on the dom
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books, searchedBooks: books });
    });
  }

  // fetch all books function
  // FetchAllBooks = () => {

  // };

  // update book shelf
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(res => {
      this.FetchAllBooks();
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
                searchedBooks={this.state.searchedBooks}
                updateShelf={this.updateShelf}
                handelSearchString={this.handelSearchString}
                searchString={this.state.searchString}
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
