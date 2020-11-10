import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import  Navbar  from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import SkillPage from "./components/SkillPage/SkillPage";
function App() {

  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/pomodoro">
                <Pomodoro />
            </Route>

            <Route path="/login">
                <Login />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            {/* <Route key={id} path={`event-details/${event.id}`}>
                    <EventDetails />
                </Route> */}
                <Route path={`/skills/1`}>
                    <SkillPage />
                </Route>
            <Route path="/">
                <Home />
            </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
