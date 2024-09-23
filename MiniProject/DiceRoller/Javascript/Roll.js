





button.onclick=function () {
    const numberinput=document.getElementById('numberinput').value;
    const button=document.getElementById('button');
    const DiceNumber=document.getElementById('DiceNumber');
    const DicePicture=document.getElementById('DicePicture');
    let arrayNumber=[];
    let arrayImage=[];


    for (let i=0; i < numberinput; i++) {

        const value = Math.floor(Math.random() * 6) + 1;
        arrayNumber.push(value);
        arrayImage.push(`<img src="Image/Dice-${value}.svg.png">`);


    }
    
    DiceNumber.textContent = `Dice number: ${arrayNumber.join(', ')}`;
    DicePicture.innerHTML=arrayImage.join('');
}