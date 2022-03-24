import React from 'react';

export default class Nav extends React.Component {
  render() {
    return (
        <nav className="navBar">
          <h3>Bookstore CMS</h3>
          <div className="navItems">
            <ul className="navMenu">
              <li>Books</li>
              <li>Categories</li>
            </ul>
          </div>
        </nav>
    );
  }
}