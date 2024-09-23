const ApiKey='48905c55e6d593b00518dbad7ace3686';

    window.onload = function() {
        if (typeof google === 'object' && typeof google.maps === 'object') {
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('searchTextField'));
            console.log("Google Places Autocomplete initialized");
        } else {
            console.error("Google Maps API failed to load.");
        }
    };

    document.getElementById('dataForm').addEventListener('submit', async function(e) {
        e.preventDefault()
        var form = this;
        let city=document.getElementById('searchTextField').value;
        await getLocation(city);
        let variable=await `?city=${city}&lat=${lat}&lon=${lon}`;
        form.action+=variable;


        form.submit();

    });

    async function getLocation(city){
        const result= await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${1}&appid=${ApiKey}`).then(response => response.json()).then(data => {lat=data[0].lat; lon=data[0].lon});

    }

