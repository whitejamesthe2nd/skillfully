import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core";
import person from "./person.jpg";
import SkillDisplay from "./SkillDisplay";

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
    const auth = useSelector((state)=> state.auth)
    const handleChange =(e) =>{
        setTheme(e.target.value);
    }
    const classes = useStyles()
    const skills = auth.user_skill;

    let userSkills = [];
    for(let key in skills) {
    userSkills.push(
    <div className={classes.skill}>
        <SkillDisplay skill={key} time={skills[key]} />
    </div>)}
    console.log(userSkills)


    const skill = 'Japanese';
    const time = '1000 hours';
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
                <form>
                    <select onChange={handleChange}>
                        <option value='day'>Day</option>
                        <option value='night'>Night</option>
                        <option value='galaxy'> Galaxy</option>
                    </select>
                </form>
            </div>


        </div>
    );
}

export default Profile;
