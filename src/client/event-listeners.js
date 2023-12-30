import { removeSVG } from "./plots";

import { panMap, ReloadGeojsonMap, loadGeojsonMap } from "./maps";
import { displayError, clearCounterInfo } from "./info-err-load-display";
import {
  updateGeojsonWithCounterIdSelection,
  updateGeojsonWithCheckboxSelection,
  getCounterId,
} from "./geojson-handler";

import { uncheckAllCheckboxes } from "./checkboxes";
import { showVisualisationCards } from "./viz-popup";
import { setCounterIdToInputField } from "./counter-id-input";
import { bringUpVisualisation } from "./main";
import { debugLog } from "./utils";

let geojsonData; // Define the variable to store geojson data

/**
 * checkbox check uncheck event listener
 * @param {} checkbox
 */
export function addCheckboxEventListener(checkbox) {
  //Update geojson data based on the checkbox selection
  geojsonData = updateGeojsonWithCheckboxSelection(geojsonData, checkbox);
  // Clear the map and load updated geojson data
  ReloadGeojsonMap(geojsonData);
}

/**
 * event listener to a valid(numeric) counter id input
 * checks if counter id exists in geojson data
 * if exists, updates geojson data and loads map with the updated data
 * unccheck all checkboxes to reflect the situation of one selcted counter
 * brings up the visualisation cards for the selected counter
 * @param {*} counterId
 * @returns
 */
export function addCounterIdGoBtnEventListener(counterId) {
  showVisualisationCards(false);
  clearCounterInfo();

  //debugLog(geojsonData)
  // Get the counter info from geojson data
  const counterInfo = geojsonData.features.filter(
    (feature) => getCounterId(feature) === counterId,
  )[0];
  if (counterInfo == null || counterInfo == undefined) {
    // Display error message if counter not found in the geojson data
    displayError("Counter with id " + counterId + " not found");
    return;
  }

  //if one counter is selected, uncheck all checkboxes to reflect the situation
  uncheckAllCheckboxes();

  //Update geojson data based on the counter id selection and set show_on_map property to true for the selected counter
  geojsonData = updateGeojsonWithCounterIdSelection(geojsonData, counterId);
  // Clear the map and load updated geojson data

  ReloadGeojsonMap(geojsonData);

  // bring the selected counter to the center of the map
  panMap(counterInfo.geometry);

  //remove any existing svg visulaization
  removeSVG();

  //bring up the visualisation cards for the selected counter
  bringUpVisualisation(counterInfo);
}

/**
 * listener to the counter marker click event on the map
 * sets selected counter id to the input field
 * brings a popup to show info about counter and button observations for the counter
 * popup eventlistener to the button brings up the visualisation cards for the selected counter
 * @param {*} layer
 * @param {*} feature
 * @param {*} formId
 */
export function addCounterClickEventListeners(layer, feature, formId) {
  layer.on("click", function (event) {
    debugLog("onclick counter marker");

    showVisualisationCards(false);
    clearCounterInfo();
    setCounterIdToInputField(getCounterId(feature));
    const form = document.getElementById(formId);
    // Add a click event to the form
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      debugLog("onsubmit");

      bringUpVisualisation(feature);
    });
  });
}

/**
 * click on the map will hide visualization cards and clear counter info
 * @param {*} map
 */
export function addMapClickEventListener(map) {
  map.on("click", function (e) {
    debugLog("map clicked");
    showVisualisationCards(false);
    clearCounterInfo();
  });
}

export function saveGeoJsonData(data) {
  debugLog("saveGeoJsonData");
  geojsonData = data;
  loadGeojsonMap(geojsonData);
  //debugLog(geojsonData);
}
