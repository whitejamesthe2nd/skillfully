import React from 'react';
import { makeStyles } from "@material-ui/core";
import { useSelector } from 'react-redux';
import galaxy from '../Pomodoro/galaxy1.jpg';

const Home = () => {


    const theme = useSelector((state)=> state.auth.theme)
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
        container:{
                display:'flex',
                justifyContent:'center',
                backgroundColor: `${backgroundColor}`,
                color: `${color}`,
                borderRadius: '10px',
                fontWeight: '600',
                fontSize: '18px',
                boxShadow: `${boxShadow}`,
                marginTop:'15px',
                padding: '20px',
                paddingTop: '0px'
            },
            containerRoot:{
                display:'flex',
                justifyContent:'center',
                height: '820px',
                backgroundImage: `url(${pageTheme})`,
                color: `${color}`,
                backgroundSize: '100% 100%'
            },
            subRoot:{
                width:'700px'
            }
        })

        const classes = useStyles();

        return (
            <div  className={classes.containerRoot}>
                <div className={classes.subRoot}>

                <div className={classes.container}>
                <h1>Welcome to Skillfully</h1>
                </div>
                <div className={classes.container}>
                <p>Skillfully is a website driven toward making your aquisition of skills easier.<br></br>
                We hope to allow you to aquire skills at a faster pace and inspire more conifdence<br></br>
                in your ability to do so. In the spirit of learning there are some tips below to <br></br>
                help you get started on your journey.
                </p>
                </div>
                <div>
                    <h1 className={classes.container}>How to use Skillfully</h1>
                    <div className={classes.container} >
                        <ol>
                            <li>Sign up and then head to the profile page.</li>
                            <li>Add your skills to the list to keep track of your progress</li>
                            <li>Use the Pomodoro timer section to remain accountable and trackable</li>
                            <li>Click on any skill and use the skill guide or add one if one isn't present</li>
                            <li>Stay focused and have fun</li>
                        </ol>
                    </div>
                </div>
                </div>
            </div>
        );

}

export default Home;
