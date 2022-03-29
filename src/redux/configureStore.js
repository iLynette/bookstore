import { combineReducers, createStore } from 'redux';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  booksReducer,
  categoriesReducer,
});

const store = createStore(reducer);

export default store;
