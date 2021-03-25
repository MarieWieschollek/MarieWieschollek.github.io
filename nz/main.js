
let stop = {
nr: 12,
name: "Queenstown",
lat: -45.031111,
lng: 168.6625,
user: "MarieWieschollek",
wikipedia: "https://en.wikipedia.org/wiki/Queenstown,_New_Zealand",

};


const map = L.map("map", { 
    //center: [ stop.lat, stop.lng ],
    //zoom: 13,
    layers: [ 
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
     ]
} );

let nav = document.querySelector("#navigation");
console.log(nav);

console.log(ROUTE);
for (let entry of ROUTE) {
    console.log(entry);

    nav.innerHTML +=`
    <option value="${entry.user}"> Stop ${entry.nr}: ${entry.name}</option>
    `;

    let mrk = L.marker([ entry.lat, entry.lng ]).addTo(map);
mrk.bindPopup(`
<h4>Stop ${entry.nr}: ${entry.name} </h4>
<p> <i class="fas fa-external-link-alt mr-3"></i> <a href="${entry.wikipedia}"> Read about stop in Wikipedia </a> </p>
    
`);

if(entry.nr == 12) {
    map.setView([ stop.lat, stop.lng ], 13);
    mrk.openPopup();
}}



console.log(document.querySelector("#map"));

//<option value="MarieWieschollek">Queenstown</option>