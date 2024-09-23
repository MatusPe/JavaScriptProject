

let Running=false;

let Hours=0;
let Minutes=0;
let Seconds=0;
let Timer=null;

document.getElementById('start').onclick = function () {
    if(!Running){
        Hours=document.getElementById('Hours').value;
        Minutes=document.getElementById('Minutes').value;
        Seconds=document.getElementById('Seconds').value;
        Timer=setInterval(update, 1000);
        Running=true;
        document.getElementById('Hours').disabled = true;
        document.getElementById('Minutes').disabled = true;
        document.getElementById('Seconds').disabled = true;
    }


}

function update(){

    if (Seconds>0){
        Seconds-=1;

    }else if (Seconds==0&&Minutes>0){
        Seconds=59;
        Minutes-=1;


    }else if (Minutes==0&&Hours>0){
        Seconds=59;
        Minutes=59;
        Hours-=1;
    }

    document.getElementById('Hours').value = Hours;
    document.getElementById('Minutes').value = Minutes;
    document.getElementById('Seconds').value = Seconds;
}

document.getElementById('Reset').onclick=function Reset(){
    clearInterval(Timer);
    document.getElementById('Minutes').value = 0;
    document.getElementById('Seconds').value = 0;
    document.getElementById('Hours').value = 0;
    Running=false;
    document.getElementById('Hours').disabled = false;
    document.getElementById('Minutes').disabled = false;
    document.getElementById('Seconds').disabled = false;

}

document.getElementById('Stop').onclick=function Stop(){
    clearInterval(Timer);
    Running=false;
}