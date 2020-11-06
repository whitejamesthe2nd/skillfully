import React from 'react';
import { makeStyles } from "@material-ui/core";

const SkillDisplay = (props) =>{
    const useStyles = makeStyles({
        content:{
            display: 'flex',
            justifyContent: 'space-around',
            fontSize: '20px',
        }

    })


    const {
        skill,
        time

    } = props



    const classes = useStyles()
        return (
            <div className={classes.content}>
                <span>{`${skill}`}:</span>
                <span> {`${time}`}</span>
            </div>
        );
}

export default SkillDisplay;
