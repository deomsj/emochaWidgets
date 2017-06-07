import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Navigation Menu
const NavBar = () => (
  <nav className="light-blue lighten-1" role="navigation">
    <div className="nav-wrapper container">
      <NavLink to="/" className="brand-logo">Widgets</NavLink>
      <ul className="right">
        <li>
          <NavLink
            exact to="/"
            activeClassName="activeButton">
              Search
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/orders"
            activeClassName="activeButton">
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            exact to="/admin"
            activeClassName="activeButton">
            Admin
          </NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;