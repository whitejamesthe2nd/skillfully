import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import person from "./person.jpg";
import SkillDisplay from "./SkillDisplay";
import { updateFocusThunk } from "../../redux/actions/AuthActions";

const Profile = () => {
    const useStyles = makeStyles({
        container: {
            display: 'grid',
            gridTemplateRows: '50px 1fr 1fr',
            gridTemplateColumns: '1fr 2fr 1fr'
        },
        image: {
            height: '200px',
            width: '200px',
            paddingLeft: '50px'
        },
        skill: {
            gridColumnStart: '2',
            // backgroundColor: 'yellow'
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
        theme:{
            gridColumnStart:'1',
            paddingTop:'150px',
            paddingLeft: '115px'
        }

    })
    const [theme,setTheme] = useState();
    const [focus,setFocus] = useState('None');
    const auth = useSelector((state)=> state.auth)
    const dispatch = useDispatch();

    const handleChange =(e) =>{
        setTheme(e.target.value);
    }

    const handleChangeFocus =(e) =>{
        setFocus(e.target.value);
        console.log(e.target.value)
        dispatch(updateFocusThunk(e.target.value,auth))

    }
    const classes = useStyles()
    const skills = auth.user_skill;
    let  options = [<option value={'None'}>None</option>];

    if(skills){
        let skillArray = Object.keys(skills);
        skillArray.map((ele,i) => options.push(<option key={i} value={ele}>{`${ele}`}</option>))
    }

    let userSkills = [];
    for(let key in skills) {
    userSkills.push(
    <div className={classes.skill}>
        <SkillDisplay skill={key} time={skills[key]} />
    </div>)}

    return (
        <div className={classes.container}>
            <div className={classes.start} >

                <img src={person} className={classes.image}></img>
            </div>
            <div className={classes.label}>
                <span>Skill</span>
                <span>Number of Hours</span>
            </div>
            {userSkills}
            <div className={classes.theme}>
                <h3>{auth.username}</h3>
                <h3>Focus: {auth.focus}</h3>
                <form>
                    <label>Theme</label>
                    <select onChange={handleChange}>
                        <option value='day'>Day</option>
                        <option value='night'>Night</option>
                        <option value='galaxy'> Galaxy</option>
                    </select>
                    <br></br>
                    <label>     Focus</label>
                    <select onChange={handleChangeFocus}>
                        {options ? options : null}
                    </select>
                </form>
            </div>


        </div>
    );
}

export default Profile;
