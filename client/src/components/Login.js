import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/AuthActions";
import { makeStyles } from "@material-ui/core";



function Login(props) {
    const [email, setEmail] = useState('ian@aa.io');
    const [password, setPassword] = useState('password');
    console.log(password)
    const dispatch = useDispatch()

    const useStyles = makeStyles({
        loginDiv: {
            display:'flex',
            justifyContent:'center'
        },
        form:{
            dipslay: 'grid',
            gridTemplateRows: '1fr 1fr 1fr',
            fontSize: '24px'
        },
        email:{
            gridRowStart: '2',
            width:'200px',
            height: '25px',
            fontSize: '16px',
            borderRadius:'5px'
        },
        password:{
            width:'200px',
            height: '25px',
            fontSize: '16px',
            borderRadius:'5px'

        },
        submit:{
            width: '100px',
            height: '25px',
            backgroundColor:'white',
            borderRadius:'5px'
        }
    })

    const classes = useStyles();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    return (
        <>
            <div className={classes.loginDiv}>
                <form onSubmit={handleSubmit} className={classes.form}>
                <div>
                <h3>Welcome To Skillfully Please Login</h3>
                </div>
                    <div >
                        <input type="email" value={'ian@aa.io'} className={classes.email} onChange={handleChangeEmail}></input>
                    </div>
                    <div >
                        <input type='password' value={'password'} className={classes.password} onChange={handleChangePassword}></input>
                    </div>
                    <button type='submit' className={classes.submit}>Submit</button>
                </form>
            </div>

        </>
    );
}
export default Login;
