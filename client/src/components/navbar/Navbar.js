import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
        <nav>
            <div>
                <span><NavLink to="/pomodoro" activeclass="active">Pomodoro</NavLink></span>
                <span><NavLink to="/login" activeclass="active">Login</NavLink></span>
                <span><NavLink to="/" activeclass="active">Home</NavLink></span>
            </div>
        </nav>
  );
}

export default Navbar;
