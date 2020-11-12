import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./components/Login";
import Pomodoro from "./components/Pomodoro/Pomodoro";
import  Navbar  from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import SkillPage from "./components/SkillPage/SkillPage";
import { loadSkillsThunk } from "./redux/actions/SkillActions";
import {useDispatch, useSelector} from "react-redux";


function App() {
    const dispatch = useDispatch();
    const skills = useSelector((state) => state.skills.skills);
    const auth = useSelector((state) => state.auth);


    useEffect(()=>{

        dispatch(loadSkillsThunk());
    }, [auth])

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
            {skills ? skills.map((skill, id) => {
                return(
                    <Route key={id} path={`/skills/${skill.id}`}>
                        <SkillPage props={skill} />
                    </Route>
                    )
                }
                ): null}
            <Route path="/">
                <Home />
            </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
