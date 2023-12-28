/**
 * Module containing functions to create a map with Leaflet and add geojson data to the map.
 * @module maps
 */

import * as L from "leaflet";
import {
  addCounterClickEventListeners,
  addMapClickEventListener,
} from "./main";

let map;
let geojsonLayer;

/**
 * function to create a map with the given center point nd zoomFactor in Leaflet
 * @param {Number[]} mapCenter
 * @param {Number} zoomFactor
 */
export function createMap(mapCenter, zoomFactor) {
  map = L.map("map").setView(mapCenter, zoomFactor);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  addMapClickEventListener(map);
}

/**
 * pans the map to given coordinates
 * @param {Object} geometry
 */
export function panMap(geometry) {
  map.panTo(new L.LatLng(geometry.coordinates[1], geometry.coordinates[0]));
}

/**
 * removes the exisiting geojson layer from the map
 */
export function removeGeojsonLayer() {
  map.removeLayer(geojsonLayer);
}

/**
 * Adds the geojson data to the map. Each Point is a marker on the map. Popup is added to each marker with the counter data.
 * Popup also contains a button to show observations for the counter.
 * @param {GeoJSON} geojsonData
 */
export function loadGeojsonMap(geojsonData) {
  function onEachFeature(feature, layer) {
    if (feature.properties) {
      // Create an HTML string with the feature properties
      const htmlStrings = Object.entries(feature.properties).map(
        ([key, value]) => `
            <strong>${key}:</strong> ${value}<br/>
          `,
      );

      // Join the HTML strings to form a complete HTML string
      const htmlString = htmlStrings.join("");

      //create a button to show observations for the counter
      const formId = "form" + feature.properties.id;
      let buttonForm =
        '<form id="' +
        formId +
        '"> \
            <button type="submit">Show Observations</button> \
            </form>';

      // set the popup content
      let popupContent = htmlString + buttonForm;

      //bind popup to layer
      layer.bindPopup(popupContent);

      //add event listener to the button/form
      addCounterClickEventListeners(layer, feature, formId);
    }
  }

  //filter the geojson data to show only the counters that have show_on_map property set to true
  const filteredGeojson = JSON.parse(JSON.stringify(geojsonData));
  filteredGeojson.features = filteredGeojson.features.filter(
    (item) => item.properties.show_on_map,
  );

  //add the filtered geojson data to the map
  geojsonLayer = L.geoJSON(filteredGeojson, {
    onEachFeature: onEachFeature,
  }).addTo(map);
}
