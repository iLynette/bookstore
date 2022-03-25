import React from 'react';

export default class AddBook extends React.Component {
  render() {
    return (
      <div className="add">
          <h3>ADD NEW BOOK</h3>
          <form className="add">
              <input type="text" placeholder="Book Title" className="bTitle"></input>
              <select key="bookCategory" className="field">
                  <option value="Category">Category</option>
                  <option value="Action">Action</option>
                  <option value="fiction">Science Fiction</option>
                  <option value="Economy">Economy</option>
              </select>
              <input type="submit" value="ADD BOOK" className="buttn"></input>
          </form>
      </div>
    );
  }
}
