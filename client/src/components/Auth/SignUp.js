import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { signup } from "../../redux/actions/AuthActions";
import { Redirect } from 'react-router-dom'


function SignUp(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userName, setUserName] = useState();
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
    const currentId = useSelector(state => state.auth.id)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(userName, email, password ))
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    if(currentId) return <Redirect to="/profile"/>;
    return (
        <>
            <div className={classes.loginDiv}>
                <form onSubmit={handleSubmit} className={classes.form}>
                <div>
                <h3>Welcome To Skillfully Please Login</h3>
                </div>
                    <div >
                        <input type='text' className={classes.email} placeholder={'User name'} onChange={(e)=> setUserName(e.target.value)}></input>
                    </div>
                    <div >
                        <input type="email" placeholder={'Email'} className={classes.email} onChange={handleChangeEmail}></input>
                    </div>
                    <div >
                        <input type='password' placeholder={'password'} className={classes.password} onChange={handleChangePassword}></input>
                    </div>
                    <button type='submit' className={classes.submit}>Sign Up</button>
                </form>
            </div>

        </>
    );
}
export default SignUp;
