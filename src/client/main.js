// main.js

// Import Leaflet and D3.js
import * as L from 'leaflet';
import * as d3 from 'd3';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const counter_url = '/api/counters';
const latest_obs_url = '/api/observations-latest/';
const observations_url = 'http://lidotiku.api.dev.hel.ninja/api/observations/?counter=';
const observations_param = '&order=-datetime';
const map_center = [60.1698, 24.9384]; // Helsinki coordinates

let geojsonData; // Define the variable to store geojson data
let geojsonLayer;
let map
let selectedStartDate = null
let selectedEndDate = null
let isDefaultTimeWindow = true
let timeWindowErrMsg = ''

document.addEventListener('DOMContentLoaded', function () {

    console.log("dom loaded")
    // Wait for the DOM to be fully loaded
    const counterIdForm = document.getElementById('counterIdForm');
    const numericInput = document.getElementById('numericInput');
    const errorMessage = document.getElementById('errorMessage');




    if (counterIdForm) {

        counterIdForm.addEventListener('submit', function (event) {
            // Your validation logic here
            // Check if the input value is a number
            event.preventDefault(); // Prevent form submission
            if (!/^\d+$/.test(numericInput.value)) {
                errorMessage.textContent = 'Please enter a valid numeric counter ID.';

            } else {
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
                map.removeLayer(geojsonLayer);
                loadGeojsonMap(geojsonData);
                console.log(counterInfo)
                console.log(counterInfo.geometry)
                map.panTo(new L.LatLng(counterInfo.geometry.coordinates[1], counterInfo.geometry.coordinates[0]));

                bringUpMeasurementsOverlay(counterInfo)
                numericInput.value = '';

            }


        });
    }


    // Get all elements with the class "filter-checkboxes"
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    // Add a click event listener to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function () {
            const clickedId = checkbox.id;
            //Update geojson data based on the checkbox selection
            geojsonData = updateGeojsonWithCheckboxSelection(geojsonData, checkbox);
            // Clear the map and load updated geojson data
            map.removeLayer(geojsonLayer);
            loadGeojsonMap(geojsonData);

        });
    });


    // Get the date input element
    var startDate = document.getElementById('startDate');

    // Add event listener for the 'change' event
    startDate.addEventListener('change', function (e) {
        // Handle the date change event here
        selectedStartDate = new Date(e.target.value);
        console.log('Selected start date:', selectedStartDate);
    });

    // Get the date input element
    var endDate = document.getElementById('endDate');

    // Add event listener for the 'change' event
    endDate.addEventListener('change', function (e) {
        // Handle the date change event here
        selectedEndDate = new Date(e.target.value);
        console.log('Selected end date:', selectedEndDate);
    });

    var timeWindowSWitch = document.getElementById('timeSwitch');
    timeWindowSWitch.addEventListener('click', function () {
        // Handle the date change event here
        isDefaultTimeWindow = !isDefaultTimeWindow
        console.log('Selected default time window: ', isDefaultTimeWindow)



    });


});

function validateTimeWIndowInput() {

    console.log("validateTimeWIndowInput")
    if (isDefaultTimeWindow) {
        return true
    }
    else {
        if (selectedStartDate == null || selectedEndDate == null) {
            console.log("Please select start and end date")
            timeWindowErrMsg = "Please select start and end date"
            return false
        }
        else {
            if (selectedStartDate > selectedEndDate) {
                console.log("Selected start date greater than end date")
                timeWindowErrMsg = "Selected start date greater than end date"
                return false
            }
            else {
                return true
            }
        }
    }
}




function showDefaultVizCards(show) {
    // Get all elements with the class "viz"
    let vizcards = document.querySelectorAll('.viz');
    let display = 'none'
    if (show) {
        display = 'block'
    }
    vizcards.forEach(card => {
        card.style.display = display
    });
}

function showCustomVizCard(show) {

    let vizcard = document.getElementById('viz-custom');
    let display = 'none'
    if (show) {
        display = 'block'
    }

    vizcard.style.display = display

}





function showLoadingSpinner() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}
function hideLoadingSpinner() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}


function updateGeojsonWithCheckboxSelection(geojsonData, checkbox) {
    console.log("update map after checkbox selection")
    ////console.log(geojsonData)
    let source;
    geojsonData.features = geojsonData.features.map((item) => {
        ////console.log("print source")
        //console.log(item.properties.source.toLowerCase())
        source = item.properties.source.toLowerCase()
        if (source.startsWith("harbor")) {
            source = "infotripla"
        }
        if (source === checkbox.id) {
            if (checkbox.checked) {
                item.properties.show_on_map = true;
            } else {
                item.properties.show_on_map = false;
            }
        }
        return item;
    });
    return geojsonData

}


function updateGeojsonWithCounterIdSelection(geojsonData, counterId) {
    console.log("update map after counter id input")

    geojsonData.features = geojsonData.features.map((item) => {

        let id = item.properties.id


        if (id === counterId) {
            item.properties.show_on_map = true;
        }
        else {
            item.properties.show_on_map = false;
        }

        return item;
    });
    return geojsonData

}

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


function plotNew(data, containerId) {

    console.log("plotNew")

    if (data.length !== 0) {
        const allDirections = data.map(d => d.direction);
        const directions = [...new Set(allDirections)];
        console.log('Directions:', directions);

        // Create a color scale based on the number of lines
        const lineColorScale = d3.scaleOrdinal()
            .domain(directions)
            .range(['blue', 'green']);

        // Create a color scale based on the number of lines
        const scatterColorScale = d3.scaleOrdinal()
            .domain(directions)
            .range(['red', 'yellow']);

        let speedData = [];
        let countData = [];

        // Iterate through unique directions using forEach
        directions.forEach((direction, index) => {
            console.log('Processing direction:', direction);

            // Filter data for speed and count based on direction
            let filteredSpeed = data.filter(item => item.typeOfMeasurement === 'speed' && item.direction === direction);
            let filteredCount = data.filter(item => item.typeOfMeasurement === 'count' && item.direction === direction);

            // Push filtered data into arrays
            speedData.push({
                direction: direction,
                data: filteredSpeed
            });

            countData.push({
                direction: direction,
                data: filteredCount
            });
        });

        console.log('Speed data:', speedData);
        console.log('Count data:', countData);

        // Set the dimensions and margins of the graph
        var margin = { top: 5, right: 10, bottom: 50, left: 25 },
            width = 290 - margin.left - margin.right,
            height = 200 - margin.top - margin.bottom;

        // Append the SVG object to the body of the page
        var svg = d3.select(containerId)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

        // Define scales and axes
        const xScale = d3.scaleTime().range([0, width]);
        const yScale = d3.scaleLinear().range([height, 0]);

        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        // Set domains for scales based on data
        xScale.domain(d3.extent(data, d => d.date));
        yScale.domain([0, d3.max(data, d => Math.max(+d.value))]);

        // Add lines to the chart


        countData.forEach((lineData, index) => {
            const line = d3.line()
                .x(d => xScale(d.date))
                .y(d => yScale(+d.value));

                let class_name = 'line count-line ' + lineData.direction

            svg.append('path')
                .data([lineData.data])
                .attr('class', 'line count-line')
                .attr('d', line)
                .attr("fill", "none")
                .style('stroke', lineColorScale(lineData.direction));
        });

        // Add scatter points for speed data
        speedData.forEach((scatterData, index) => {
            console.log("speeddata")
            // svg.selectAll(".dot")  // Use a class selector for the dots
            //     .data(scatterData.data)
            //     .enter().append("circle")
            //     .attr("class", "dot")
            //     .attr("r", 1)  // Set the radius of the dots
            //     .attr("cx", d => xScale(d.date))
            //     .attr("cy", d => yScale(+d.value))
            //     .style('fill', scatterColorScale(scatterData.direction));

            const line = d3.line()
            .x(d => xScale(d.date))
            .y(d => yScale(+d.value));

            let class_name = 'line speed-line ' + scatterData.direction

        svg.append('path')
            .data([scatterData.data])
            .attr('class', class_name)
            .attr('d', line)
            .attr("fill", "none")
            .style('stroke', scatterColorScale(scatterData.direction));
        });

        // Add X and Y axes
        svg.append('g')
            .attr('class', 'x-axis')
            .call(xAxis.ticks(4));

        svg.append('g')
            .attr('class', 'y-axis')
            .call(yAxis);

        // // Update legends outside D3
        // const legendContainer = d3.select(containerId)
        //     .append('div')
        //     .attr('class', 'legend-container');

        // const legends = legendContainer.selectAll('.legend-item')
        //     .data(directions)
        //     .enter()
        //     .append('div')
        //     .attr('class', 'legend-item');

        // legends.append('div')
        //     .attr('class', 'legend-color')
        //     .style('background-color', d => colorScale(d));

        // legends.append('div')
        //     .text(d => d);
    }
}

function plotLineChart(data, containerId) {

    // set the dimensions and margins of the graph
    var margin = { top: 5, right: 10, bottom: 50, left: 25 },
        width = 290 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

    //const svgSelection = d3.select('svg');



    // append the svg object to the body of the page
    var svg = d3.select(containerId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Add X axis
    var x = d3.scaleTime()
        .domain(d3.extent(data, function (d) {
            return d.date;
        }))
        .range([0, width]);

    console.log("X-Axis Range:", x.domain());

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(4));
    //console.log("y axis")
    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return +d.value; })])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));
    // Add the line

    // Add Y axis


    // Extract the 'direction' column values
    const allDirections = data.map(d => d.direction);

    // Find unique values
    const directions = [...new Set(allDirections)];

    // Log the unique values
    console.log(' Directions :', directions);
    let colors = ["steelblue", "orange", "green", "red"]

    // Iterate through unique direction using forEach
    directions.forEach(direction => {
        console.log('Processing directions:', direction);

        const speedData = data.filter(item => item.typeOfMeasurement === "speed" && item.direction === direction)
        const countData = data.filter(item => item.typeOfMeasurement === "count" && item.direction === direction)


        if (speedData.length > 0) {
            // Add the line for "speed"
            svg.append("path")
                .datum(speedData)
                .attr("fill", "none")
                .attr("stroke", colors[directions.indexOf(direction)])
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function (d) { return x(d.date) })
                    .y(function (d) { return y(+d.value) })
                );
        }

        if (countData.length > 0) {
            // Add the line for "count"
            svg.append("path")
                .datum(countData)
                .attr("fill", "none")
                .attr("stroke", colors[directions.indexOf(direction) + 1])
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function (d) { return x(d.date) })
                    .y(function (d) { return y(+d.value) })
                );
        }

        // Create legends
        var legend = svg.append("g")
            .attr("class", "legends")
            //.attr("transform", "translate(" + (width - 30) + "," + 0 + ")"); // Adjust the legend position
            .attr('transform', (d, i) => `translate(${i * 120}, ${height + margin.bottom / 2})`);

        legend.append('rect')
            .attr('width', 10)
            .attr('height', 10)
            .attr('fill', (d, i) => colorScale(i)); // You can define your color scale

        legend.append('text')
            .attr('x', 15)
            .attr('y', 5)
            .text(d => d);


        // Legend for "speed" data
        if (speedData.length > 0) {
            legends.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", 8)
                .attr("height", 8)
                .attr("fill", "steelblue");

            legends.append("text")
                .attr("x", 15)
                .attr("y", 5)
                .attr("dy", ".35em")
                .style("font-size", "8px")
                .text("Speed " + direction);
        }

        // Legend for "count" data
        if (countData.length > 0) {
            legends.append("rect")
                .attr("x", 0)
                .attr("y", 15)
                .attr("width", 8)
                .attr("height", 8)
                .attr("fill", "orange");

            legends.append("text")
                .attr("x", 5)
                .attr("y", 10)
                .attr("dy", ".35em")
                .style("font-size", "8px")
                .text("Count " + direction);
        }


    });




}


function formatDate(date) {

    return date.toLocaleDateString('fi-FI', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).split('.').reverse().join('-');
}


function fetchGetObservationsUrl(counterId, startDate, endDate) {
    console.log("fetchGetObservationsUrl")
    console.log("startDate " + startDate)
    console.log("endDate " + endDate)

    let apiUrl = latest_obs_url + counterId
    const formattedStartDate = formatDate(startDate);
    console.log(formattedStartDate)

    const formattedEndDate = formatDate(endDate);
    console.log(formattedEndDate)

    const queryParams = { 'startDate': formattedStartDate, 'endDate': formattedEndDate };
    let queryString = Object.keys(queryParams)
        .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
        .join('&');
    let urlWithParams = `${apiUrl}?${queryString}`;

    console.log(urlWithParams)

    return urlWithParams


}

function removeSVG() {
    // Check if the SVG element exists and remove if yes
    for (let i = 0; i < 5; i++) {
        const svgSelection = d3.select('svg');
        if (!svgSelection.empty()) {
            // Remove the SVG element
            console.log("remove svg in bringUpMeasurementsOverlay ")
            svgSelection.remove();
        }
    }
}

function displayNoDataError(errorDiv, showErr) {

    let errMsg = "<p style='color: red;'>" + " No data received for this counter in the past month" + "</p>"
    displayErrorInInput(errorDiv, showErr, errMsg)

}

function displayTimeWindowError(errorDiv, showErr, errMsg) {

    let errhtml = "<p style='color: red;'>" + errMsg + "</p>"
    displayErrorInInput(errorDiv, showErr, errhtml)

}


function displayErrorInInput(errorDiv, showErr, errorMessage) {

    // Display the error message in the specified div with id "errorDiv"
    if (errorDiv) {
        if (showErr) {
            errorDiv.innerHTML = errorMessage;
        }
        else {
            errorDiv.innerHTML = "";
        }
    } else {
        console.error("Error div with id 'errorDiv' not found.");
    }

}

function bringUpMeasurementsOverlay(feature) {

    console.log("bringupmeasurementsoverlay")
    var errorDiv = document.getElementById("errorDiv");
    let isTimeWindowValid = validateTimeWIndowInput()
    console.log("time window Valid" + isTimeWindowValid)

    if (!isTimeWindowValid) {

        console.log("time window invalid")
        displayTimeWindowError(errorDiv, true, timeWindowErrMsg)

    }
    else {

        displayTimeWindowError(errorDiv, false, "")

        const counterInfoDiv = document.getElementById('counterInfoDiv');
        counterInfoDiv.textContent = 'Selected Counter Info :  id:' + feature.properties.id + ', name:' + feature.properties.name + ', source:' + feature.properties.source



        showDefaultVizCards(true)
        removeSVG()

        //showVizLoadingSpinner("viz-day-spinner")

        showLoadingSpinner()

        let urlWithParams = ""
        if (isDefaultTimeWindow) {
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);
            const aMonthAgo = new Date(today);
            aMonthAgo.setDate(today.getDate() - 30);

            urlWithParams = fetchGetObservationsUrl(feature.properties.id, aMonthAgo, tomorrow)

        }
        else {
            console.log("selected start date " + selectedStartDate)
            console.log("selected end date " + selectedEndDate)
            urlWithParams = fetchGetObservationsUrl(feature.properties.id, selectedStartDate, selectedEndDate)
        }

        let directions = []
        d3.csv(urlWithParams,
            function (d) {



                return { date: d3.timeParse('%Y-%m-%dT%H:%M:%S%Z')(d.datetime), value: +d.value, typeOfMeasurement: d.typeofmeasurement, direction: d.direction }
                //return { date: d3.timeParse('%Y-%m-%d')(d.date), value: d.value }
            }).then(
                // Now I can use this dataset:
                function (data) {

                    hideLoadingSpinner()
                    console.log("csv read")
                    console.log("Number of rows:", data.length);


                    if (data.length === 0) {
                        showDefaultVizCards(false)
                        displayNoDataError(errorDiv, true)

                    }
                    else {
                        displayNoDataError(errorDiv, false)
                        //hideVizLoadingSpinner("viz-day-spinner")
                        //plotLineChart(data, "#viz-day")




                        const thisHourData = filterPastData(data, 0, 1);
                        console.log('Last 7 days:')
                        console.log(thisHourData);
                        plotNew(thisHourData, "#viz-hour")



                        const todayData = filterPastData(data, 1, 0);
                        console.log('Last 7 days:')
                        console.log(todayData);
                        plotNew(todayData, "#viz-day")

                        // Filter for the last 7 days

                        const last7DaysData = filterPastData(data, 7, 0);
                        console.log('Last 7 days:')
                        console.log(last7DaysData);
                        plotNew(last7DaysData, "#viz-week")

                        // Filter for the last 30 days

                        const last30DaysData = filterPastData(data, 30, 0);
                        console.log('Last 30 days:')
                        console.log(last30DaysData);
                        plotNew(last30DaysData, "#viz-month")

                        // // Filter for a year ago

                        // const oneYearAgoData = filterLastXDaysData(data, 365);
                        // console.log('One year ago:')
                        // console.log(oneYearAgoData);
                        // plotLineChart(oneYearAgoData, "#viz-year")

                    }
                })


    }
}


function loadGeojsonMap(geojsonData) {

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


                    bringUpMeasurementsOverlay(feature)
                });

            });
        }
    }
    const filteredGeojson = JSON.parse(JSON.stringify(geojsonData));
    filteredGeojson.features = filteredGeojson.features.filter((item) => item.properties.show_on_map);

    geojsonLayer = L.geoJSON(filteredGeojson, { onEachFeature: onEachFeature }
    ).addTo(map);

}



// Function to create the map
function createMap(map_center_point) {
    showDefaultVizCards(false)
    map = L.map('map').setView(map_center_point, 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    showLoadingSpinner()
    fetch(counter_url)
        .then(response => response.json())
        .then(geojson => {
            //setTimeout(1000)
            hideLoadingSpinner()
            geojson.features = geojson.features.map((item) => {
                item.properties.show_on_map = true
                return item
            });
            geojsonData = geojson; // Store the initial geojson data
            console.log("fetched counters data")
            console.log(geojsonData)
            loadGeojsonMap(geojsonData);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to create the map
createMap(map_center);
