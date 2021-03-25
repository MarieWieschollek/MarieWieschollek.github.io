
let stop = {
nr: 12,
name: "Queenstown",
lat: -45.031111,
lng: 168.6625,
user: "MarieWieschollek",
wikipedia: "https://en.wikipedia.org/wiki/Queenstown,_New_Zealand",

};


const map = L.map("map", { 
    center: [ stop.lat, stop.lng ],
    zoom: 13,
    layers: [ 
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
     ]
} );

let mrk = L.marker([ stop.lat, stop.lng ]).addTo(map);
mrk.bindPopup(`
<h4>Stop ${stop.nr}: ${stop.name} </h4>
<p> <i class="fas fa-external-link-alt mr-3"></i> <a href="${stop.wikipedia}"> Read about stop in Wikipedia </a> </p>
    
`.openPopup();


console.log(document.querySelector("#map"));