import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Navbar from './components/Navbar';
import BooksPage from './components/BooksPage';
import Categories from './components/Categories';

const App = () => (
  <Provider store={store}>
    <div className="nav">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BooksPage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  </Provider>
);

export default App;
