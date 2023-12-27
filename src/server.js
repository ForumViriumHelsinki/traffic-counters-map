const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the CORS middleware
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const path = require('path');

const webpackConfig = require('../webpack.config');

const app = express();
const port = 3001;
const host = '0.0.0.0';

app.use(express.static('public'));
// Enable CORS for all routes
app.use(cors());
app.use(express.json());

counter_url = 'https://lidotiku.api.dev.hel.ninja/api/counters';


// Function to fetch paginated data
async function fetchPaginatedData(url, queryParams, totalPages) {
    const dataPromises = [];

    for (let page = 1; page <= totalPages; page++) {
        queryParams["page"] = page
        const queryString = new URLSearchParams(queryParams).toString();
        const urlWithQuery = `${url}?${queryString}`;
        console.log("urlWithQuery " + urlWithQuery)
        const response = await fetch(urlWithQuery);
        const csvData = await response.text();

        // Remove header row for pages other than the first one
        const rows = csvData.split('\n');
        if (page > 1) {
            rows.shift(); // Remove the first row (header)
        }

        dataPromises.push(rows.join('\n'));
    }

    return Promise.all(dataPromises);
}


// Define a route for fetching counters data
app.get('/api/counters', async (req, res) => {
    console.log("counters api called")
    try {
        const queryParams = { format: 'json' };
        const url = counter_url;
        console.log(url)
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

app.get('/api/observations-latest/:id', async (req, res) => {
    try {
        // format: 'json'
        const queryParams = { order: '-datetime', counter: req.params.id };
        queryParams["start_date"] = req.query.startDate
        queryParams["end_date"] = req.query.endDate
        console.log(req.params.id)
        queryParams["format"] = "json"

        const url = 'https://lidotiku.api.dev.hel.ninja/api/observations'
        // Convert the query parameters object into a URL-encoded string
        const queryString = new URLSearchParams(queryParams).toString();
        const urlWithQuery = `${url}?${queryString}`;
        console.log("urlWithQuery " + urlWithQuery)
        const response = await axios.get(urlWithQuery);
        //res.json(response.data);
        pagesize = 1000
        if (response.data && response.data["count"] != 0) {
            totalPages = Math.ceil((response.data["count"] / pagesize))
            console.log("total pages" + totalPages)

            // if (totalPages > 20) {
            //     // until we optimise the visualization, we limit the number of pages to 100
            //     totalPages = 20
            // }
            queryParams["format"] = "csv"
            queryParams["pagesize"] = pagesize
            data = await fetchPaginatedData(url, queryParams, totalPages)
            //console.log(data)

            // Set headers for CSV download
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', 'attachment; filename=data.csv');
            //res.send(data);
            res.send(data.join('\t'));

        } else {
            res.setHeader('Content-Type', 'text/csv');
            // Return an empty CSV response
            csv_data = 'Column1,Column2,Column3\n'
            res.send(csv_data);
        }

    } catch (error) {
        console.error('Error ::', error.message);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});


// Serve static files from the 'public' directory
app.use(express.static('public'));

// Webpack middleware for development
if (process.env.NODE_ENV === 'development') {
    const compiler = webpack(webpackConfig);
    app.use(
        webpackDevMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath,
        })
    );
    app.use(webpackHotMiddleware(compiler));
}

// Serve the index.html file for all other requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});


app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
