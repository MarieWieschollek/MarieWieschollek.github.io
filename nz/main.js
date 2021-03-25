
const map = L.map("map", { 
    center: [ -45.031111, 168.6625 ],
    zoom: 13,
    layers: [ 
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
     ]
} );

console.log(document.querySelector("#map"));