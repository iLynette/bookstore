import React from 'react';

const AddBook = () => (
  <div className="add">
    <h3>ADD NEW BOOK</h3>
    <form className="add">
      <input type="text" placeholder="Book Title" className="bTitle" />
      <select key="bookCategory" className="field">
        <option value="Category">Category</option>
        <option value="Action">Action</option>
        <option value="fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
      </select>
      <input type="submit" value="ADD BOOK" className="buttn" />
    </form>
  </div>
);

export default AddBook;
