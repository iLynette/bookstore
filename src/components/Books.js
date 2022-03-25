import React from 'react';
import AddBook from './AddBook';
import Book from './Book';

class Books extends React.Component {
  render() {
    return (
      <div className="allBooks">
          <Book />
          <Book />
          <Book />
          <AddBook />
      </div>
    );
  }
}

export default Books;