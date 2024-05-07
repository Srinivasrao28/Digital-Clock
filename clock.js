function Clock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    session = "AM"
    if (hours < 12) {
        sessiohn = "AM";
    } else {
        session = "PM";
    }

    hours = 10 > hours ? "0" + hours : hours;
    minutes = 10 > minutes ? "0" + minutes : minutes;
    seconds = 10 > seconds ? "0" + seconds : seconds;

    document.getElementById("digitalclock").innerHTML = hours + " : " + minutes + " : " + seconds + " " + session;
    setTimeout(Clock, 1000);
}

Clock();