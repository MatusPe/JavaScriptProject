


let lat;
let lon;
function Changebackground(Time) {

    if(Time.getHours() >18){
        document.documentElement.style.setProperty("--my-start-width","330deg");
        document.documentElement.style.setProperty("--my-end-width","360deg");
        document.getElementById("background").src="Static/Image/3d-cartoon-night-sky.jpg"
    }else {
        document.documentElement.style.setProperty("--my-start-width","0deg");
        document.documentElement.style.setProperty("--my-end-width","30deg");
        document.getElementById("background").src="Static/Image/Sun.jpg"
    }



}

function  updateInterval(){
    CurrentTime=new Date();
    Changebackground(CurrentTime);
    let HourEnd= (60 - CurrentTime.getMinutes()) * 60 * 1000 - CurrentTime.getSeconds() * 1000;
    setTimeout(()=>{
        setInterval(()=>Changebackground(CurrentTime), 60*60*1000)
    }, HourEnd);
}

document.addEventListener('DOMContentLoaded', function(){
    updateInterval();
});



