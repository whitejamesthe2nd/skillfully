import React from 'react';
import { useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core';
import { deleteSkillThunk } from "../../redux/actions/SkillActions";
import { NavLink, useHistory } from "react-router-dom";


function Skillpage(props) {
    console.log(props)
    const useStyles = makeStyles({
        container: {
            display: 'grid',
            justifyContent: 'space-around'
        },
        semiContainer: {
            display: 'flex',
            justifyContent: 'center'
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

    const dispatch = useDispatch()
    const history = useHistory()
    const handleClick = () => {
        dispatch(deleteSkillThunk(id));
        history.push('/profile')
    }

    return (
        <>
            <div className={classes.container}>
                <div >
                    <h1 >{`${name}`}</h1>
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
                        <li><a href={`${skill_resource1}`}>{`${skill_resource1}`}</a></li>
                        <li><a href={`${skill_resource2}`}>{`${skill_resource2}`}</a></li>
                        <li><a href={`${skill_resource3}`}>{`${skill_resource3}`}</a></li>
                    </ul>
                </div>
                <button onClick={handleClick}>Delete This Skill</button>
            </div>

        </>
    );
}
export default Skillpage;
