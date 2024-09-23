

function generatePassword() {

    let passwordlenght = document.getElementById("LenghtNumber").value;
    let passwordincludelowercase = document.getElementById("Uppercase").checked;
    let passwrdincludeUppercase = document.getElementById("Lowercase").checked;
    let passwordincludesymbols = document.getElementById("Symbol").checked;
    let passwordincludenumbers = document.getElementById("number").checked;
    let output=document.getElementById("#Genereted_code");


    let Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase=Uppercase.toLowerCase();
    let number="0123456789"
    let symbol="!@#$%^&*()_+-=?^_`{|}~";
    let allowedSymbols = "";
    let password="";

    allowedSymbols += passwrdincludeUppercase ? Uppercase : "";
    allowedSymbols += passwordincludelowercase ? lowercase : "";
    allowedSymbols += passwordincludesymbols ? symbol : "";
    allowedSymbols += passwordincludenumbers ? number : "";
    console.log(allowedSymbols);

    if (passwordlenght<6){
        console.log(passwordlenght)
        output.textContent="Password con not be less then six characters!";
        return;
    }else if(passwordlenght>40){

        output.textContent="Password con not be more then 40 characters";
        return;
    }else if(allowedSymbols.length==0) {
        output.textContent="Check something";
        return;
    }
    for (let i = 0; i < passwordlenght; i++){
        password+=allowedSymbols[Math.floor(Math.random()*allowedSymbols.length)];
    }
    output.textContent = password;



}
