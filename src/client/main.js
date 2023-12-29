// main.js

import { showLoadingSpinner, hideLoadingSpinner } from './loadingOverlay';
import { plotNew, removeSVG } from './plots';
import { fetchCountersData, fetchGetObservationsUrl, fetchCsvObservations, formatDate, fetchTimeframeData } from './api-data';
import { createMap, loadGeojsonMap, panMap, ReloadGeojsonMap } from './maps';
import { displayError, clearError, displayCounterInfo, clearCounterInfo } from './info-err-display';
import { updateGeojsonWithCounterIdSelection, updateGeojsonWithCheckboxSelection } from './geojson-modifier';
import { validateTimeWIndowInput, setUpDefaultTimeWindow, setUpTimeInputListeners, getSelectedTimeWindow } from './time-input';
import { getAllCheckboxes, uncheckAllCheckboxes } from './checkboxes';




const mapCenter = [60.18, 24.93]; // Helsinki coordinates

let geojsonData; // Define the variable to store geojson data



function showVisualisationCards(show) {
    console.log(show)
    if (show === true) {
        document.getElementById("vizOverlay").style.display = "flex";
        document.getElementById("multiCollapseVizCustom").classList.add('show');
    }
    else {
        console.log("hide viz cards")
        document.getElementById("vizOverlay").style.display = "none";
        clearCounterInfo()
    }
}


function setupCheckboxListeners() {
    // Add event listeners to checkboxes

    // Get all elements with the class "filter-checkboxes"
    const checkboxes = getAllCheckboxes();
    // Add a click event listener to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function () {
            const clickedId = checkbox.id;

            //Update geojson data based on the checkbox selection
            geojsonData = updateGeojsonWithCheckboxSelection(geojsonData, checkbox);
            // Clear the map and load updated geojson data
            ReloadGeojsonMap(geojsonData);

        });
    });
}

function setCounterIdToInputField(id) {
    const numericInput = document.getElementById('numericInput');
    numericInput.value = id
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

            event.preventDefault(); // Prevent form submission
            if (!/^\d+$/.test(numericInput.value)) {
                errorMessage.textContent = 'Enter a valid numeric counter ID.';

            } else if (!validateTimeWIndowInput()) {
                // check if time window is valid
                return
            }
            else {
                // counter id is valid and time window is valid
                errorMessage.textContent = ''; // Clear error message if input is valid
                const counterId = Number(numericInput.value);
                const counterInfo = geojsonData.features.filter(feature => feature.properties.id === counterId)[0];
                if (counterInfo == null || counterInfo == undefined) {
                    errorDiv = document.getElementById("errorDiv");
                    displayError("Counter with id " + counterId + " not found")
                    return
                }

                uncheckAllCheckboxes()

                geojsonData = updateGeojsonWithCounterIdSelection(geojsonData, counterId);
                // Clear the map and load updated geojson data

                ReloadGeojsonMap(geojsonData);
                panMap(counterInfo.geometry)
                removeSVG()
                bringUpVisualisation(counterInfo)

            }


        });
    }
}

export function addCounterClickEventListeners(layer, feature, formId) {

    layer.on('click', function (event) {
        //event.preventDefault(); L.DomEvent.stopPropagation(event);
        console.log("onclick marker")

        setCounterIdToInputField(feature.properties.id)
        const form = document.getElementById(formId);
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




document.addEventListener('DOMContentLoaded', function () {

    setupCheckboxListeners()
    setupCounterIdForm()
    setUpVizCollapsibleBtnListeners()
    setUpDefaultTimeWindow()
    setUpTimeInputListeners()
    setCloseContainerBtnListener()

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

function filterAndPlotDataUptoNow(data, noOfDaysAgo, noOfHoursAgo, containerId, timeWindoText) {

    const filteredData = filterPastData(data, noOfDaysAgo, noOfHoursAgo);
    plotFilteredData(filteredData, containerId, timeWindoText)


}

function filterAndPlotDataInTimeWindow(data, startDate, endDate, containerId, timeWindoText) {

    //convert enddate to enddate +1 because for the api the enddate is not inclusive
    const newEndDate = endDate.setDate(endDate.getDate() + 1);

    const filteredData = filterTimeSeriesData(data, startDate, newEndDate);
    plotFilteredData(filteredData, containerId, timeWindoText)


}

function plotFilteredData(data, containerId, timeWindoText) {
    const infoDiv = document.getElementById(containerId)
    if (data.length == 0) {
        infoDiv.innerHTML = "<p>   No Data received in the Time Frame: " + timeWindoText + "</p>"
    }
    else {
        infoDiv.innerHTML = "<p>   Data received in the Time Frame: " + timeWindoText + "</p>"
        plotNew(data, containerId)
    }

}

function setCloseContainerBtnListener() {

    const closeContainerBtn = document.getElementById('closeContainerBtn');
    closeContainerBtn.addEventListener('click', function () {
        console.log("closeContainerBtn clicked")
        showVisualisationCards(false)
    });
}

async function displaySelectedCounterInfo(feature) {

    clearError()
    const infoText = 'Selected Counter Info :  id:' + feature.properties.id + ', name:' + feature.properties.name + ', source:' + feature.properties.source
    displayCounterInfo('<p>' + infoText + '</p>')
    try {
        console.log("fetching time frames")
        const data = await fetchTimeframeData(feature.properties.id)
        console.log(data)
        if (data.firstTimeStamp || data.lastTimeStamp) {
            console.log("timeframes: " + data.firstTimeStamp + '-' + data.lastTimeStamp)
            let timeframeText = '   , Data received from ' + data.firstTimeStamp.substring(0, 10) + ' to ' + data.lastTimeStamp.substring(0, 10)
            displayCounterInfo('<p>' + infoText + timeframeText + '</p>')

        }
        else {
            displayError("data collection timeline not available")
        }
    }
    catch (error) {
        console.error(error);
        displayError("Error fetching Counters")

    }
}

function bringUpVisualisation(feature) {

    console.log("bringUpVisualisation")

    const selectedTimeWindow = getSelectedTimeWindow()



    showLoadingSpinner()
    showVisualisationCards(false)

    displaySelectedCounterInfo(feature)
    setCounterIdToInputField(feature.properties.id)
    let urlWithParams = ""

    //dates for default viz
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const aMonthAgo = new Date(today);
    aMonthAgo.setDate(today.getDate() - 30);

    const isTimeWindowWithinDefault = (selectedTimeWindow.endDate <= tomorrow && selectedTimeWindow.startDate >= aMonthAgo)
    console.log("isTimeWindowWithinDefault" + isTimeWindowWithinDefault)


    urlWithParams = fetchGetObservationsUrl(feature.properties.id, aMonthAgo, tomorrow)


    fetchCsvObservations(urlWithParams).then(


        function (data) {

            console.log("csv read  - Number of rows:", data.length);

            filterAndPlotDataUptoNow(data, 0, 1, "viz-hour", "past hour")
            filterAndPlotDataUptoNow(data, 1, 0, "viz-day", "today")
            filterAndPlotDataUptoNow(data, 7, 0, "viz-week", "past week")
            filterAndPlotDataUptoNow(data, 30, 0, "viz-month", "past month");

            if (isTimeWindowWithinDefault) {

                filterAndPlotDataInTimeWindow(data, selectedTimeWindow.startDate, selectedTimeWindow.endDate, "viz-custom", formatDate(selectedTimeWindow.startDate) + " - " + formatDate(selectedTimeWindow.endDate))
                hideLoadingSpinner()
                showVisualisationCards(true)
            }


        }).catch((error) => {
            console.log(error)
            console.error('Error loading CSV file:', error);
            displayError("Error loading CSV file")
            hideLoadingSpinner()
        });

    if (isTimeWindowWithinDefault === false) {

        console.log(" custom outside default ")
        urlWithParams = fetchGetObservationsUrl(feature.properties.id, selectedTimeWindow.startDate, selectedTimeWindow.endDate)


        fetchCsvObservations(urlWithParams).then(
            function (data) {
                filterAndPlotDataInTimeWindow(data, selectedTimeWindow.startDate, selectedTimeWindow.endDate, "viz-custom", formatDate(selectedTimeWindow.startDate) + " - " + formatDate(selectedTimeWindow.endDate))
                hideLoadingSpinner()
                showVisualisationCards(true)
            }).catch((error) => {

                console.error('Error fetching CSV file:', error);
                displayError("Error fetching Observations")
                hideLoadingSpinner()
            });
    }
}

// Call the function to create the map
createMap(mapCenter, 12);
showLoadingSpinner()
try {
    geojsonData = await fetchCountersData()
}
catch (error) {
    console.error(error);

    displayError("Error fetching Counters")

}
hideLoadingSpinner()
loadGeojsonMap(geojsonData);

