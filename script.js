//your JS code here. If required.
//your JS code here. If required.
function liveTime() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    let currentDate = `${month}/${day}/${year}`;
    document.getElementById("timer").textContent = currentDate + ', ' + time;
}

function startTimer() {
    liveTime();
    setInterval(liveTime, 1000);
}

window.addEventListener('load', startTimer);