import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import galaxy from './galaxy1.jpg'
import { fourtyTimer, twentyTimer, fifteenTimer } from "./timers";

const useStyles = makeStyles({
    container: {
        display: 'grid',
        gridTemplateRows: '100px 200px 1fr 500px',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        backgroundImage: `url(${galaxy})`,
        backgroundSize: '100% 100%',
    },
    firstButtonDiv: {
        gridRowStart: '3',
        gridColumnStart: '2',
        // backgroundColor: 'yellow',
        display: 'flex',
        justifyContent: 'center'
    },
    secondButtonDiv: {
        gridRowStart: '3',
        gridColumnStart: '4',
        // backgroundColor: 'blue',
        display: 'flex',
        justifyContent: 'center'
    },
    thirdButtonDiv: {
        gridRowStart: '3',
        gridColumnStart: '6',
        // backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center'
    },
    fourtyButton: {
        height: '50px',
        width: '200px',
        fontSize: '24px'
    },
    twentyButton: {
        height: '50px',
        width: '200px',
        fontSize: '22px'
    },
    timer: {

        gridColumnStart: "4",
        gridRowStart: "2",
        color: 'White',
        fontSize: '42px',
        textAlign: 'Center',
        backgroundColor: 'black',
        height: '75px',
        paddingTop: '30px',
        borderRadius:'7px'
    }

})
function Pomodoro(props) {
    const classes = useStyles()

    return (
        <>
            <div className={classes.container}>
                <div id='timer' className={classes.timer}>Timer</div>
                <div className={classes.firstButtonDiv}>
                    <button className={classes.fourtyButton} onClick={fourtyTimer}>45 Minutes</button>
                </div>
                <div className={classes.secondButtonDiv}>
                    <button className={classes.twentyButton} onClick={twentyTimer}> 25 minutes</button>
                </div>
                <div className={classes.thirdButtonDiv}>
                    <button className={classes.twentyButton} onClick={fifteenTimer}> 15 minute Break</button>
                </div>
                <div></div>
            </div>
        </>
    );
}
export default Pomodoro;
