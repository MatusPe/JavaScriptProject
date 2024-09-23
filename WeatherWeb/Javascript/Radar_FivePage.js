document.addEventListener('DOMContentLoaded', async function () {

    const urlParams = new URLSearchParams(window.location.search);
    const city = urlParams.get('city');
    const lat=urlParams.get('lat');
    const lon = urlParams.get('lon');


    document.getElementById('pollution').setAttribute('href', `AirPollution_FourPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('currentpage').setAttribute('href', `Radar_FivePage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('24HoursFerecast').setAttribute('href', `24Forecast_ThirdPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('Info').setAttribute('href', `Info_SixPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('Daily').setAttribute('href', `DailyForecast_SecondPage.html?city=${city}&lat=${lat}&lon=${lon}`);
    document.getElementById('city').textContent=city;
    document.getElementById('city').textContent=city;

    initMap(lat, lon, "clouds_new");

});