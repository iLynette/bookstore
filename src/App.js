import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import BooksPage from './components/BooksPage';
import Categories from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <div className="nav">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<BooksPage />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    );
  }
}

export default App;