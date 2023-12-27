
import * as L from 'leaflet';


let map
let geojsonLayer;

// Function to create the map
export function createMap(map_center_point) {
    //showDefaultVizCards(false)
    map = L.map('map').setView(map_center_point, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
}

export function panMap(geometry) {
    map.panTo(new L.LatLng(geometry.coordinates[1], geometry.coordinates[0]));
}


export function removeGeojsonLayer() {

    map.removeLayer(geojsonLayer);

}
export function loadGeojsonMap(geojsonData) {

    function onEachFeature(feature, layer) {
        if (feature.properties) {
            const htmlStrings = Object.entries(feature.properties).map(([key, value]) => `
            <strong>${key}:</strong> ${value}<br/>
          `);

            // Join the HTML strings to form a complete HTML string
            const htmlString = htmlStrings.join('');

            const dateForm = "dateForm" + feature.properties.id
            let datepicker_form = '<form id="' + dateForm + '"> \
            <button type="submit">Show Observations</button> \
            </form>'


            let popupContent = htmlString + datepicker_form
            //bind popup to layer
            layer.bindPopup(popupContent)

            // in the on click event of marker, add click event listener to button in popup
            layer.on('click', function (event) {
                //event.preventDefault(); L.DomEvent.stopPropagation(event);
                console.log("onclick marker")
                const form = document.getElementById(dateForm);
                // Add a click event to the form
                form.addEventListener('submit', function (event) {
                    // Handle the button click event here
                    // open observations in another tab
                    event.preventDefault();
                    console.log("onsubmit")


                    bringUpVisualisation(feature)
                });

            });
        }
    }
    const filteredGeojson = JSON.parse(JSON.stringify(geojsonData));
    filteredGeojson.features = filteredGeojson.features.filter((item) => item.properties.show_on_map);

    geojsonLayer = L.geoJSON(filteredGeojson, { onEachFeature: onEachFeature }
    ).addTo(map);

}