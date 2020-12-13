import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import { useSelector,useDispatch } from 'react-redux';
import {updateUserSkillThunk} from '../../redux/actions/AuthActions'


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
    if(theme === 'night'){
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
            textDecoration: 'none',
        }

    })
    const [hours, setHours] = useState(time);
    const [clicked, setClicked] = useState(false);
    const auth = useSelector((state)=> state.auth);
    const dispatch = useDispatch();

    const handleClick = (e)=>{
        if(clicked){
            setClicked(false);
        }else{
            setClicked(true);
        }
        console.log(clicked)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        auth.user_skill[skill] = parseInt(hours);
        dispatch(updateUserSkillThunk(auth));
        setClicked(false);
    }
    const handleChange = (e)=>{
        setHours(e.target.value);
        console.log(hours);
    }


    const classes = useStyles()
        return (
            <div className={classes.content}>
                <NavLink to={`/skills/${id}`} className={classes.link} activeclass='active'><span>{`${skill}`}:</span></NavLink>
                {clicked ?
                <form onSubmit={handleSubmit}>
                    <input type='number' onChange={handleChange} value={hours}></input>
                    <button type='submit' onSubmit={handleSubmit}>Submit</button>
                </form>
                :<span> {`${time} hrs`}
                <EditIcon onClick={handleClick}></EditIcon>
                </span> }

            </div>
        );
}

export default SkillDisplay;
