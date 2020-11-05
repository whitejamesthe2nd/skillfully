export const fourtyTimer = () => {
    // Set the date we're counting down to
    let distance = 2700;

    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        distance = distance - 1;

        let minutes = Math.floor((distance / 60));
        let seconds = Math.floor((distance % 60));

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}
export const twentyTimer = () => {
    // Set the date we're counting down to
    let distance = 1500;

    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        distance = distance - 1;

        let minutes = Math.floor((distance / 60));
        let seconds = Math.floor((distance % 60));

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}
export const fifteenTimer = () => {
    // Set the date we're counting down to
    let distance = 900;

    // Update the count down every 1 second
    let x = setInterval(function () {


        // Find the distance between now and the count down date
        distance = distance - 1;

        let minutes = Math.floor((distance / 60));
        let seconds = Math.floor((distance % 60));

        // Display the result in the element with id="timer"
        document.getElementById("timer").innerHTML = minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "EXPIRED";
        }
    }, 1000);
}
