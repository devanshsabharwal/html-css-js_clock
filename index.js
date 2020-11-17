setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);


setInterval(() => {
    var time = new Date
    var timeToShow = `${time.getHours()} hours ${time.getMinutes()} minutes ${time.getSeconds()} seconds`
    document.getElementById("time").innerHTML = timeToShow;
}, 1000);


