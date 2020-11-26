import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/AuthActions";
import { makeStyles } from "@material-ui/core";
import { useHistory } from 'react-router-dom';



function Login(props) {
    const [email, setEmail] = useState('james@james.com');
    const [password, setPassword] = useState('password');
    console.log(password)
    const dispatch = useDispatch()
    const history = useHistory();
    const auth = useSelector((state) => state.auth.id)
    const useStyles = makeStyles({
        container: {
            display: 'grid',
            gridTemplateColumns:'1fr 2fr 1fr',
            height: '820px',
            marginTop: '10rem',

        },
        loginDiv: {
            gridColumnStart: '2',
            border: ' solid black',
            display: 'flex',
            justifyContent: 'center',
            height:'15rem',
            borderRadius: '5px'
        },
        form: {
            fontSize: '24px'
        },
        email: {
            gridRowStart: '2',
            width: '200px',
            height: '25px',
            fontSize: '16px',
            borderRadius: '5px'
        },
        password: {
            width: '200px',
            height: '25px',
            fontSize: '16px',
            borderRadius: '5px'

        },
        submit: {
            width: '100px',
            height: '25px',
            backgroundColor: 'white',
            borderRadius: '5px'
        },
        centerMe: {
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '10px',
        }
    })

    const classes = useStyles();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }
    const handleSubmitDemo = (e) => {
        e.preventDefault();
        dispatch(login('james@james.com', 'password'))
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    if (auth) {

        history.push('/profile')
    }
    return (
        <>
            <div className={classes.container}>

                <div className={classes.loginDiv}>
                    <form onSubmit={handleSubmit} className={classes.form}>
                        <div>
                            <h3>Welcome To Skillfully Please Login</h3>
                        </div>
                        <div className={classes.centerMe}>
                            <input type="email" placeholder={'email'} className={classes.email} onChange={handleChangeEmail}></input>
                        </div>
                        <div className={classes.centerMe}>
                            <input type='password' placeholder={'password'} className={classes.password} onChange={handleChangePassword}></input>
                        </div>
                        <div className={classes.centerMe}>
                            <button type='submit' className={classes.submit}>Submit</button>
                            <button className={classes.submit} onClick={() => history.push('/signup')}>SignUp</button>
                            <button className={classes.submit} onClick={handleSubmitDemo}>Demo</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Login;
