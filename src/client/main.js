// main.js

// Import Leaflet and D3.js
import * as L from 'leaflet';
import * as d3 from 'd3';
import { showLoadingSpinner, hideLoadingSpinner } from './loadingOverlay';
import { plotNew, removeSVG } from './plots';
import { fetchCountersData, fetchGetObservationsUrl, fetchCsvObservations } from './apiData';
import { createMap, loadGeojsonMap, panMap, removeGeojsonLayer } from './maps';
import { displayNoDataError, displayTimeWindowError, displayError } from './errors';
import { updateGeojsonWithCounterIdSelection, updateGeojsonWithCheckboxSelection } from './geojson';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const map_center = [60.18, 24.93]; // Helsinki coordinates

let geojsonData; // Define the variable to store geojson data
let selectedStartDate = null
let selectedEndDate = null
let timeWindowErrMsg = ''


function showVisualisationCards(show) {
    console.log(show)
    if (show === true) {
        document.getElementById("vizOverlay").style.display = "flex";
        document.getElementById("multiCollapseVizCustom").classList.add('show');
    }
    else {
        console.log("hide viz cards")
        document.getElementById("vizOverlay").style.display = "none";
        displaySelectedCounterInfo(null, false)


    }
}


function setupCheckboxListeners() {
    // Add event listeners to checkboxes


    // Get all elements with the class "filter-checkboxes"
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    // Add a click event listener to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function () {
            const clickedId = checkbox.id;
            //Update geojson data based on the checkbox selection
            geojsonData = updateGeojsonWithCheckboxSelection(geojsonData, checkbox);
            // Clear the map and load updated geojson data
            removeGeojsonLayer()
            loadGeojsonMap(geojsonData);

        });
    });
}

function setupCounterIdForm() {
    // Setup counter form and add event listeners
    const counterIdForm = document.getElementById('counterIdForm');
    const numericInput = document.getElementById('numericInput');
    const errorMessage = document.getElementById('errorMessage');
    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');


    if (counterIdForm) {

        counterIdForm.addEventListener('submit', function (event) {
            // Your validation logic here
            // Check if the input value is a number
            selectedStartDate = new Date(startDate.value);
            selectedEndDate = new Date(endDate.value);

            event.preventDefault(); // Prevent form submission
            if (!/^\d+$/.test(numericInput.value)) {
                errorMessage.textContent = 'Enter a valid numeric counter ID.';

            } else if (!validateTimeWIndowInput()) {
                errorMessage.textContent = timeWindowErrMsg
            }
            else {
                errorMessage.textContent = ''; // Clear error message if input is valid
                const counterId = Number(numericInput.value);
                const counterInfo = geojsonData.features.filter(feature => feature.properties.id === counterId)[0];
                // Get all elements with the class "filter-checkboxes"
                const checkboxes = document.querySelectorAll('.filter-checkbox');
                // Add a click event listener to each checkbox
                checkboxes.forEach(checkbox => {
                    checkbox.checked = false
                });

                geojsonData = updateGeojsonWithCounterIdSelection(geojsonData, counterId);
                // Clear the map and load updated geojson data
                removeGeojsonLayer()
                loadGeojsonMap(geojsonData);
                panMap(counterInfo.geometry)
                removeSVG()
                bringUpVisualisation(counterInfo)
                numericInput.value = '';

            }


        });
    }
}

export function addCounterClickEventListeners(layer, feature, dateFormId) {

    layer.on('click', function (event) {
        //event.preventDefault(); L.DomEvent.stopPropagation(event);
        console.log("onclick marker")
        const form = document.getElementById(dateFormId);
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

export function addMapClickEventListener(map) {

    map.on('click', function (e) {

        console.log("map clicked")
        showVisualisationCards(false)
    });

}

function setUpVizCollapsibleBtnListeners() {

    // Add click event listeners to each button
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetCollapse = document.getElementById(targetId);

            // Collapse all other elements except the one that is being clicked
            document.querySelectorAll('.collapse').forEach(collapse => {
                if (collapse !== targetCollapse) {
                    collapse.classList.remove('show');
                }
            });

            // Toggle the clicked element
            targetCollapse.classList.toggle('show');
        });
    });
}

function setUpDefaultTimeWindow() {

    // Get the current date
    const currentDate = new Date();
    const formattedEndDate = currentDate.toISOString().slice(0, 10);// Format the date as "YYYY-MM-DD"
    document.getElementById('endDate').value = formattedEndDate;

    let yearAgo = new Date(currentDate);
    yearAgo.setDate(currentDate.getDate() - 60);
    const formattedStartDate = yearAgo.toISOString().slice(0, 10);// Format the date as "YYYY-MM-DD"
    document.getElementById('startDate').value = formattedStartDate;

    selectedEndDate = currentDate
    selectedStartDate = yearAgo

}

function setUpTimeInputListeners() {

    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    const errorMessage = document.getElementById('errorMessage');

    startDate.addEventListener('change', function () {
        selectedStartDate = new Date(startDate.value);
        if (!validateTimeWIndowInput()) {
            errorMessage.textContent = timeWindowErrMsg
        }
        else {
            errorMessage.textContent = ''
        }
    });

    endDate.addEventListener('change', function () {
        selectedEndDate = new Date(endDate.value);
        if (!validateTimeWIndowInput()) {
            errorMessage.textContent = timeWindowErrMsg
        }
        else {
            errorMessage.textContent = ''
        }
    });

}

function validateTimeWIndowInput() {

    timeWindowErrMsg = ""
    if (selectedStartDate == null || selectedEndDate == null) {
        timeWindowErrMsg = "Please select start and end date"
        return false
    }
    else {
        if (selectedStartDate > selectedEndDate) {
            timeWindowErrMsg = "Selected start date greater than end date"
            return false
        }
        else {
            return true
        }
    }

}




document.addEventListener('DOMContentLoaded', function () {

    setupCheckboxListeners()
    setupCounterIdForm()
    setUpVizCollapsibleBtnListeners()
    setUpDefaultTimeWindow()
    setUpTimeInputListeners()

});


function filterPastData(data, noOfDaysAgo, noOfHoursAgo) {

    const currentDate = new Date();
    const pastDate = new Date();
    pastDate.setDate(currentDate.getDate() - noOfDaysAgo);
    pastDate.setHours(currentDate.getHours() - noOfHoursAgo);
    const filteredData = filterTimeSeriesData(data, pastDate, currentDate)
    return filteredData
}

function filterTimeSeriesData(data, startTime, EndTime) {
    const filteredData = data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate > startTime && itemDate <= EndTime;
    });

    return filteredData
}

function filterAndPlotDataUptoNow(data, noOfDaysAgo, noOfHoursAgo, containerId, NoDataMsg) {

    const filteredData = filterPastData(data, noOfDaysAgo, noOfHoursAgo);
    console.log(filteredData)
    if (filteredData.length == 0) {
        displayError(document.getElementById(containerId), true, NoDataMsg)
    }
    else {
        displayError(document.getElementById(containerId), false, "")
        plotNew(filteredData, containerId)
    }

}

function filterAndPlotDataInTimeWindow(data, startTime, endTime, containerId, NoDataMsg) {

    const filteredData = filterTimeSeriesData(data, startTime, endTime);
    console.log(filteredData)
    if (filteredData.length == 0) {
        displayError(document.getElementById(containerId), true, NoDataMsg)
    }
    else {
        displayError(document.getElementById(containerId), false, "")
        plotNew(filteredData, containerId)
    }

}

function displaySelectedCounterInfo(show, feature) {

    const counterInfoDiv = document.getElementById('counterInfoDiv');
    if (show) {
        counterInfoDiv.textContent = 'Selected Counter Info :  id:' + feature.properties.id + ', name:' + feature.properties.name + ', source:' + feature.properties.source
    }
    else {
        counterInfoDiv.textContent = ''
    }


}
function bringUpVisualisation(feature) {

    console.log("bringUpVisualisation")
    var errorDiv = document.getElementById("errorDiv");
    let isTimeWindowValid = validateTimeWIndowInput()

    showLoadingSpinner()
    showVisualisationCards(false)

    if (isTimeWindowValid)

        displayTimeWindowError(errorDiv, false, "")

    displaySelectedCounterInfo(true, feature)
    let urlWithParams = ""

    //dates for default viz
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const aMonthAgo = new Date(today);
    aMonthAgo.setDate(today.getDate() - 30);

    const isTimeWindowWithinDefault = (selectedEndDate <= tomorrow && selectedStartDate >= aMonthAgo)
    console.log("isTimeWindowWithinDefault" + isTimeWindowWithinDefault)


    urlWithParams = fetchGetObservationsUrl(feature.properties.id, aMonthAgo, tomorrow)

    fetchCsvObservations(urlWithParams).then(


        function (data) {

            console.log("csv read  - Number of rows:", data.length);

            filterAndPlotDataUptoNow(data, 0, 1, "viz-hour", "No data received for this counter in the past hour")
            filterAndPlotDataUptoNow(data, 1, 0, "viz-day", "No data received for this counter today")
            filterAndPlotDataUptoNow(data, 7, 0, "viz-week", "No data received for this counter in the past week")
            filterAndPlotDataUptoNow(data, 30, 0, "viz-month", "No data received for this counter in the past month");

            if (isTimeWindowWithinDefault) {
                filterAndPlotDataInTimeWindow(data, selectedStartDate, selectedEndDate, "viz-custom", "No data received for this counter in the selected time window")
                hideLoadingSpinner()
                showVisualisationCards(true)
            }


        });

    if (isTimeWindowWithinDefault === false) {

        console.log(" custom outside default ")
        urlWithParams = fetchGetObservationsUrl(feature.properties.id, selectedStartDate, selectedEndDate)


        fetchCsvObservations(urlWithParams).then(
            function (data) {
                filterAndPlotDataInTimeWindow(data, selectedStartDate, selectedEndDate, "viz-custom", "No data received for this counter in the selected time window")
                hideLoadingSpinner()
                showVisualisationCards(true)
            });
    }
}

// Call the function to create the map
createMap(map_center);
showLoadingSpinner()
geojsonData = await fetchCountersData()
hideLoadingSpinner()
loadGeojsonMap(geojsonData);

