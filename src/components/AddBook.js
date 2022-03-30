import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [inputBook, setInput] = useState({
    title: '',
    author: '',
  });
  const onChange = (e) => {
    setInput({
      ...inputBook,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      title: inputBook.title,
      author: inputBook.author,
    };
    dispatch(addBook(newBook));
    setInput({
      title: '',
      author: '',
    });
  };

  return (
    <div className="add">
      <h3>ADD NEW BOOK</h3>
      <form className="add" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book Title" className="bTitle" value={inputBook.title} onChange={onChange} required />
        <input type="text" name="author" placeholder="Book Author" className="bAuthor" value={inputBook.author} onChange={onChange} required />
        <input type="submit" value="ADD BOOK" className="buttn" />
      </form>
    </div>
  );
};

export default AddBook;
