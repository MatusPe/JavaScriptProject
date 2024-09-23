

function currentTime(){
    const now = new DateWeather();
    const hours= now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const meridiem=hours>=12?"PM":"AM";



    document.getElementById('time').textContent= `${hours}:${minutes}:${seconds} ${meridiem}`;
}

currentTime();
setInterval(currentTime, 1000);