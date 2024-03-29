const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import the CORS middleware
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const path = require("path");

const webpackConfig = require("../webpack.config");

const app = express();
const port = 8080;
const host = "0.0.0.0";

app.use(express.static("public"));
// Enable CORS for all routes
app.use(cors());
app.use(express.json());

const counterUrl = "https://lidotiku.api.dev.hel.ninja/api/counters";
const observationsUrl = "https://lidotiku.api.dev.hel.ninja/api/observations";

/**
 * function to get the first timestamp from an ordered response
 * @param {*} url
 * @param {*} queryParams
 * @returns
 */
async function getFirstTimestampFromResponse(url, queryParams) {
  const queryString = new URLSearchParams(queryParams).toString();
  const urlWithQuery = `${url}?${queryString}`;
  //console.log("urlWithQuery " + urlWithQuery);
  const response = await axios.get(urlWithQuery);
  if (response.status != 200) {
    return { message: "error" };
  } else if (!response.data) {
    return { message: "error" };
  } else if (response.data["count"] == 0) {
    return { message: "no data collected" };
  } else {
    return {
      message: "success",
      date: response.data["results"][0]["datetime"],
    };
  }
}

/**
 * function to get paginated data from an api
 * @param {*} url
 * @param {*} queryParams
 * @param {*} totalPages
 * @returns
 */
async function fetchPaginatedData(url, queryParams, totalPages) {
  const dataPromises = [];

  for (let page = 1; page <= totalPages; page++) {
    queryParams["page"] = page;
    const queryString = new URLSearchParams(queryParams).toString();
    const urlWithQuery = `${url}?${queryString}`;
    // console.log("urlWithQuery " + urlWithQuery)
    const response = await axios.get(urlWithQuery, {
      responseType: 'text' // to handle the text response
    });
    const csvData = response.data;

    // Log request headers
    // console.log(response.config.headers);
    // Log response headers
    // console.log(response.headers);

    // Remove header row for pages other than the first one
    const rows = csvData.split("\n");
    if (page > 1) {
      rows.shift(); // Remove the first row (header)
    }

    dataPromises.push(rows.join("\n"));
  }

  return Promise.all(dataPromises);
}

/**
 * route to get counters data from an api
 */
app.get("/api/counters", async (req, res) => {
  console.log("counters api called");
  try {
    const queryParams = { format: "json" };
    const url = counterUrl;
    //console.log(url);
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

/**
 * route to get timeframe data from an api
 * achieves this by getting the first timestamp from a descending ordered response and ascending ordered response
 */
app.get("/api/observations/timeframe/:id", async (req, res) => {
  try {
    //datetime desc
    const queryParams = {
      format: "json",
      order: "-datetime",
      counter: req.params.id,
    };
    // latest timestamp
    let response = await getFirstTimestampFromResponse(
      observationsUrl,
      queryParams,
    );
    // console.log(response);
    let firstTimeStamp = "";
    let lastTimeStamp = "";
    if (response.message !== "success") {
      res.status(200).json({ message: response.message });
      return;
    } else {
      lastTimeStamp = response.date;
      // earliest timestamp by ordering in ascending order
      queryParams["order"] = "datetime";
      response = await getFirstTimestampFromResponse(
        observationsUrl,
        queryParams,
      );
      //   console.log(response);
      if (response.message !== "success") {
        res.status(200).json({ message: response.message });
        return;
      } else {
        firstTimeStamp = response.date;
      }
    }

    // console.log(firstTimeStamp);
    // console.log(lastTimeStamp);
    res.status(200).json({
      message: "success",
      firstTimeStamp: firstTimeStamp,
      lastTimeStamp: lastTimeStamp,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

/**
 * route to get observations data from an api
 */
app.get("/api/observations/:id", async (req, res) => {
  let totalPages;
  try {
    // format: 'json'
    const queryParams = { order: "-datetime", counter: req.params.id };
    queryParams["start_date"] = req.query.startDate;
    queryParams["end_date"] = req.query.endDate;
    queryParams["format"] = "json";

    const url = observationsUrl;
    // Convert the query parameters object into a URL-encoded string
    const queryString = new URLSearchParams(queryParams).toString();
    const urlWithQuery = `${url}?${queryString}`;
    const response = await axios.get(urlWithQuery);
    // Max pagesize is currently 10000 on API side
    pagesize = 10000;
    if (response.data && response.data["count"] !== 0) {
      totalPages = Math.ceil(response.data["count"] / pagesize);
      //console.log("total pages" + totalPages);
      queryParams["format"] = "csv";
      queryParams["page_size"] = pagesize;
      data = await fetchPaginatedData(url, queryParams, totalPages);
      //console.log(data)

      // Set headers for CSV download
      res.setHeader("Content-Type", "text/csv");
      res.setHeader("Content-Disposition", "attachment; filename=data.csv");
      //res.send(data);
      res.send(data.join("\t"));
    } else {
      res.setHeader("Content-Type", "text/csv");
      // Return an empty CSV response
      csv_data = "Column1,Column2,Column3\n";
      res.send(csv_data);
    }
  } catch (error) {
    console.error("Error ::", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

// Serve static files from the 'public' directory
app.use(express.static("public"));

// Webpack middleware for development
if (process.env.NODE_ENV === "development") {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    }),
  );
  app.use(webpackHotMiddleware(compiler));
}

// Serve the index.html file for all other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
