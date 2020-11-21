import React from 'react';
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import galaxy1 from './galaxy1.jpg'
// import { fourtyTimer, twentyTimer, fifteenTimer } from "./timers";
import { updateUserSkillThunk } from "../../redux/actions/AuthActions";
import { useSelector } from 'react-redux';


function Pomodoro(props) {
    const theme = useSelector((state) => state.auth.theme)
    console.log(theme);
    let galaxy = ''
    if (theme === 'galaxy') {
        galaxy = galaxy1
    }
    const useStyles = makeStyles({
        container: {
            display: 'grid',
            gridTemplateRows: '100px 200px 1fr 450px',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
            backgroundImage: `url(${galaxy})`,
            backgroundSize: '100% 100%',
        },
        firstButtonDiv: {
            gridRowStart: '3',
            gridColumnStart: '2',
            display: 'flex',
            justifyContent: 'center'
        },
        secondButtonDiv: {
            gridRowStart: '3',
            gridColumnStart: '4',
            display: 'flex',
            justifyContent: 'center'
        },
        thirdButtonDiv: {
            gridRowStart: '3',
            gridColumnStart: '6',
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
            height: '100px',
            paddingTop: '30px',
            borderRadius: '7px'
        }

    })
    const user = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    // Timers
    const fourtyTimer = () => {
        // Set the date we're counting down to
        let distance = 5;

        // Update the count down every 1 second
        let x = setInterval(function () {

            distance = distance - 1;

            let minutes = Math.floor((distance / 60));
            let seconds = Math.floor((distance % 60));

            // Display the result in the element with id="timer"
            document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "Estatic Experience";
                user['user_skill'][user.focus] += 1;
                console.log(user['user_skill'])
                dispatch(updateUserSkillThunk(user))
                window.alert('One more step to mastery down');
            }
        }, 1000);
    }
    const twentyTimer = () => {
        // Set the date we're counting down to
        let distance = 1500;

        // Update the count down every 1 second
        let x = setInterval(function () {

            distance = distance - 1;

            let minutes = Math.floor((distance / 60));
            let seconds = Math.floor((distance % 60));

            // Display the result in the element with id="timer"
            document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "Sweet Victory";
                window.alert('One more step to mastery down');
            }
        }, 1000);
    }
    const fifteenTimer = (time) => {
        // Set the date we're counting down to
        let distance = 900;
        // Update the count down every 1 second
        let x = setInterval(function () {

            distance = distance - 1;

            let minutes = Math.floor((distance / 60));
            let seconds = Math.floor((distance % 60));

            // Display the result in the element with id="timer"
            document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("timer").innerHTML = "Feel refreshed?";
                window.alert('The rest ends and the struggle begins');
            }
        }, 1000);
    }

    const classes = useStyles()
    return (
        <>
            <div className={classes.container}>
                <div id='timer' className={classes.timer}>Timer</div>
                <div className={classes.firstButtonDiv}>
                    <button className={classes.fourtyButton} onClick={fourtyTimer}>hour demo</button>
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
