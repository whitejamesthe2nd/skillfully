import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from "./components/Login";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import  Navbar  from "./components/navbar/Navbar";
function App() {

  return (
    <BrowserRouter>

        {/* <nav>
            <ul>
                <li><NavLink to="/pomodoro" activeclass="active">Pomodoro</NavLink></li>
                <li><NavLink to="/login" activeclass="active">Login</NavLink></li>
                <li><NavLink to="/" activeclass="active">Home</NavLink></li>
            </ul>
        </nav> */}
        <Navbar />
        <Switch>
            <Route path="/pomodoro">
                <Pomodoro />
            </Route>

            <Route path="/login">
                <Login />
            </Route>
            <Route path="/">
                <h1> You made it home </h1>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
