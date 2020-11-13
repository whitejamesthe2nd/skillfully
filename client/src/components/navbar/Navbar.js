import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from "@material-ui/core";

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
            color:"black",
            fontSize:"17px",
            textDecoration: 'none'
        },
        btn:{
            borderRadius:'10px',
            width: '100px',
            height:'50px',
            marginRight: '30px'
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
        }

    })

    const classes = useStyles();
  return (
        <nav>
            <div className={classes.header}>
                <h3 className={classes.logo}>Skillfully</h3>
                <div className={classes.btnBox}>
                    <button className={classes.btn}><NavLink to="/login" className={classes.link} activeclass="active">Login </NavLink></button>
                    <button className={classes.btn}><NavLink to="/pomodoro" className={classes.link} activeclass="active">Pomodoro </NavLink></button>
                    <button className={classes.btn}><NavLink to="/profile" className={classes.link} activeclass="active">Profile </NavLink></button>
                    <button className={classes.btn}><NavLink to="/" className={classes.link} activeclass="active">Home </NavLink></button>
                </div>
            </div>
        </nav>
  );
}

export default Navbar;
