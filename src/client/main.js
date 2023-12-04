// main.js

// Import Leaflet and D3.js
import * as L from 'leaflet';
import * as d3 from 'd3';

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

        // const overlay = document.getElementById('overlay');
        // const dataVizContainer = document.getElementById('data-viz-container');

        // // Function to show the loading overlay
        // function showLoadingOverlay() {
        //     overlay.style.display = 'flex';
        // }

        // // Function to hide the loading overlay
        // function hideLoadingOverlay() {
        //     overlay.style.display = 'none';
        // }

        // // Function to toggle the overlay
        // function toggleOverlay() {
        //     event.stopPropagation();
        //     overlay.style.display = (overlay.style.display === 'none' || overlay.style.display === '') ? 'flex' : 'none';
        // }

        // showLoadingOverlay();
        //     // Add click event listener to the overlay to close it when clicked
        // overlay.addEventListener('click', toggleOverlay);

    });
});

function updateGeojsonWithCheckboxSelection(geojsonData, checkbox) {
    console.log("update map after checkbox selection")
    //console.log(geojsonData)
    let source;
    geojsonData.features = geojsonData.features.map((item) => {
        //console.log("print source")
        console.log(item.properties.source.toLowerCase())
        source = item.properties.source.toLowerCase()
        //console.log(source)
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

function bringUpMeasurementsOverlay(feature) {
    console.log("in overlay")
    console.log(feature)
    let apiUrl = latest_obs_url + feature.properties.id

    const centerCoordinates = feature.geometry.coordinates; // Assuming center is an array like [latitude, longitude]
    const svgWidth = 200; // Adjust the width of your SVG
    const svgHeight = 200; // Adjust the height of your SVG




    var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgElement.setAttribute('xmlns', "http://www.w3.org/2000/svg");
    svgElement.setAttribute('viewBox', "0 0 200 200");
    svgElement.innerHTML = '<rect width="200" height="200"/><rect x="75" y="23" width="50" height="50" style="fill:red"/><rect x="75" y="123" width="50" height="50" style="fill:#0013ff"/>';
    var svgElementBounds = [[map.getBounds().getSouth(), map.getBounds().getWest()], [map.getBounds().getNorth(), map.getBounds().getEast()]];
    console.log(svgElementBounds)
    L.svgOverlay(svgElement, svgElementBounds).addTo(map);



    // set the dimensions and margins of the graph
    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#viz")
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    //Read the data
    d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",

        // When reading the csv, I must format variables:
        function (d) {
            return { date: d3.timeParse("%Y-%m-%d")(d.date), value: d.value }
        },

        // Now I can use this dataset:
        function (data) {

            // Add X axis --> it is a date format
            var x = d3.scaleTime()
                .domain(d3.extent(data, function (d) { return d.date; }))
                .range([0, width]);
            svg.append("g")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.axisBottom(x));

            // Add Y axis
            var y = d3.scaleLinear()
                .domain([0, d3.max(data, function (d) { return +d.value; })])
                .range([height, 0]);
            svg.append("g")
                .call(d3.axisLeft(y));

            // Add the line
            svg.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-width", 1.5)
                .attr("d", d3.line()
                    .x(function (d) { return x(d.date) })
                    .y(function (d) { return y(d.value) })
                )

        })


    console.log("chart done")
}


function loadGeojsonMap(geojsonData) {

    function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
        //console.log(feature.properties)
        if (feature.properties) {
            const htmlStrings = Object.entries(feature.properties).map(([key, value]) => `
            <strong>${key}:</strong> ${value}<br/>
          `);

            // Join the HTML strings to form a complete HTML string
            const htmlString = htmlStrings.join('');
            // add button element with unique id to popup
            //button = '<button id="popupButton' + feature.properties.id + '">Show Observations</button>'
            let datepicker_form = '<form id="dateForm"> \
            <label for="startDate">Start Date:</label> \
            <input type="date" id="startDate" name="startDate" required><br> \
            <span id="startDateError" style="color: red;"></span><br> \
            <label for="endDate">End Date:</label> \
            <input type="date" id="endDate" name="endDate" required> <br>\
            <span id="endDateError" style="color: red;"></span><br> \
            <button type="submit">Show Observations</button> \
            </form>'

            let popupContent = htmlString + datepicker_form
            //bind popup to layer
            layer.bindPopup(popupContent)

            // in the on click event of marker, add click event listener to button in popup
            layer.on('click', function (event) {

                const form = document.getElementById('dateForm');
                const startDateInput = document.getElementById('startDate'); // Get the input element
                const startDateError = document.getElementById('startDateError'); // Get the error message element
                const endDateInput = document.getElementById('endDate'); // Get the input element
                const endDateError = document.getElementById('endDateError'); // Get the error message element


                // Get the current date
                const today = new Date();

                // Format the date as "DD-MM-YYYY"
                const formattedDate = today.toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                }).split('/').reverse().join('-'); // Handle different date separator formats

                // Set the default value of the date input
                startDateInput.value = formattedDate;
                endDateInput.value = formattedDate;


                // Add a click event to the form
                form.addEventListener('submit', function (event) {
                    // Handle the button click event here
                    // open observations in another tab
                    event.preventDefault();
                    let startDate = startDateInput.value;
                    let endDate = endDateInput.value;
                    console.log(startDate)
                    console.log(endDate)
                    // Define your URL parameters as key-value pairs
                    let query_params = {
                        start_date: startDate,
                        end_date: endDate,
                    };

                    // Create a query string from the parameters
                    let queryString = Object.keys(query_params)
                        .map(key => `${key}=${encodeURIComponent(query_params[key])}`)
                        .join('&');

                    let apiUrl = latest_obs_url + feature.properties.id
                    let urlWithParams = `${apiUrl}?${queryString}`;
                    console.log(urlWithParams)
                    //const newTab = window.open(urlWithParams, '_blank'); // Replace with the URL of the destination webpage
                    //newTab.focus(); // Optional: bring focus to the new tab
                    console.log("call to bring up overlay")
                    console.log(feature)
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

    fetch(counter_url)
        .then(response => response.json())
        .then(geojson => {
            geojson.features = geojson.features.map((item) => {
                item.properties.show_on_map = false
                return item
            });
            geojsonData = geojson; // Store the initial geojson data
            console.log("fetched counters data")
            //console.log(geojsonData)
            loadGeojsonMap(geojsonData);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to create the map
createMap();
