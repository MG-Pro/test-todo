import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to='/' className="navbar-brand">ToDo</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to='/' className="nav-link" activeClassName='active'>Task list</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to='/about' className="nav-link" activeClassName='active'>About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
};

export default Header;
