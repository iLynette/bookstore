import React from 'react';

export default class Book extends React.Component {
  render() {
    return (
      <div className="bookItems">
          <div className="bookDetails">
              <span className="details">Action</span>
              <h3 className="title">the hunger games</h3>
              <span className="name">Suzanne Collings</span>
              <div className="actions">
                <ul className="action">
                    <li>Comments</li>
                    <li>Remove</li>
                    <li>Edit</li>
                </ul>
              </div>
          </div>
          <div className="progress">
              <span>64%</span>
              <span>Completed</span>
          </div>
          <div className="chapter">
              <span>CURRENT CHAPTER</span>
              <h3>Chapter 17</h3>
              <button type="button">Update progress</button>
          </div>
      </div>
    );
  }
}
