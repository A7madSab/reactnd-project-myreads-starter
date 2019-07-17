import React from "react";
import Book from "./Book";

const List = props => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.searchedBooks.length > 0 &&
          props.searchedBooks.map((book, index) => (
            <Book key={index} book={book} onUpdateShelf={props.updateShelf} />
          ))}
      </ol>
    </div>
  );
};

export default List;
