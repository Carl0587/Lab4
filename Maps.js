//ARRAY WITH LATITUDE AND LONGITUDE CORDINATES FOR THE SECTION WE WANT TO CHECK
let USACoordinates = [37.6,-95.665]
//"L"is from leaflets
let map =L.map('usa-map').setView(USACoordinates, 4)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a     href="https://www.openstreetmap.org/">OpenStreetMap</a> ' +
    'contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a ' +
    'href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2FybDA1ODciLCJhIjoiY2pzMHByeDkzMDRsNDN5bzgwbnYxOHMwOSJ9.yyCmzIyxg4D62a1kYGBGRg'}).addTo(map)
//this is to create the icons using images that I have stored in my picture folder, giving them a variable name and Icon size
var bridgeIcon = L.icon({
    iconUrl : 'pics/bridge.png',
    iconSize: [30,30]
});

var fallsIcon = L.icon({
    iconUrl: 'pics/niagara.png',
    iconSize: [30,30]
});
var canyonIcon = L.icon({
    iconUrl: 'pics/grand-canyon.png',
    iconSize: [30,30]
});
var mountIcon = L.icon({
    iconUrl: 'pics/rushmore.png',
    iconSize: [30,30]
});

//this are the markers created
let  verrazanoB = [	40.6066, -74.0447]
let  verrazanoMarker = L.marker(verrazanoB,{icon:bridgeIcon}).bindPopup("Verrazano-Narrow Bridge<br> Spam 1298.4 Meters"). addTo(map)

let  goldenB = [37.8199, -122.4783]
let  goldenMarker = L.marker(goldenB,{icon:bridgeIcon}).bindPopup("Golden Gate Bridge<br> Spam 1280.2 Meters"). addTo(map)

let  mackinacB = [45.8174, -84.7278]
let  mackinacMarker = L.marker(mackinacB,{icon:bridgeIcon}).bindPopup("Mackinac Bridge<br> Spam 1158 Meters"). addTo(map)

let  washingtonB = [40.8517, -73.9527]
let  washingtonMarker = L.marker(washingtonB,{icon:bridgeIcon}).bindPopup("George Washington Bridge<br> Spam 1067 Meters"). addTo(map)

let  tacomaB = [47.2690, -122.5517]
let  tacomaMarker = L.marker(tacomaB,{icon:bridgeIcon}).bindPopup("Tacoma Narrows Bridge<br> Spam 853.44 Meters"). addTo(map)

let waterfall = [43.0962,-79.0377]
let fallsMarker = L.marker(waterfall,{icon:fallsIcon}).bindPopup("Niagara Falls").addTo(map)

let canyon = [36.1070, -112.1130]
let canyonMarker = L.marker(canyon,{icon:canyonIcon}).bindPopup("Grand Canyon").addTo(map)

let mount = [43.8791, -103.4591]
let mountMarker = L.marker(mount,{icon:mountIcon}).bindPopup("Mount Rushmore").addTo(map)

//I crerated this avariable(marker) its a circle with a radious of 10000 color red with some opacity
var circle = L.circle([42.8791, -102.4591], {
    color: 'red',
    fillColor:'#f03',
    fillOpacity:0.5,
    radius: 10000
}).addTo(map);

















