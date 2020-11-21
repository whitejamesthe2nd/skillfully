import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";
import { logout } from "../../redux/actions/AuthActions";
function Navbar() {

    const useStyles = makeStyles({
        header:{
            display:'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr',
            backgroundColor: 'black',
            height:"50px",
            paddingBottom: '5px',
            paddingTop: '5px'
        },
        link:{
            color:"white",
            fontSize:"24px",
            fontWeight: '600',
            textDecoration: 'none',
            paddingRight: '20px'
        },
        btnBox:{
            gridColumnStart:'2',
            display: 'flex',
            flexDirection:'row-reverse',

        },
        logo:{
            gridColumnStart: '1',
            color:'white',
            fontSize:'26px',
            paddingLeft:'30px'
        },
    })
    const dispatch = useDispatch();
    const auth = useSelector((state)=> state.auth)
    const classes = useStyles();
  return (
        <nav>
            <div className={classes.header}>
                <div className={classes.logoBox}>
                    <h3 className={classes.logo}>Skillfully</h3>
                </div>
                <div className={classes.btnBox}>
                    {auth.id ? <NavLink to='/' className={classes.link} onClick={()=> dispatch(logout())}>Logout </NavLink>:
                    <NavLink to="/login" className={classes.link} activeclass="active">Login </NavLink>}
                    <NavLink to="/pomodoro" className={classes.link} activeclass="active">Pomodoro </NavLink>
                    <NavLink to="/profile" className={classes.link} activeclass="active">Profile </NavLink>
                    <NavLink to="/" className={classes.link} activeclass="active">Home</NavLink>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;
