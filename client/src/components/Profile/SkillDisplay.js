import React,{useState} from 'react';
import { makeStyles } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

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
    const [clicked, steClicked] = useState(false)
    const handleClick = (e)=>{
        if(clicked){
            steClicked(false);
        }else{
            steClicked(true)
        }
        console.log(clicked)
    }
    const handleSubmit = (e)=>{

    }


    const classes = useStyles()
        return (
            <div className={classes.content}>
                <NavLink to={`/skills/${id}`} className={classes.link} activeclass='active'><span>{`${skill}`}:</span></NavLink>
                {clicked ?
                <form onSubmit={handleSubmit}>
                    <input type='number'></input>
                </form>
                :<span> {`${time} hrs`}
                <EditIcon onClick={handleClick}></EditIcon>
                </span> }

            </div>
        );
}

export default SkillDisplay;
