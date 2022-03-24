import React from 'react';
import Navbar from './components/Navbar';
import Book from './components/Book';

class App extends React.Component {
  render() {
    return (
      <div className="nav">
        <Navbar />
        <Book />
      </div>
    );
  }
}

export default App;
