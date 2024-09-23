
let yourScore=0;
let pcscore=0;
let GameWon = "";
let GameRunning = true;
let CurrentRound;
const Choice=["Rock", "Paper", "Scissors"]

function GameMain(input) {
    const pcmove = Math.floor(Math.random() * 3) + 1;

   if(GameRunning) {



       CurrentRound="Lose";
       if (input == 1 && pcmove == 2) {
           pcscore += 1;

       } else if (input == 2 && pcmove == 3) {
           pcscore += 1;

       } else if (input == 3 && pcmove == 1) {
           pcscore += 1;

       } else if (input == pcmove) {
           CurrentRound="Draw";

       } else {
           yourScore += 1;
           CurrentRound="Won";

       }
    GetRightColor(CurrentRound);

   }


       document.getElementById("Player").textContent ="Player: "+ Choice[input-1];
    document.getElementById("Pc").textContent = "Pc: "+Choice[pcmove-1];
    document.getElementById("PcScore").textContent = `Pc score : ${pcscore}`;
    document.getElementById("Score").textContent = `Yours score : ${yourScore}`;
    if ((yourScore===3||pcscore===3)) {
        GameRunning=false;
        GameWon = yourScore == 3 ? GameWon = "You Won" : GameWon = "Pc Won";
        document.getElementById("result").textContent = GameWon;
        return;

    };
    document.getElementById("result").textContent = "Currect Round you: " +CurrentRound;

};



function Reset(){

    location.reload();
}

function GetRightColor(CurrentRound){
    if(CurrentRound=="Won"){
        document.getElementById("result").style.color = "#2fff00";
    }else if(CurrentRound=="Lose"){
        document.getElementById("result").style.color = "#FF0000";
    }else{
        document.getElementById("result").style.color = "#6c6666";
    }
}