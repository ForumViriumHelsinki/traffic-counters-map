import * as d3 from 'd3';

export function plotNew(data, divId) {

    const containerId = "#" + divId

    console.log("plotNew", containerId)

    if (data.length !== 0) {
        const allDirections = data.map(d => d.direction);
        const directions = [...new Set(allDirections)];


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



        // Set the dimensions and margins of the graph
        var margin = { top: 5, right: 10, bottom: 10, left: 25 },
            width = 600 - margin.left - margin.right,
            height = 350 - margin.top - margin.bottom;

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
            .call(xAxis.ticks(8));

        svg.append('g')
            .attr('class', 'y-axis')
            .call(yAxis);



        // Create a legend container
        var legendContainer = d3.select(containerId)
            .append('div')
            .attr('class', 'legend-container');

        // Update legends for count data
        const countLegends = legendContainer.selectAll('.count-legend')
            .data(countData)
            .enter()
            .append('div')
            .attr('class', 'legend-item count-legend');

        countLegends.append('div')
            .attr('class', 'legend-color')
            .style('background-color', d => lineColorScale(d.direction));

        countLegends.append('div')
            .attr('class', 'legend-text')
            .text(d => d.direction + ' count');

        // Update legends for speed data
        const speedLegends = legendContainer.selectAll('.speed-legend')
            .data(speedData)
            .enter()
            .append('div')
            .attr('class', 'legend-item speed-legend');

        speedLegends.append('div')
            .attr('class', 'legend-color')
            .style('background-color', d => scatterColorScale(d.direction));

        speedLegends.append('div')
            .attr('class', 'legend-text')
            .text(d => d.direction + ' speed');
    }
}


export function removeSVG() {
    // Check if the SVG element exists and remove if yes
    for (let i = 0; i < 6; i++) {
        const svgSelection = d3.select('svg');
        if (!svgSelection.empty()) {
            // Remove the SVG element
            console.log("remove svg in bringUpMeasurementsOverlay ")
            svgSelection.remove();
        }
    }
}