let hours = document.getElementById('hours')
let mins = document.getElementById('mins')
let secs = document.getElementById('secs')
let session = document.getElementById('session')

function timer() {
    let time = new Date();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    let sess = "AM";

    sess = (hh > 12) ? 'PM' : 'AM';

    hh = (hh == 0) ? 12 : ((hh > 12) ? (hh - 12) : hh);

    hh = (hh < 10) ? '0' + hh : hh;
    mm = (mm < 10) ? '0'+mm : mm;
    ss = (ss < 10) ? '0'+ss : ss;

    hours.innerText = hh;
    mins.innerText = mm;
    secs.innerText = ss;
    session.innerText = sess;

    setTimeout(timer, 1000)
}
timer();
