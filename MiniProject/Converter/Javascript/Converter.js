


const button=document.getElementById("button");
const miletokm=document.getElementById("miletokm");
const kmtomile=document.getElementById("kmtomile");
const inputnumber=document.getElementById("inputnumber");
const output=document.getElementById("result");

let result1;


button.onclick=function(){

    if(miletokm.checked&&button.value!=null){
        result1=inputnumber.value*1.6;

    }else if(kmtomile.checked&&button.value!=null){
        result1=inputnumber.value*0.62;
    }else{
        output.textContent="Please enter a valid number!!!";
        return;
    }
    output.textContent="Result is: "+result1;

};
