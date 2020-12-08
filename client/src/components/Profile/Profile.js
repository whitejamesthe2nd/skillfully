import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import person from "./person.jpg";
import SkillDisplay from "./SkillDisplay";
import { updateFocusThunk, updateUserSkillThunk, updateThemeThunk } from "../../redux/actions/AuthActions";
import { useHistory } from 'react-router-dom';
import galaxy from '../Pomodoro/galaxy1.jpg';


const Profile = () => {

    const [skillName, setSkillName] = useState();
    const [hours, setHours] = useState();
    const auth = useSelector((state) => state.auth)
    const skillList = useSelector((state) => state.skills.skills)
    const dispatch = useDispatch();
    const skills = auth.user_skill;
    const theme = auth.theme;
    const history = useHistory();
    let pageTheme = '';
    let color = 'black';
    let backgroundColor = 'white';
    let boxShadow = '';
    let border = 'solid black';
    if (theme === 'galaxy') {
        pageTheme = galaxy;
        color = 'white';
        backgroundColor = 'black'
        boxShadow = 'purple 15px 15px 20px'
    }
    if(theme === 'night'){
        pageTheme = 'none';
        color = 'white';
        backgroundColor = 'black';
        border= 'solid white';
    }
    console.log(pageTheme)

    const useStyles = makeStyles({
        container: {
            display: 'grid',
            gridTemplateRows: '50px 1fr 45vh',
            gridTemplateColumns: '1fr 2fr 1fr',
            backgroundImage: `url(${pageTheme})`,
            color: `${color}`,
            backgroundSize: '100% 100%',
            backgroundColor: `${backgroundColor}`,
        },
        skill: {
            gridColumnStart: '2',
            color: `${color}`,
            textDecoration:'none'
        },
        start: {
            gridColumnStart: '1',
            gridRowStart: '1'
        },
        label: {
            gridRowStart: '1',
            display: 'flex',
            justifyContent: 'space-around',
            fontSize: '30px',
            paddingLeft: '34px'
        },
        content: {
            border: `${border}`,
            gridColumnStart: '2',
            backgroundColor: `${backgroundColor}`,
            color: `${color}`,
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '18px',
            boxShadow: `${boxShadow}`,
            marginTop: '30px',
            paddingBottom: '30px',
        },
        form: {
            display: 'flex',
            justifyContent: 'center',
        },
        formElement: {
            marginLeft: '150px',
        },
        // avatar panel
        avatarPanel: {
            gridColumnStart: '1',
            gridRowStart: '2',
            marginTop: '6px',
            paddingBottom: '15px',
            backgroundColor: `${backgroundColor}`,
            color: `${color}`,
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '18px',
            boxShadow: `${boxShadow}`,
            border: `${border}`,
            width: ' 20rem',
            height:'20rem',
            display: 'grid',
            gridTemplateRows: '200px 150px',
        },
        image: {
            height: '200px',
            width: '200px',
            paddingLeft: '50px'
        },
        words:{
            paddingRight:'27px',
            display:'grid',
            gridRowStart:'2',
            gridTemplateRows:'30px 30px 30px 30px',
        },
        name: {
            gridRowStart: '1',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
        },
        focus: {
            gridRowStart: '2',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        themeChanger: {
            gridRowStart: '3',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        },
        focusChanger: {
            gridRowStart: '4',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }

    })
    const classes = useStyles()

    const handleChange = (e) => {
        dispatch(updateThemeThunk(e.target.value, auth));
    }

    const handleChangeFocus = (e) => {
        dispatch(updateFocusThunk(e.target.value, auth))

    }
    let options = [<option value={'None'}>None</option>];
    let skillArray = []
    if (skills) {
        skillArray = Object.keys(skills);
        skillArray.map((ele, i) => options.push(<option key={i} value={ele}>{`${ele}`}</option>))
    }

    let userSkills = [];

    if (skillList) {
        for (let key in skills) {
            let id = 'none'
            for (let i = 0; i < skillList.length; i++) {
                if (skillList[i]['name'] === key) {
                    id = skillList[i]['id'];
                }
                else {
                    id = 'none'
                }
            }
            userSkills.push(
                <div className={classes.skill}>
                    <SkillDisplay skill={key} time={skills[key]} id={id} theme={theme} />
                </div>)
        }
    }


    const handleClick = (e) => {
        e.preventDefault();
        auth.user_skill[skillName] = parseInt(hours);
        dispatch(updateUserSkillThunk(auth))
    }

    const auth2 = useSelector((state) => state.auth.id)

    if (!auth2) {
        history.push('/login')
    }

    return (
        <div className={classes.container}>


            <div className={classes.content}>
                <div className={classes.label}>
                    <span>Skill</span>
                    <span>Number of Hours</span>
                </div>
                <div className={classes.content}>
                    {userSkills}
                    <form className={classes.form}>
                        <input type='text' placeholder='Skill Name' onChange={(e) => setSkillName(e.target.value)}></input>
                        <input className={classes.formElement} type='number' placeholder='Hours Completed' onChange={(e) => setHours(e.target.value)}></input>
                        <button onClick={handleClick}>+</button>
                    </form>
                </div>
            </div>
            <div className={classes.avatarPanel}>
                <img src={person} className={classes.image} alt=''></img>
                <div className={classes.words}>
                        <h3 className={classes.name}>{auth.username}</h3>
                        <h3 className={classes.focus}>Focus: {auth.focus}</h3>
                        <form className={classes.themeChanger}>
                            <label>Theme</label>
                            <select onChange={handleChange}>
                                <option value='none'> None</option>
                                <option value='day'>Day</option>
                                <option value='night'>Night</option>
                                <option value='galaxy'> Galaxy</option>
                            </select>
                        </form>
                        <form className={classes.focusChanger}>
                            <label>     Focus</label>
                            <select onChange={handleChangeFocus}>
                                {options ? options : null}
                            </select>
                        </form>
                </div>
            </div>


        </div>
    );
}

export default Profile;
