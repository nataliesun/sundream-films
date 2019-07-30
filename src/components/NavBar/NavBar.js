import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

class NavBar extends Component {


  render() {
    return (
      <nav className="NavBar">
        <NavLink to="/">
          <h2>Sundream Films</h2>
        </NavLink>
        <ul>
          <NavLink exact to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/reviews">
            <li>Reviews</li>
          </NavLink>
          <NavLink to="/book-online">
            <li>Book Online</li>
          </NavLink>
          <NavLink to="/gallery">
            <li>Gallery</li>
          </NavLink>
        </ul>
      </nav>
    );
  }
}

export default NavBar;