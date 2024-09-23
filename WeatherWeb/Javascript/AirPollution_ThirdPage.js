



 let datePolution;
async function getAirPollution(lat, lon, city) {
    const  result1=await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${ApiKey}`).then(response => response.json()).then(date =>{datePolution=date})
        .then(()=>setPrimalInformation(datePolution.list[0].main.aqi, city)).then(()=>setALLatribute(datePolution.list[0].components));

}



document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    const lat=urlParams.get('lat');
    const lon = urlParams.get('lon');

    document.getElementById('currentpage').setAttribute('href', `AirPollution_FourPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('Radar').setAttribute('href', `Radar_FivePage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('24HoursFerecast').setAttribute('href', `24Forecast_ThirdPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('Info').setAttribute('href', `Info_SixPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('Daily').setAttribute('href', `DailyForecast_SecondPage.html?city=${city}&lat=${lat}&lon=${lon}`);

    getAirPollution(lat, lon, city);
});



 function setPrimalInformation(date, city){
     let src;
     let color;
     if(date==1){
         src= 'safe'
         color='green'
     }else if(date==2){
         src= 'atmospheric-pollution'
         color='yellow'
     }else if(date==3){
         src= 'air-pollution'
         color='grey'
     }else if(date==4){
         src= 'co2'
         color='orange'
     }else if(date==5){
         src='nuclear-plant'
         color='red'
     }
     document.getElementById('PollutionPicture').src='Static/Image/AirPolution/'+src+'.png';
     document.getElementById('pollution').style.color=color;
     document.getElementById('pollution').textContent=date;
     document.getElementById('city').style.color=color;
     document.getElementById('city').textContent=city;
     console.log(datePolution.list[0].components);

     Object.values(datePolution.list[0].components).forEach((element, index) => {
         console.log(element);

     })
}

function setALLatribute(date){

     Object.values(date).forEach((element, index) => {
         document.getElementById(`PolutionDate${index}`).style.fontWeight='bold';
        document.getElementById(`PolutionDate${index}`).textContent=element+'  μg/m3';

    })
}

