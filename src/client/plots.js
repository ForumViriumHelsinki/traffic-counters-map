import * as d3 from "d3";


/**
 * plots multi line chart for the given data
 * filters data based on type of measurement (speed/count) and direction
 * plots line for each direction and each type of measurement
 * generates legends for each type of measurement and direction
 * @param {*} data
 * @param {*} divId
 */
function plotMultiLineChart(data, divId) {
  const containerId = "#" + divId;
  const containerWidth = 460;
  const containerHeight = 350;
  // Set the dimensions and margins of the graph
  var margin = { top: 5, right: 10, bottom: 10, left: 20 };
  var width = containerWidth - margin.left - margin.right;
  var height = containerHeight - margin.top - margin.bottom;

  // Append the SVG object to the body of the page
  var svg = d3
    .select(containerId)
    .append("svg")
    .attr("width", containerWidth)
    .attr("height", containerHeight)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Define scales and axes
  const xScale = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  // Set domains for scales based on the whole data
  xScale.domain(d3.extent(data, (d) => d.date));
  yScale.domain([0, d3.max(data, (d) => Math.max(+d.value))]);

  // Define a line generator
  const line = d3
    .line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(+d.value));


  if (data.length !== 0) {
    const allDirections = data.map((d) => d.direction);
    const directions = [...new Set(allDirections)];

    let speedData = [];
    let countData = [];

    // Iterate through unique directions using forEach
    directions.forEach((direction, index) => {
      // Filter speed data for the current direction
      let filteredSpeed = data.filter(
        (item) =>
          item.typeOfMeasurement === "speed" && item.direction === direction,
      );

      //plot speed line for the current direction
      plotLine(
        svg,
        line,
        filteredSpeed,
        direction,
        "speed",
        getSpeedColorScale(directions),
      );

      speedData.push({
        direction: direction,
        data: filteredSpeed,
      });

      // Filter count data for the current direction
      let filteredCount = data.filter(
        (item) =>
          item.typeOfMeasurement === "count" && item.direction === direction,
      );

      //plot count line for the current direction
      plotLine(
        svg,
        line,
        filteredCount,
        direction,
        "count",
        getCountColorScale(directions),
      );




      countData.push({
        direction: direction,
        data: filteredCount,
      });

    });

    // Add X and Y axes
    svg.append("g").attr("class", "x-axis").call(xAxis.ticks(8));
    svg.append("g").attr("class", "y-axis").call(yAxis);

    const legendContainer = d3.select(containerId).append("div").attr("class", "legend-container");



    updateLegend(legendContainer, countData, getCountColorScale(directions), "count");
    updateLegend(legendContainer, speedData, getSpeedColorScale(directions), "speed");
  }
}


/**
 * plots line based on the given line generater, data, direction, text and color scale
 * @param {*} svg
 * @param {*} line
 * @param {*} data
 * @param {*} direction
 * @param {*} text
 * @param {*} colorScale
 */
function plotLine(svg, line, data, direction, text, colorScale) {
  let class_name = "line line-" + text + "-" + direction;

  svg
    .append("path")
    .data([data])
    .attr("class", class_name)
    .attr("d", line)
    .attr("fill", "none")
    .style("stroke", colorScale(direction));
}

/**
 * generates legends for data
 * @param {*} legendContainer
 * @param {*} data
 * @param {*} colorScale - predefined color scale for the data
 * @param {*} text - indicating count or speed ie context of the legend
 */
function updateLegend(legendContainer, data, colorScale, text) {
  let legendClass = text + "-legend";
  // Update legends for count data
  const countLegends = legendContainer
    .selectAll("." + legendClass)
    .data(data)
    .enter()
    .append("div")
    .attr("class", "legend-item " + legendClass);

  countLegends
    .append("div")
    .attr("class", "legend-color")
    .style("background-color", (d) => colorScale(d.direction));

  countLegends
    .append("div")
    .attr("class", "legend-text")
    .text((d) => d.direction + " " + text);
}

/**
 *
 * @returns color scale for count data
 */
function getCountColorScale(directions) {
  // Create a color scale based on the number of directions
  const colorScale = d3
    .scaleOrdinal()
    .domain(directions)
    .range(["blue", "green"]);

  return colorScale;
}

/**
 *
 * @returns color scale for speed data
 */
function getSpeedColorScale(directions) {
  // Create a color scale based on the number of directions
  const colorScale = d3
    .scaleOrdinal()
    .domain(directions)
    .range(["red", "orange"]);

  return colorScale;
}

/**
 * function used to remove SVG elements from the DOM before appending new ones for new visualizations
 */

export function removeSVG() {
  // Check if the SVG element exists and remove if yes
  for (let i = 0; i < 6; i++) {
    const svgSelection = d3.select("svg");
    if (!svgSelection.empty()) {
      // Remove the SVG element
      console.log("remove svg in bringUpMeasurementsOverlay ");
      svgSelection.remove();
    }
  }
}

/**
 * returns filtered data based on time window
 * @param {*} data
 * @param {*} startTime
 * @param {*} EndTime
 * @returns
 */
function filterTimeSeriesData(data, startTime, EndTime) {
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate > startTime && itemDate <= EndTime;
  });

  return filteredData;
}

/**
 * calls plot on data after filtering based on time window upto Current = Now
 * @param {*} data
 * @param {*} noOfDaysAgo
 * @param {*} noOfHoursAgo
 * @param {*} containerId
 * @param {*} timeWindoText
 */
export function filterAndPlotDataUptoNow(
  data,
  noOfDaysAgo,
  noOfHoursAgo,
  containerId,
  timeWindoText,
) {
  //find time boundaries
  const today = new Date();
  const pastDate = new Date();
  pastDate.setDate(today.getDate() - noOfDaysAgo);
  pastDate.setHours(today.getHours() - noOfHoursAgo);

  filterAndPlotDataInTimeWindow(
    data,
    pastDate,
    today,
    containerId,
    timeWindoText,
  );
}

/**
 * calls plot on data after filtering based on time window
 * @param {*} data
 * @param {*} startDate
 * @param {*} endDate
 * @param {*} containerId
 * @param {*} timeWindoText
 */
export function filterAndPlotDataInTimeWindow(
  data,
  startDate,
  endDate,
  containerId,
  timeWindoText,
) {
  const filteredData = filterTimeSeriesData(data, startDate, endDate);
  plotFilteredData(filteredData, containerId, timeWindoText);
}

/**
 * calls plot after filtering data based on time window
 * and displays a message about the time window
 * @param {Array} data
 * @param {string} containerId
 * @param {string} timeWindoText
 */
function plotFilteredData(data, containerId, timeWindoText) {
  const infoDiv = document.getElementById(containerId);
  if (data.length == 0) {
    infoDiv.innerHTML =
      "<p>   No Data received in the Time Frame: " + timeWindoText + "</p>";
  } else {
    infoDiv.innerHTML =
      "<p>   Data received in the Time Frame: " + timeWindoText + "</p>";
    plotMultiLineChart(data, containerId);
  }
}
