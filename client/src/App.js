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
import SkillForm from './components/SkillForm/SkillForm'
import SignUp from "./components/Auth/SignUp";
import { setUser } from "./redux/actions/AuthActions";
import Cookies from "js-cookie";
import Footer from "./components/footer/footer";

function App() {
    const dispatch = useDispatch();
    const skills = useSelector((state) => state.skills.skills);
    const auth = useSelector((state) => state.auth);
    useEffect(()=>{
        if(auth.id){
            const generateSession = async () => {
                const res = await fetch("/api/session/token/refresh", {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'access': Cookies.get("access_token_cookie")
                    },
                })
                if (res.ok) {
                    const data = await res.json()
                    dispatch(setUser(data))
                }
            }
            generateSession()
        }
    }
    ,[auth.id, dispatch])


    useEffect(()=>{
        dispatch(loadSkillsThunk());
    }, [auth,dispatch])

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
            <Route path="/signup">
                <SignUp />
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
            <Route path={`/skills/none`}>
                <SkillForm />
            </Route>
            <Route path="/">
                <Home />
            </Route>

        </Switch>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
