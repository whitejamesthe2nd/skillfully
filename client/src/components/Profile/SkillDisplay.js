import React from 'react';
import { makeStyles } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

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
        time,
        id

    } = props



    const classes = useStyles()
        return (
            <div className={classes.content}>
                <NavLink to={`/skills/${id}`} activeclass='active'><span>{`${skill}`}:</span></NavLink>
                <span> {`${time} hrs`}</span>
            </div>
        );
}

export default SkillDisplay;
