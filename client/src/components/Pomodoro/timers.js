import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
// import person from "./person.jpg";
// import SkillDisplay from "./SkillDisplay";
import { updateUserSkillThunk } from "../../redux/actions/AuthActions";



const user = useSelector((state)=> state.auth)
export const fourtyTimer = () => {
    // Set the date we're counting down to
    let distance = 15;

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
            window.alert('One more step to mastery down');
        }
    }, 1000);
}
export const twentyTimer = () => {
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
export const fifteenTimer = (time) => {
    // Set the date we're counting down to
    let distance = 900;
    // Update the count down every 1 second
    let x = setInterval(function () {

        distance = distance - 1;

        let minutes = Math.floor((distance / 60));
        let seconds = Math.floor((distance % 60));

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s " ;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "Feel refreshed?";
            window.alert('The rest ends and the struggle begins');
        }
    }, 1000);
}
