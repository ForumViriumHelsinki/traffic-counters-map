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



function showLoadingSpinner() {
    const overlay = document.getElementById('overlay');
    console.log("show loading spinner")
    overlay.style.display = 'flex';
}
function hideLoadingSpinner() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
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

    // Get all elements with the class "viz"
    let vizcards = document.querySelectorAll('.viz');
    console.log(vizcards)
    // toggle hidden
    vizcards.forEach(card => {
        console.log("toggle")
        card.style.display = 'none'
    });

function updateGeojsonWithCheckboxSelection(geojsonData, checkbox) {
    //console.log("update map after checkbox selection")
    ////console.log(geojsonData)
    let source;
    geojsonData.features = geojsonData.features.map((item) => {
        ////console.log("print source")
        //console.log(item.properties.source.toLowerCase())
        source = item.properties.source.toLowerCase()
        ////console.log(source)
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

function plotLineChart(data, containerId) {

    // set the dimensions and margins of the graph
    var margin = { top: 5, right: 15, bottom: 15, left: 30 },
        width = 230 - margin.left - margin.right,
        height = 200 - margin.top - margin.bottom;

    const svgSelection = d3.select('svg');

    // // Check if the SVG element exists
    // if (!svgSelection.empty()) {
    //     // Remove the SVG element
    //     console.log("remove svg")
    //     svgSelection.remove();
    // }

    console.log(d3.select(containerId))
    // append the svg object to the body of the page
    var svg = d3.select(containerId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    var x = d3.scaleTime()
        .domain(d3.extent(data, function (d) {
            return d.date;
        }))
        .range([0, width]);
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    //console.log("y axis")
    // Add Y axis
    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function (d) { return +d.value; })])
        .range([height, 0]);
    svg.append("g")
        .call(d3.axisLeft(y));
    console.log("line")
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


}

function bringUpMeasurementsOverlay(feature, urlWithParams) {




    //Read the data
    //d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/3_TwoNumOrdered_comma.csv",

    showLoadingSpinner()


    // Check if the SVG element exists

    for (let i = 0; i < 5; i++) {
        console.log("svg")
        const svgSelection = d3.select('svg');
        console.log(svgSelection)
        if (!svgSelection.empty()) {
            // Remove the SVG element
            console.log("remove svg")
            svgSelection.remove();
        }
    }

    // Get all elements with the class "viz"
    let vizcards = document.querySelectorAll('.viz');
    console.log(vizcards)
    // toggle hidden
    vizcards.forEach(card => {
        console.log("toggle")
        card.style.display = 'block'
    });

    d3.csv(urlWithParams,

        // When reading the csv, I must format variables:
        function (d) {
            //console.log("getting data")
            //console.log(d)
            return { date: d3.timeParse('%Y-%m-%dT%H:%M:%S%Z')(d.datetime), value: d.value }
            //return { date: d3.timeParse('%Y-%m-%d')(d.date), value: d.value }
        }).then(


            // Now I can use this dataset:
            function (data) {

                hideLoadingSpinner()
                //console.log("dataset parsed")
                //console.log("x axis")
                //console.log(data)
                // Add X axis --> it is a date format

                // Get the current date
                const currentDate = new Date();

                // Filter for today
                const todayData = data.filter(item => {
                    const itemDate = new Date(item.date);
                    return itemDate.toDateString() === currentDate.toDateString();
                });

                console.log('Today:', todayData);
                plotLineChart(todayData, "#viz-day")
                //console.log("chart done")

                // Filter for the last 7 days
                const last7DaysData = data.filter(item => {
                    const itemDate = new Date(item.date);
                    const sevenDaysAgo = new Date();
                    sevenDaysAgo.setDate(currentDate.getDate() - 7);
                    return itemDate >= sevenDaysAgo && itemDate <= currentDate;
                });

                //console.log('Last 7 days:', last7DaysData);
                plotLineChart(last7DaysData, "#viz-week")

                // Filter for the last 30 days
                const last30DaysData = data.filter(item => {
                    const itemDate = new Date(item.date);
                    const thirtyDaysAgo = new Date();
                    thirtyDaysAgo.setDate(currentDate.getDate() - 30);
                    return itemDate >= thirtyDaysAgo && itemDate <= currentDate;
                });

                console.log('Last 30 days:', last30DaysData);
                plotLineChart(last30DaysData, "#viz-month")

                // Filter for a year ago
                const oneYearAgoData = data.filter(item => {
                    const itemDate = new Date(item.date);
                    const oneYearAgo = new Date();
                    oneYearAgo.setFullYear(currentDate.getFullYear() - 1);
                    return itemDate >= oneYearAgo && itemDate <= currentDate;
                });

                //console.log('One year ago:', oneYearAgoData);
                plotLineChart(oneYearAgoData, "#viz-year")

            })


}


function loadGeojsonMap(geojsonData) {

    function onEachFeature(feature, layer) {
        // does this feature have a property named popupContent?
        ////console.log(feature.properties)
        if (feature.properties) {
            const htmlStrings = Object.entries(feature.properties).map(([key, value]) => `
            <strong>${key}:</strong> ${value}<br/>
          `);

            // Join the HTML strings to form a complete HTML string
            const htmlString = htmlStrings.join('');
            // add button element with unique id to popup
            //button = '<button id="popupButton' + feature.properties.id + '">Show Observations</button>'

            // let datepicker_form = '<form id="dateForm"> \
            // <label for="startDate">Start Date:</label> \
            // <input type="date" id="startDate" name="startDate" required><br> \
            // <span id="startDateError" style="color: red;"></span><br> \
            // <label for="endDate">End Date:</label> \
            // <input type="date" id="endDate" name="endDate" required> <br>\
            // <span id="endDateError" style="color: red;"></span><br> \
            // <button type="submit">Show Observations</button> \
            // </form>'

            let datepicker_form = '<form id="dateForm"> \
            <button type="submit">Show Observations</button> \
            </form>'


            let popupContent = htmlString + datepicker_form
            //bind popup to layer
            layer.bindPopup(popupContent)

            // in the on click event of marker, add click event listener to button in popup
            layer.on('click', function (event) {
                console.log("onclick")

                const form = document.getElementById('dateForm');
                // const startDateInput = document.getElementById('startDate'); // Get the input element
                // const startDateError = document.getElementById('startDateError'); // Get the error message element
                // const endDateInput = document.getElementById('endDate'); // Get the input element
                // const endDateError = document.getElementById('endDateError'); // Get the error message element


                // // Get the current date
                // const today = new Date();

                // // Format the date as "DD-MM-YYYY"
                // const formattedDate = today.toLocaleDateString('en-GB', {
                //     day: '2-digit',
                //     month: '2-digit',
                //     year: 'numeric',
                // }).split('/').reverse().join('-'); // Handle different date separator formats

                // // Set the default value of the date input
                // startDateInput.value = formattedDate;
                // endDateInput.value = formattedDate;


                // Add a click event to the form
                form.addEventListener('submit', function (event) {
                    // Handle the button click event here
                    // open observations in another tab
                    event.preventDefault();
                    console.log("onsubmit")
                    // let startDate = startDateInput.value;
                    // let endDate = endDateInput.value;
                    // //console.log(startDate)
                    // //console.log(endDate)
                    // // Define your URL parameters as key-value pairs
                    // let query_params = {
                    //     start_date: startDate,
                    //     end_date: endDate,
                    // };

                    // // Create a query string from the parameters
                    // let queryString = Object.keys(query_params)
                    //     .map(key => `${key}=${encodeURIComponent(query_params[key])}`)
                    //     .join('&');

                    let apiUrl = latest_obs_url + feature.properties.id
                    //let urlWithParams = `${apiUrl}?${queryString}`;
                    //console.log(urlWithParams)
                    ////console.log("call to bring up overlay")
                    console.log(apiUrl)
                    bringUpMeasurementsOverlay(feature, apiUrl)
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
            //console.log("fetched counters data")
            ////console.log(geojsonData)
            loadGeojsonMap(geojsonData);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Call the function to create the map
createMap();
