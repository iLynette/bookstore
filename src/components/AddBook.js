import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newBook = {
      id,
      title,
      author,
      item_id: id,
      category: 'Gonga mguu',
    };
    dispatch(addBook(newBook));
    setAuthor('');
    setTitle('');
  };

  return (
    <div className="add">
      <h3>ADD NEW BOOK</h3>
      <form className="add" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book Title" className="bTitle" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" name="author" placeholder="Book Author" className="bAuthor" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <input type="submit" value="ADD BOOK" className="buttn" />
      </form>
    </div>
  );
};

export default AddBook;
