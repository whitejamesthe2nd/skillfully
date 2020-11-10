import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core';



function Skillpage(props) {
    const useStyles = makeStyles({
        container:{
            display: 'grid',
            justifyContent: 'space-around'
        },
        semiContainer:{
            display: 'flex',
            justifyContent:'center'
        }
    })

    const classes = useStyles();

    return (
        <>
        <div className={classes.container}>
        <div >

            <h1 className={classes.semiContainer}>Words of wisdom</h1>
                <ul >
                    <li >Tip 1</li>
                    <li>Tip 2</li>
                    <li>Tip 3</li>
                </ul>
            </div>
        <div>
            <h1>Resources</h1>
            <ul>
                <li>Resource 1</li>
                <li>Resource 2</li>
                <li>Resource 3</li>
            </ul>
        </div>
        </div>

        </>
    );
}
export default Skillpage;
