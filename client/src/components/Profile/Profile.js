import React, { useState } from 'react';
import person from "./person.jpg";
import { makeStyles } from "@material-ui/core";
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
            gridRowStart: '2',
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
    console.log(theme)
    const handleChange =(e) =>{
        setTheme(e.target.value);
    }



    const skill = 'Japanese';
    const time = '1000 hours';
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.start} >

                <img src={person} className={classes.image}></img>
            </div>
            <div className={classes.label}>
                <span>Skill</span>
                <span>Number of Hours</span>
            </div>
            <div className={classes.skill}>
                <SkillDisplay skill={skill} time={time} />
            </div>
            <div className={classes.theme}>
                <h3>usename</h3>
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
