import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import SkillDisplay from '../Profile/SkillDisplay';

const SkillForm = () => {
    const useStyles = makeStyles({
        container:{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr'

        },
        form:{
            gridColumnStart:'2',
            display: 'flex',
            flexDirection: 'column'
        }
    })
    const [theme, setTheme] = useState();
    const [focus, setFocus] = useState('None');
    const auth = useSelector((state) => state.auth)
    const skillList = useSelector((state) => state.skills.skills)
    const dispatch = useDispatch();
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <form className={classes.form}>
                <h1> Create a Skill Guide</h1>
                <input type='text' placeholder= 'Skill Name'></input>
                <input type='text' placeholder= 'Skill Resource 1'></input>
                <input type='text' placeholder= 'Skill Resource 2'></input>
                <input type='text' placeholder= 'Skill Resource 3'></input>
                <textarea placeholder= 'Skill Tip 1'></textarea>
                <textarea placeholder= 'Skill Tip 2'></textarea>
                <textarea placeholder= 'Skill Tip 3'></textarea>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}

export default SkillForm;
