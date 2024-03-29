
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
    fullscreenControl: true,
    layers: [ 
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
     ]
} );

let nav = document.querySelector("#navigation");
console.log(nav);

console.log(ROUTE);
ROUTE.sort((stop1, stop2) => {
    return stop1.nr > stop2.nr
});


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

// Minimap
var miniMap = new L.Control.MiniMap(L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"), {
    toggleDisplay: true,
    minimized: false
}).addTo(map);


nav.options.selectedIndex = 12 - 1;
nav.onchange = (evt) => {
    let selected = evt.target.selectedIndex;
    let options = evt.target.options;
    let username =options[selected].value;
    let link = `https://${username}.github.io/nz/index.html`;
    console.log(username, link);

    window.location.href =link;
};

console.log(document.querySelector("#map"));

//<option value="MarieWieschollek">Queenstown</option>