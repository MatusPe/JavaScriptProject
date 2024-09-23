


let Running=false;
let currentTime=0;
let timer=null;
let StartTime=0;



document.getElementById('start').onclick=function start() {


    if (!Running) {
        StartTime = DateWeather.now() - currentTime;
        timer = setInterval(() => update(StartTime), 1000);
        Running=true;
    }

}


document.getElementById('Stop').onclick=function Stoptime() {
    clearInterval(timer);
    Running=false;
}


document.getElementById('Reset').onclick=function Reset() {

    clearInterval(timer);
    StartTime=DateWeather.now();
    update(StartTime);

}

function update(StartTime) {
    currentTime = DateWeather.now() - StartTime;
    const hours = Math.floor(currentTime / (1000 * 60 * 60));
    const minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((currentTime % (1000 * 60)) / 1000);
    document.getElementById('time').textContent = `${hours.toString().padStart(2,0)}:${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`;

}



