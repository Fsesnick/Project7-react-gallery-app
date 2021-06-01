
import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 *  @returns A Nav component for the apps navigation links.
 */
const Nav = () => (
    <nav className="main-nav">
    <ul>
      <li><NavLink to='/clouds'>Clouds</NavLink></li>
      <li><NavLink to='/garden'>Garden</NavLink></li>
      <li><NavLink to='/sunset'>Sunset</NavLink></li>
    </ul>
  </nav>
)

export default Nav;