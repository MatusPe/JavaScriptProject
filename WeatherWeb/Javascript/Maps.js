
var map;


async function initMap(lat, lon, Type) {

    var grayscaleStyle = [
        {
            elementType: 'geometry',
            stylers: [{ color: '#ffffff' }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#000000' }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{ color: '#393838' }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{ color: '#000000' }]
        },
        {
            featureType: 'landscape',
            stylers: [{ color: '#ffffff' }]
        },
        {
            featureType: 'water',
            stylers: [{ color: '#817f7f' }]
        }
    ];


    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: parseInt(lat), lng: parseInt(lon) },
        zoom: 8,
         styles:grayscaleStyle
    });

    await addWeatherLayer(map, Type);

}





function addWeatherLayer(map, mapMain) {
    const weatherLayer = new google.maps.ImageMapType({
        getTileUrl: function (coord, zoom) {
            return `https://tile.openweathermap.org/map/${mapMain}/${zoom}/${coord.x}/${coord.y}.png?appid=48905c55e6d593b00518dbad7ace3686`;
        },
        tileSize: new google.maps.Size(256, 256),
        opacity: 1,
        name: 'WeatherLayer'
    });

    map.overlayMapTypes.insertAt(0, weatherLayer);

}



function ChangeMaps(mapMain, button){
    ClearMaps();
    addWeatherLayer(map, mapMain);

    let buttons= document.querySelectorAll('button.Button');
    console.log(buttons);
    buttons.forEach(element => {
        element.style.scale=1;
    });
    button.style.scale=1.2;

}

function ClearMaps() {
    map.overlayMapTypes.clear();
}