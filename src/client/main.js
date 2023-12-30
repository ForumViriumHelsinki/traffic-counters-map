// main.js

import {
  filterAndPlotDataInTimeWindow,
  filterAndPlotDataUptoNow,
} from "./plots";
import {
  fetchCountersData,
  fetchGetObservationsUrl,
  fetchCsvObservations,
  fetchTimeframeData,
} from "./api-data";
import { createMap } from "./maps";
import {
  displayError,
  clearError,
  displayCounterInfo,
  showLoadingSpinner,
  hideLoadingSpinner,
} from "./info-err-load-display";
import { getCounterInfoText, getCounterId } from "./geojson-handler";
import {
  setUpDefaultTimeWindow,
  setUpTimeInputListeners,
  getSelectedTimeWindow,
  getSelectedTimeWindowText,
} from "./time-input";
import { setupCheckboxListeners } from "./checkboxes";
import {
  showVisualisationCards,
  setUpVizCollapsibleBtnListeners,
  setCloseContainerBtnListener,
} from "./viz-popup";
import {
  setCounterIdToInputField,
  setupCounterIdForm,
} from "./counter-id-input";
import { saveGeoJsonData } from "./event-listeners";
import { debugLog } from "./utils";

const mapCenter = [60.18, 24.93]; // Helsinki coordinates
const zoomLevel = 12; // Zoom level for the map

async function displaySelectedCounterInfo(feature) {
  clearError();
  let infoText = getCounterInfoText(feature);
  displayCounterInfo("<p>" + infoText + "</p>");
  try {
    debugLog("fetching time frames");
    const data = await fetchTimeframeData(getCounterId(feature));
    debugLog(data);
    if (data.firstTimeStamp || data.lastTimeStamp) {
      debugLog("timeframes: " + data.firstTimeStamp + "-" + data.lastTimeStamp);
      let timeframeText =
        "   , Data received from " +
        data.firstTimeStamp.substring(0, 10) +
        " to " +
        data.lastTimeStamp.substring(0, 10);
      displayCounterInfo("<p>" + infoText + ", " + timeframeText + "</p>");
    } else if (data.message === "no data collected") {
      displayCounterInfo("<p>" + infoText + ", " + data.message + "</p>");
    } else if (data.message === "error") {
      displayError("error fetching timeframe data");
    }
  } catch (error) {
    console.error(error);
    displayError("Error fetching Counters");
  }
}

export function bringUpVisualisation(feature) {
  debugLog("bringUpVisualisation");

  const selectedTimeWindow = getSelectedTimeWindow();

  showLoadingSpinner();
  showVisualisationCards(false);
  displaySelectedCounterInfo(feature);
  setCounterIdToInputField(getCounterId(feature));
  let urlWithParams = "";

  //dates for default viz
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const aMonthAgo = new Date(today);
  aMonthAgo.setDate(today.getDate() - 30);

  //dates for custom viz
  let customStartDate = selectedTimeWindow.startDate;
  let customEndDate = selectedTimeWindow.endDate;

  const isTimeWindowWithinDefault =
    customEndDate < tomorrow && customStartDate >= aMonthAgo;
  debugLog("isTimeWindowWithinDefault" + isTimeWindowWithinDefault);

  urlWithParams = fetchGetObservationsUrl(
    getCounterId(feature),
    aMonthAgo,
    tomorrow,
  );

  fetchCsvObservations(urlWithParams)
    .then(function (data) {
      debugLog("csv read  - Number of rows:", data.length);

      filterAndPlotDataUptoNow(data, 0, 1, "viz-hour", "past hour");
      filterAndPlotDataUptoNow(data, 1, 0, "viz-day", "today");
      filterAndPlotDataUptoNow(data, 7, 0, "viz-week", "past week");
      filterAndPlotDataUptoNow(data, 30, 0, "viz-month", "past month");

      if (isTimeWindowWithinDefault) {
        filterAndPlotDataInTimeWindow(
          data,
          customStartDate,
          customEndDate,
          "viz-custom",
          getSelectedTimeWindowText(),
        );
        hideLoadingSpinner();
        showVisualisationCards(true);
      }
    })
    .catch((error) => {
      debugLog(error);
      console.error("Error loading CSV file:", error);
      displayError("Error fetching observations");
      hideLoadingSpinner();
    });

  if (isTimeWindowWithinDefault === false) {
    debugLog(" custom outside default ");
    //since api is not inclusive of end date
    const newEndDate = new Date(customEndDate + 1);
    debugLog(newEndDate);
    urlWithParams = fetchGetObservationsUrl(
      getCounterId(feature),
      customStartDate,
      newEndDate,
    );

    fetchCsvObservations(urlWithParams)
      .then(function (data) {
        filterAndPlotDataInTimeWindow(
          data,
          customStartDate,
          customEndDate,
          "viz-custom",
          getSelectedTimeWindowText(),
        );
        hideLoadingSpinner();
        showVisualisationCards(true);
      })
      .catch((error) => {
        console.error("Error fetching CSV file:", error);
        displayError("Error fetching Observations");
        hideLoadingSpinner();
      });
  }
}

export function getGeojsonData() {
  if (geojsonData) {
    return geojsonData;
  } else {
    return null;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setupCheckboxListeners();
  setupCounterIdForm();
  setUpVizCollapsibleBtnListeners();
  setUpDefaultTimeWindow();
  setUpTimeInputListeners();
  setCloseContainerBtnListener();
});

// Call the function to create the map
createMap(mapCenter, zoomLevel);
showLoadingSpinner();
try {
  //fetches and saves counters data to load onto map
  saveGeoJsonData(await fetchCountersData());
} catch (error) {
  console.error(error);

  displayError("Error fetching Counters");
}
hideLoadingSpinner();
