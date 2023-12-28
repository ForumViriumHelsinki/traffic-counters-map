
import * as L from 'leaflet';
import { addCounterClickEventListeners, addMapClickEventListener } from './main';

let map
let geojsonLayer;




// Function to create the map
export function createMap(map_center_point) {
    //showDefaultVizCards(false)
    map = L.map('map').setView(map_center_point, 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    addMapClickEventListener(map)

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

            const dateFormId = "dateForm" + feature.properties.id
            let datepicker_form = '<form id="' + dateFormId + '"> \
            <button type="submit">Show Observations</button> \
            </form>'


            let popupContent = htmlString + datepicker_form
            //bind popup to layer
            layer.bindPopup(popupContent)

            addCounterClickEventListeners(layer, feature, dateFormId)
        }
    }

    const filteredGeojson = JSON.parse(JSON.stringify(geojsonData));
    filteredGeojson.features = filteredGeojson.features.filter((item) => item.properties.show_on_map);

    geojsonLayer = L.geoJSON(filteredGeojson, { onEachFeature: onEachFeature }
    ).addTo(map);

}