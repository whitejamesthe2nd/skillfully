import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Login from "./components/Login";
import UserList from './components/UsersList';
import Pomodoro from "./components/Pomodoro/Pomodoro";

function App() {

  return (
    <BrowserRouter>
        <nav>
            <ul>
                <li><NavLink to="/pomodoro" activeclass="active">Pomodoro</NavLink></li>
                <li><NavLink to="/login" activeclass="active">Login</NavLink></li>
                <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                {/* <li><NavLink to="/users" activeclass="active">Users</NavLink></li> */}
            </ul>
        </nav>
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
