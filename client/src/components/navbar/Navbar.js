import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";

function Navbar() {

    const useStyles = makeStyles({
        header:{
            display:'flex',
            justifyContent:'space-around',
            flexDirection: 'row-reverse',
            backgroundColor: 'black',
            height:"50px",
            paddingBottom: '5px',
            paddingTop: '5px'
        },
        link:{
            color:"black",
            fontSize:"17px",
            textDecoration: 'none'
        },
        btn:{
            borderRadius:'10px',
            width: '100px'
        }
    })

    const classes = useStyles();
  return (
        <nav>
            <div className={classes.header}>
                <button className={classes.btn}><NavLink to="/login" className={classes.link} activeclass="active">Login </NavLink></button>
                <button className={classes.btn}><NavLink to="/pomodoro" className={classes.link} activeclass="active">Pomodoro </NavLink></button>
                <button className={classes.btn}><NavLink to="/profile" className={classes.link} activeclass="active">Profile </NavLink></button>
                <button className={classes.btn}><NavLink to="/" className={classes.link} activeclass="active">Home </NavLink></button>
            </div>
        </nav>
  );
}

export default Navbar;
