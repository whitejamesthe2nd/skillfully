import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { createSkillThunk } from "../../redux/actions/SkillActions";
import { useHistory } from 'react-router-dom';


const SkillForm = () => {
    const useStyles = makeStyles({
        container: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '1fr 520px',
        },
        form: {
            gridColumnStart: '2',
            display: 'flex',
            flexDirection: 'column'
        },
        header: {
            display: 'flex',
            justifyContent: 'center',
        },
        guide:{

        },
        formElement:{
            margin: '5px',


        },
    })


    const [name, setName] = useState();
    const [tip1, setTip1] = useState();
    const [tip2, setTip2] = useState();
    const [tip3, setTip3] = useState();
    const [resourece1, setResource1] = useState();
    const [resourece2, setResource2] = useState();
    const [resourece3, setResource3] = useState();
    const dispatch = useDispatch();
    const classes = useStyles()
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        let skill = {
            name,
            skill_tip1: tip1,
            skill_tip2: tip2,
            skill_tip3: tip3,
            skill_resource1: resourece1,
            skill_resource2: resourece2,
            skill_resource3: resourece3,
        }
        dispatch(createSkillThunk(skill));
        history.push('/profile')
    }

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <h1 className={classes.header}> Create a Skill Guide</h1>
                <div className={classes.guide}><p> This is meant to be a guide to help you study and as such please use the tips to create a way to keep you on track
                    and the resources are links to anything that you may need for studying on any given day. I would recomend that for each tip a resource may be afflaited
                    for example programming you may reccomend as a tip to study a certain stack of data structures and algorithim's problems please provide a link to that stack in the resources</p>
                </div>
                <input type='text' placeholder='Skill Name' onChange={(e) => setName(e.target.value)} className={classes.formElement}></input>
                <textarea placeholder='Skill Tip 1' onChange={(e) => setTip1(e.target.value)} className={classes.formElement}></textarea>
                <textarea placeholder='Skill Tip 2' onChange={(e) => setTip2(e.target.value)} className={classes.formElement}></textarea>
                <textarea placeholder='Skill Tip 3' onChange={(e) => setTip3(e.target.value)} className={classes.formElement}></textarea>
                <input type='text' placeholder='Skill Resource 1' onChange={(e) => setResource1(e.target.value)} className={classes.formElement}></input>
                <input type='text' placeholder='Skill Resource 2' onChange={(e) => setResource2(e.target.value)} className={classes.formElement}></input>
                <input type='text' placeholder='Skill Resource 3' onChange={(e) => setResource3(e.target.value)} className={classes.formElement}></input>
                <button type='submit'>Create</button>
            </form>
        </div>
    );
}

export default SkillForm;
