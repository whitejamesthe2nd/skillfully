import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core';
import { deleteSkillThunk } from "../../redux/actions/SkillActions";
import {useHistory } from "react-router-dom";
import galaxy from '../Pomodoro/galaxy1.jpg';


function Skillpage(props) {
    console.log(props)
    const theme = useSelector((state) => state.auth.theme);
    let pageTheme = '';
    let color = '';
    let backgroundColor = '';
    let boxShadow = '';
    if (theme === 'galaxy') {
        pageTheme = galaxy;
        color = 'white';
        backgroundColor = 'black'
        boxShadow = 'purple 15px 15px 20px'
    }
    const useStyles = makeStyles({
        containerRoot: {
            display: 'grid',
            justifyContent: 'space-around',
            height: '820px',
            backgroundImage: `url(${pageTheme})`,
            color: `${color}`,
            backgroundSize: '100% 100%'

        },
        container: {
            display: 'grid',
            justifyContent: 'space-around',
            backgroundColor: `${backgroundColor}`,
            color: `${color}`,
            borderRadius: '10px',
            // fontWeight: '600',
            fontSize: '16px',
            boxShadow: `${boxShadow}`,
            height:'600px',
            margin:'30px',
        },
        semiContainer: {
            width: '700px',
            height: '100px',
            paddingBottom:'30px',
        },
        h1: {
            display: 'flex',
            justifyContent: 'center'
            // alignSelf:'center'
        },
        btn: {
            display: 'flex',
            justifyContent: 'center',
            height: '30px',
            width: '200px',
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
        console.log(id)
        dispatch(deleteSkillThunk(id));
        history.push('/profile')
    }

    return (
        <>
            <div className={classes.containerRoot}>
                <div className={classes.container}>

                    <div className={classes.semiContainer}>
                        <h1 className={classes.h1}>{`${name}`}</h1>
                        <h1 >Words of wisdom</h1>
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
                        <button className={classes.btn} onClick={handleClick}>Delete This Skill</button>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Skillpage;
