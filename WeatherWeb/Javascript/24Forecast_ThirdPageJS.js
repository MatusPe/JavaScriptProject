


let DateWeather;
let lat;
let lon;

document.addEventListener('DOMContentLoaded', async function ()  {

    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    getWeatherData(city);
    const lat=urlParams.get('lat');
    const lon=urlParams.get('lon');
    document.getElementById('pollution').setAttribute('href', `AirPollution_FourPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('Radar').setAttribute('href', `Radar_FivePage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('currentpage').setAttribute('href', `24Forecast_ThirdPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('Info').setAttribute('href', `Info_SixPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('Daily').setAttribute('href', `DailyForecast_SecondPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('city').textContent = city;
    await initMap(lat, lon, 'temp_new');
});



async function getWeatherData(city) {

    const aPIuRL=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ApiKey}&units=metric `;
    const Response= await fetch(aPIuRL).then(response => response.json()).then(data=>DateWeather = data).then(()=>setCurrentDate(DateWeather.list[0])).then(set3hoursWeather);


}




function setCurrentDate(Date){
    const Date1=[Time,CurrentTempriture, RealFeel,description, rainlevel, Wind, WindGuest,  CloudCover, Pressure,Vissibility, Humidity, Maxtemp,Mintemp, sealevel, AtmosfericPressure, main]=[Date.dt_txt, Number(Date.main.temp).toFixed(1),
        Date.main.feels_like, Date.weather[0].description, Date.rain?Date.rain['3h']:"0", Date.wind.speed, Date.wind.gust,
         Date.clouds.all, Date.main.pressure, Date.visibility, Date.main.humidity,
        Date.main.temp_max, Date.main.temp_min , Date.main.sea_level, Date.main.grnd_level,Date.weather[0].main]
    for (let i = 0; i < Date1.length-1; i++) {
        console.log(i);
        document.getElementById(`Date${i}`).firstChild.textContent = Date1[i];
        console.log(i)
    }
    document.getElementById('PollutionPicture').src=`Static/Image/${getPictureSrc(main, Time)}`;

}


function set3hoursWeather(){
    console.log(DateWeather)
    const boxes=document.getElementsByClassName("boxHours");

    for (let i = 0; i < boxes.length; i++) {
        const Status=document.createElement('p')
        const Images=document.createElement('img')
        //Image

        const div1=document.createElement("div");
        div1.classList.add("newDiv");
        boxes[i].appendChild(div1);
        Images.classList.add("Weathericon");
        Images.src=`Static/Image/${getPictureSrc(DateWeather.list[i].weather[0].main, DateWeather.list[i].dt_txt)}`;
        div1.appendChild(Images);

        //Status
        Status.classList.add("StatusofWeather");
        Status.textContent=DateWeather.list[i].weather[0].description;
        div1.appendChild(Status);

        //tempriture
        const div=document.createElement("div");
        div.classList.add("Timecapsule");
        boxes[i].appendChild(div);
        const time=document.createElement('p')
        const Tempriture=document.createElement('p');
        const RFTempriture=document.createElement('p');

        time.classList.add('Timemachine');
        Tempriture.classList.add('hot');
        RFTempriture.classList.add('ReeelFeel');

        time.textContent=DateWeather.list[i].dt_txt.replace(/\-/g, '/');
        div.appendChild(time);
        Tempriture.textContent=Number(DateWeather.list[i].main.temp).toFixed(1)+'°C';
        div.appendChild(Tempriture);

        RFTempriture.textContent='RealFeel '+DateWeather.list[i].main.feels_like+'°C';
        div.appendChild(RFTempriture);

    }
}

function getPictureSrc(description, Time){
    let Hour=new Date(Time).getHours();

    console.log(description);
    if(description=='Rain'){
        return 'Weather/rain.png'
    }else if(description=='Clouds'&&Hour>=18||Hour<6){
        return 'Weather/nightclouds.png'
    }else if(description=='Clouds'&&Hour<18&&Hour>=6){
        return 'Weather/clouds.png'
    }else if(description=='Clear'&&Hour<18&&Hour>=6){
        return 'Weather/Clear.png'
    }
    else if(description=='Clear'&&Hour>=18||Hour<6){
        return 'Weather/night.png'
    }else if(description=='Thunderstorm'){
        return 'Weather/Thunderstorm.png'
    }
    else if(description=='Snow'){
        return 'Weather/snow.png'
    }else{
        console.log(description+'sdfsd');
        return 'Weather/snow.png'
    }
}

function getMainforecast(input){
    setCurrentDate(DateWeather.list[input-1])
}

function getMaps(button){
    button.onclick = function() { getWeatherDetail(button); };
    document.getElementById('map').style.display='block';
    document.getElementById('DateDetail').style.display='none';


}
function getWeatherDetail(button){
    button.onclick = function() { getMaps(button); };
    document.getElementById('map').style.display='none';
    document.getElementById('DateDetail').style.display='block';

}











