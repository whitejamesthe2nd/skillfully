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
                    <h1 className={classes.container}>Tips for Learning</h1>
                    <div className={classes.container} >
                        <ul>
                            <li>Keep whatever tools you need to practice availbale with little resistence</li>
                            <li>Use pomodoro timers to get your self in the flow state</li>
                            <li>Use spaced repition for more consitent memory</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        );

}

export default Home;
