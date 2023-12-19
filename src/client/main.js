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

function showVizCards(show) {
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


showVizCards(false)

function showLoadingSpinner() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}
function hideLoadingSpinner() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}

// Function to show loading spinner for a specific viz element
function showVizLoadingSpinner(vizId) {
    //document.getElementById(vizId).classList.add('loading-spinner');

    const overlay = document.getElementById(vizId);
    overlay.style.display = 'flex';

}

// Function to hide loading spinner for a specific viz element
function hideVizLoadingSpinner(vizId) {
    const overlay = document.getElementById(vizId);
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

function filterLastXDaysData(data, noOfDays) {

    const currentDate = new Date();
    const lastXDaysData = data.filter(item => {
        const itemDate = new Date(item.date);
        const XDaysAgo = new Date();
        XDaysAgo.setDate(currentDate.getDate() - noOfDays);
        return itemDate >= XDaysAgo && itemDate <= currentDate;
    });

    return lastXDaysData
}

function plotLineChart(data, containerId) {

    // set the dimensions and margins of the graph
    var margin = { top: 5, right: 10, bottom: 20, left: 25 },
        width = 290 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

    const svgSelection = d3.select('svg');

    const speedData = data.filter(item => item.typeOfMeasurement === "speed")
    const countData = data.filter(item => item.typeOfMeasurement === "count")

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

    if (speedData.length > 0) {
        // Add the line for "speed"
        svg.append("path")
            .datum(speedData)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
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
            .attr("stroke", "orange")
            .attr("stroke-width", 1.5)
            .attr("d", d3.line()
                .x(function (d) { return x(d.date) })
                .y(function (d) { return y(+d.value) })
            );
    }

    // // Add x-axis label
    // svg.append('text')
    //     .attr('class', 'x-axis-label')
    //     .attr('text-anchor', 'middle') // Center the label
    //     .attr('transform', `translate(${width / 2},${height + margin.bottom - 1})`)
    //     .text('Date');

    // Create legends
    var legends = svg.append("g")
        .attr("class", "legends")
        .attr("transform", "translate(" + (width - 30) + "," + 0 + ")"); // Adjust the legend position

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
            .text("Speed");
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
            .attr("x", 15)
            .attr("y", 20)
            .attr("dy", ".35em")
            .style("font-size", "8px")
            .text("Count");
    }

}


function formatDate(date) {

    return date.toLocaleDateString('fi-FI', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).split('.').reverse().join('-');
}


function fetchGetObservationsUrl(counterId, startDate, endDate) {

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

    // Display the error message in the specified div with id "errorDiv"
    if (errorDiv) {
        if (showErr) {
            errorDiv.innerHTML = "<p style='color: red;'>" + " No data received for this counter" + "</p>";
        }
        else {
            errorDiv.innerHTML = "";
        }
    } else {
        console.error("Error div with id 'errorDiv' not found.");
    }

}
function bringUpMeasurementsOverlay(feature) {

    console.log("show viz cards")
    showVizCards(true)
    removeSVG()

    showVizLoadingSpinner("viz-day-spinner")

    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    let urlWithParams = fetchGetObservationsUrl(feature.properties.id, today, tomorrow)

    d3.csv(urlWithParams,
        function (d) {
            return { date: d3.timeParse('%Y-%m-%dT%H:%M:%S%Z')(d.datetime), value: d.value, typeOfMeasurement: d.typeofmeasurement }
            //return { date: d3.timeParse('%Y-%m-%d')(d.date), value: d.value }
        }).then(
            // Now I can use this dataset:
            function (data) {

                console.log("csv read")
                console.log("Number of rows:", data.length);

                var errorDiv = document.getElementById("errorDiv");
                if (data.length === 0) {
                    showVizCards(false)
                    displayNoDataError(errorDiv, true)

                }
                else {
                    displayNoDataError(errorDiv, false)
                    hideVizLoadingSpinner("viz-day-spinner")
                    plotLineChart(data, "#viz-day")


                    // // Filter for the last 7 days

                    // const last7DaysData = filterLastXDaysData(data, 7);
                    // console.log('Last 7 days:')
                    // console.log(last7DaysData);
                    // plotLineChart(last7DaysData, "#viz-week")

                    // // Filter for the last 30 days

                    // const last30DaysData = filterLastXDaysData(data, 30);
                    // console.log('Last 30 days:')
                    // console.log(last30DaysData);
                    // plotLineChart(last30DaysData, "#viz-month")

                    // // Filter for a year ago

                    // const oneYearAgoData = filterLastXDaysData(data, 365);
                    // console.log('One year ago:')
                    // console.log(oneYearAgoData);
                    // plotLineChart(oneYearAgoData, "#viz-year")

                }
                return data
            }).then(
                function (data) {


                    const today = new Date();
                    const last7Days = new Date(today);
                    last7Days.setDate(today.getDate() - 7);
                    let urlWithParams = fetchGetObservationsUrl(feature.properties.id, last7Days, today)

                    d3.csv(urlWithParams,
                        function (d) {
                            return { date: d3.timeParse('%Y-%m-%dT%H:%M:%S%Z')(d.datetime), value: d.value, typeOfMeasurement: d.typeofmeasurement }
                            //return { date: d3.timeParse('%Y-%m-%d')(d.date), value: d.value }
                        }).then(
                            // Now I can use this dataset:
                            function (data) {

                                console.log("csv read")
                                console.log("Number of rows:", data.length);

                                var errorDiv = document.getElementById("errorDiv");
                                if (data.length === 0) {
                                    showVizCards(false)
                                    displayNoDataError(errorDiv, true)

                                }
                                else {
                                    showVizCards(true)
                                    displayNoDataError(errorDiv, false)
                                    hideVizLoadingSpinner("viz-week-spinner")
                                    plotLineChart(data, "#viz-week")
                                }
                            }


                        )
                })


}


function loadGeojsonMap(geojsonData) {

    function onEachFeature(feature, layer) {
        if (feature.properties) {
            const htmlStrings = Object.entries(feature.properties).map(([key, value]) => `
            <strong>${key}:</strong> ${value}<br/>
          `);

            // Join the HTML strings to form a complete HTML string
            const htmlString = htmlStrings.join('');

            let datepicker_form = '<form id="dateForm"> \
            <button type="submit">Show Observations</button> \
            </form>'


            let popupContent = htmlString + datepicker_form
            //bind popup to layer
            layer.bindPopup(popupContent)

            // in the on click event of marker, add click event listener to button in popup
            layer.on('click', function (event) {
                //event.preventDefault(); L.DomEvent.stopPropagation(event);
                console.log("onclick marker")
                const form = document.getElementById('dateForm');
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
function createMap() {
    map = L.map('map').setView(map_center, 13);
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
                item.properties.show_on_map = false
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
createMap();
