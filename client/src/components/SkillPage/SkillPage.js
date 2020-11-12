import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core';



function Skillpage(props) {
    console.log(props)
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
    const {
        id,
        name,
        skill_tip1,
        skill_tip2,
        skill_tip3,
        skill_resource1,
        skill_resource2,
        skill_resource3,
    } = props.props
    console.log(skill_tip1)

    return (
        <>
        <div className={classes.container}>
        <div >

            <h1 className={classes.semiContainer}>Words of wisdom</h1>
                <ul >
                    <li>{`${skill_tip1}`}</li>
                    <li>{`${skill_tip2}`}</li>
                    <li>{`${skill_tip3}`}</li>
                </ul>
            </div>
        <div>
            <h1>Resources</h1>
            <ul>
                <li>{`${skill_resource1}`}</li>
                <li>{`${skill_resource2}`}</li>
                <li>{`${skill_resource3}`}</li>
            </ul>
        </div>
        </div>

        </>
    );
}
export default Skillpage;
