


let display =document.getElementById("display");


function AddtoCalculate(input) {


    if (display.value.length == 0 && isNaN(parseInt(input))){
        return;


}
    if(!isNaN(parseInt(display.value[display.value.length-1]))||!isNaN(input)||display.value.length==0){
        display.value += input;
    }

}
function Calculate() {
    display.value = eval(display.value);

}
function Reset() {
    display.value = "";
}