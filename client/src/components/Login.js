import React,{useState} from 'react';
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/AuthActions";

function Login(props) {
    const [email, setEmail] = useState('ian@aa.io');
    const [password, setPassword] = useState('password');
    console.log(password)
    const dispatch = useDispatch()



    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(login(email,password))
    }
    const handleChangePassword = (e) =>{
         setPassword(e.target.value)
    }
    const handleChangeEmail = (e) =>{
        setEmail(e.target.value)
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" value={'ian@aa.io'} onChange={handleChangeEmail}></input>
            <label>Password</label>
            <input type='password' value={'password'} onChange={handleChangePassword}></input>
            <button type='submit'>Submit</button>
        </form>

        </>
    );
}
export default Login;
