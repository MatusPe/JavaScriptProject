let DateWeather;

function WeatherDailyDate(lat, lon){
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=a0129afdb4c3a4b62588cb29d2aa832a&units=metric`).then(response => response.json()).then(function(data){
        DateWeather=data;
    }).then(()=>setCurrendWeather(DateWeather)).then(()=>setdailyData(DateWeather)).then(()=>setHoursWeather(DateWeather));
}



function setCurrendWeather(date){
    [Temperature, Nightemp, daytemp, main, Time]=[date.current.temp, date.daily[0].temp.night, date.daily[0].temp.day,date.current.weather[0].main, date.current.dt];

    console.log(Time+'0')
    document.getElementById('dataBox').children[1].textContent=Math.floor(Temperature)+'°';
    document.getElementById('dataBox').children[2].children[0].textContent=Math.floor(daytemp);
    document.getElementById('dataBox').children[2].children[1].textContent=Math.floor(Nightemp);


    CurrentDate=new Date(Time*1000);
    let hours = String(CurrentDate.getUTCHours()).padStart(2, '0');
    let minutes = String(CurrentDate.getUTCMinutes()).padStart(2, '0');
    let seconds = String(CurrentDate.getUTCSeconds()).padStart(2, '0');


    let day = CurrentDate.getUTCDate();
    let month = CurrentDate.getUTCMonth() + 1;
    let year = CurrentDate.getUTCFullYear();

    let formattedTime = `${hours}:${minutes}:${seconds} ${day}.${month}.${year}`;
    document.getElementById('dataBox').children[0].textContent=formattedTime;

    document.getElementById('WeatherToday').children[1].src='Static/Image/'+getPictureSrc(main, Time)

}

function getPictureSrc(description, Time){
    let Hour=new Date(Time*1000).getHours();


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

function setdailyData(date){

    let day=document.querySelectorAll('.Day');
        let MaxMin=document.querySelectorAll('.MaxMin');
        let Wind=document.querySelectorAll('.Wind');
        let image= document.querySelectorAll('.dailypicture');

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    for(let i=0; i<7; i++){
        [Maxtemp, Mintemp, wind, main, Time]=[date.daily[i].temp.max, date.daily[i].temp.min, date.daily[i].wind_speed, date.daily[i].weather[0].main, new Date(date.daily[i].dt*1000)];
        day[i].textContent=days[Time.getDay()];

        MaxMin[i].textContent=`${Math.floor(Maxtemp)}/${Math.floor(Mintemp)}°C`;
        console.log(Wind[i].children[1].textContent);
        Wind[i].children[1].children[0].textContent=wind;
        image[i].src=`Static/Image/${getPictureSrc(main, Time)}`;



    }


}

function setHoursWeather(date){
    let box=document.getElementById('HoursWeather');
    for (let i=0; i<24; i++){

        [temp, feelLike, Time, Main]=[date.hourly[i].temp, date.hourly[i].feels_like, date.hourly[i].dt, date.hourly[i].weather[0].main];
        let newDate=new Date(Time*1000);
        let newdiv=document.createElement("div");
        newdiv.classList.add("HoursTemperature");
        box.appendChild(newdiv);

        let newdiv2=document.createElement("div");
        newdiv2.classList.add("HourTemperature");

        let newh2=document.createElement("h2");
        let newp=document.createElement("p");
        let newspan=document.createElement("span");
        let newh6=document.createElement("h6");
        let newspan2=document.createElement("span");

        newdiv2.appendChild(newh6);
        newdiv2.appendChild(newh2);
        newdiv2.appendChild(newp);
        newp.appendChild(newspan);
        newp.appendChild(newspan2);
        newdiv.appendChild(newdiv2)

        let newImage=document.createElement("img");
        newdiv.appendChild(newImage);


        newh2.textContent=Math.floor(temp)+'°';
        newspan.textContent='Real feel ';
        newspan2.textContent=Math.floor(feelLike)+'°';
        newh6.textContent=`${newDate.getHours()} Hour - ${newDate.getDate()}.${newDate.getMonth()}.${newDate.getFullYear()} `;
        console.log();
        newImage.src=`Static/Image/${getPictureSrc(Main, Time)}`;


    }
}

document.addEventListener('DOMContentLoaded', async function ()  {

    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    const lat=urlParams.get('lat');
    const lon=urlParams.get('lon');
    document.getElementById('pollution').setAttribute('href', `AirPollution_FourPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('Radar').setAttribute('href', `Radar_FivePage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('24HoursFerecast').setAttribute('href', `24Forecast_ThirdPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('Info').setAttribute('href', `Info_SixPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('currentpage').setAttribute('href', `DailyForecast_SecondPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('city').textContent = city;
    WeatherDailyDate(lat,lon);

});