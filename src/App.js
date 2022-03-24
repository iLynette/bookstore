import React from 'react';
import Navbar from './components/Navbar';
import Book from './components/Book';
import AddBook from './components/AddBook';

class App extends React.Component {
  render() {
    return (
      <div className="nav">
        <Navbar />
        <Book />
        <AddBook />
      </div>
    );
  }
}

export default App;
