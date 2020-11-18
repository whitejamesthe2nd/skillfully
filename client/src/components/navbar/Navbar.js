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
        },
        btn:{
            height: '25px',
            color: 'white',
            backgroundColor: 'black',
            border: '0px',
            fontSize: '24px',
            fontWeight: '600',
            textDecoration: 'none',
        }

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
                    {auth.id ? <button className={classes.btn}onClick={()=> dispatch(logout())}>Logout </button>:
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
