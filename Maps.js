
let metroAreaCenterCoordinates = [44.96, -93.2]

let map =L.map('mctc-map').setView(metroAreaCenterCoordinates, 9)

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a     href="https://www.openstreetmap.org/">OpenStreetMap</a> ' +
    'contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a ' +
    'href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2FybDA1ODciLCJhIjoiY2pzMHByeDkzMDRsNDN5bzgwbnYxOHMwOSJ9.yyCmzIyxg4D62a1kYGBGRg'}).addTo(map)