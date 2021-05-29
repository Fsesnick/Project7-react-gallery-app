
import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => (
    <nav className="main-nav">
    <ul>
      <li><NavLink to='/search/clouds'>Clouds</NavLink></li>
      <li><NavLink to='/search/garden'>Garden</NavLink></li>
      <li><NavLink to='/search/sunset'>Sunset</NavLink></li>
    </ul>
  </nav>
)

export default Nav;