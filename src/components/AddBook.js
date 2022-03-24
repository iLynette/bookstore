import React from 'react';

export default class AddBook extends React.Component {
  render() {
    return (
      <div>
          <h3>ADD NEW BOOK</h3>
          <form className="add">
              <input type="text" placeholder="Book Title"></input>
              <select key="bookCategory">
                  <option value="Category">Category</option>
                  <option value="Action">Action</option>
                  <option value="fiction">Science Fiction</option>
                  <option value="Economy">Economy</option>
              </select>
              <input type="submit" value="ADD BOOK"></input>
          </form>
      </div>
    );
  }
}
