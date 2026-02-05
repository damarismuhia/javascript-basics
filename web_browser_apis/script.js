// MARK: 1. Geolocation API
/** https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
 * 1. Get current location
 * 2. Watch Location updates - returns an id
 * 3. Clear Live Location - navigator.geolocation.clearWatch(id)
 */


//MARK: Current Position
function getCoordinates(){
    navigator.geolocation.getCurrentPosition(curSuccess, currError, currOptions)
}

function curSuccess(pos){
    const coords = pos.coords;
    console.log(`
        \nLatitude: ${coords.latitude},
        \nLongitude: ${coords.longitude},
        \nAccuracy: ${coords.accuracy} meters,
        \n\nPos ObJ:
        `, coords);
        displayMap(coords.latitude, coords.longitude);
}

function currError(error){
    console.log("ERROR::: ", error.code, '-', error.message);
}

const currOptions = {
    enableHighAccuracy: true, //use GPS if available- makes accuracy better
    timeout: 5000, //time to wait to stop trying getting the loc
    maximumAge: 0, // do not use the cached locations
}



//MARK: Watch Position - fires when the loc changes.
function watchCoordinates(){
   const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions) //we will use the id to stop the live updates
   
}
const targetLoc = {
    lat: 0.3745343862006476,
    long: 32.632193863625844,
}

function watchSuccess(pos){
    const coords = pos.coords;

    if(targetLoc.lat === coords.latitude && targetLoc.long === coords.longitude){
        console.log("HURRAY YOU ARE STILL WITHIN",  `\nLatitude: ${coords.latitude},
        \nLongitude: ${coords.longitude}`);
        navigator.geolocation.clearWatch(id)
    }else {
        console.log("HELLO? YOU HAVE Changed the location", `\nLatitude: ${coords.latitude},
        \nLongitude: ${coords.longitude}`);
    }
    
}

function watchError(error){
    console.log("ERROR::: ", error.code, '-', error.message);
}

const watchOptions = {
    enableHighAccuracy: true, //use GPS if available- makes accuracy better
    timeout: 5000, //time to wait to stop trying getting the loc
    maximumAge: 0, // do not use the cached locations
}





//MARK: 2 Display Map 
/**
 * Zoom scale:
1	🌍 Almost whole world -Continents
3	🌎 Big regions- Africa / Europe
5	🌍 Country level -	Uganda
8	🏙️ Large city -	Kampala
10	🏘️ City	- Entebbe
13	🛣️ Streets	Roads
15	🏠 Buildings -Houses
18	🏢 Very close - Individual buildings
 */
function displayMap(lat, long){
    var map = L.map('map').setView([lat, long], 15); // Center map on user's location, Zoomlever

    // L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }).addTo(map); -- official site to load the map, but it is failing

     L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
    }).addTo(map);

    const marker = L.marker([lat, long]).addTo(map);
    marker.bindPopup('Current Location')
    marker.openPopup()
}



















function init(){
    getCoordinates()
   // watchCoordinates()
    
}


document.addEventListener('DOMContentLoaded', init)