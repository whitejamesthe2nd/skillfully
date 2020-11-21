import React from 'react';
import { makeStyles } from "@material-ui/core";


function Footer() {

    const useStyles = makeStyles({
        header: {
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'black',
            height: "50px",
            paddingBottom: '5px',
            paddingTop: '5px'
        },
        link: {
            color: "white",
            fontSize: "24px",
            fontWeight: '600',
            textDecoration: 'none',
            paddingRight: '20px'
        },
        btnBox: {
            gridColumnStart: '2',
            display: 'flex',
            flexDirection: 'row-reverse',
            color: 'white'

        },
        logo: {
            gridColumnStart: '1',
            color: 'white',
            fontSize: '26px',
            paddingLeft: '30px'
        },

    })

    const classes = useStyles();


    return (
        <nav>
            <div className={classes.header}>
                <div className={classes.btnBox}>
                    <span className={classes.link}><a className={classes.link} href='https://github.com/whitejamesthe2nd'>Checkout my github</a></span>
                </div>
            </div>
        </nav>
    );
}

export default Footer;
