import React from 'react';
import { makeStyles } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

const SkillDisplay = (props) =>{

    const {
        skill,
        time,
        id,
        theme

    } = props

    let color = 'black';
    if(theme === 'galaxy'){
        color = 'white';
    }
    const useStyles = makeStyles({
        content:{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '20px',
            marginLeft:'150px',
            marginRight:'150px',
        },
        link:{
            color: `${color}`,
        }

    })





    const classes = useStyles()
        return (
            <div className={classes.content}>
                <NavLink to={`/skills/${id}`} className={classes.link} activeclass='active'><span>{`${skill}`}:</span></NavLink>
                <span> {`${time} hrs`}</span>
            </div>
        );
}

export default SkillDisplay;
