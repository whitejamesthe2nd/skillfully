import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  return (
        <nav>
            <div>
                <button><NavLink to="/pomodoro" activeclass="active">Pomodoro </NavLink></button>
                <button><NavLink to="/login" activeclass="active">Login </NavLink></button>
                <button><NavLink to="/profile" activeclass="active">Profile </NavLink></button>
                <button><NavLink to="/" activeclass="active">Home </NavLink></button>
            </div>
        </nav>
  );
}

export default Navbar;
