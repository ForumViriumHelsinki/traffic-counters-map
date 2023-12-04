const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Import the CORS middleware
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

const app = express();
const port = 4000;
const host = '0.0.0.0';

app.use(express.static('public'));
// Enable CORS for all routes
app.use(cors());
app.use(express.json());

counter_url = 'https://lidotiku.api.dev.hel.ninja/api/counters';




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
        const queryParams = { order: '-datetime', pagesize: 1, counter: req.params.id };
        queryParams["start-date"] = req.query.start_date
        queryParams["end-date"] = req.query.end_date

        const url = 'https://lidotiku.api.dev.hel.ninja/api/observations'
        // Convert the query parameters object into a URL-encoded string
        const queryString = new URLSearchParams(queryParams).toString();
        const urlWithQuery = `${url}?${queryString}`;
        console.log(urlWithQuery)
        const response = await axios.get(urlWithQuery);
        res.json(response.data);
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
