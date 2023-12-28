/**
 * Module for fetching data from the LIDO TIKU API via a proxy server.
 * @module api-data
 */

import * as d3 from "d3";

const counterUrl = "/api/counters";
const observationsUrl = "/api/observations-latest/";

/**
 * Fetches CSV observations data from the API.
 * @param {string} urlWithParams - The URL with parameters for fetching CSV data.
 * @returns {Promise<Observation[]>} A Promise that resolves to an array of observation data.
 * @throws {Error} If there is an error loading the CSV file.
 */
export async function fetchCsvObservations(urlWithParams) {
  try {
    const data = await d3.csv(
      urlWithParams,
      //parse the received csv data into required format
      function (d) {
        return {
          date: d3.timeParse("%Y-%m-%dT%H:%M:%S%Z")(d.datetime),
          value: +d.value,
          typeOfMeasurement: d.typeofmeasurement,
          direction: d.direction,
        };
      },
    );

    return data;
  } catch (error) {
    console.error("Error loading CSV file:", error);
    throw error;
  }
}

/**
 * Fetches counters data from the API.
 * @returns {Promise<GeoJSON>} A Promise that resolves to GeoJSON data with counter features.
 * @throws {Error} If there is an error fetching the data.
 */
export async function fetchCountersData() {
  try {
    const response = await fetch(counterUrl);
    const geojson = await response.json();

    geojson.features = geojson.features.map((item) => {
      item.properties.show_on_map = true;
      return item;
    });
    console.log("fetched counters data");
    // console.log(geojson);
    return geojson;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

/**
 *
 * @param {Date} date
 * @returns {string} formatted date in YYYY-MM-DD format
 */
export function formatDate(date) {
  return date
    .toLocaleDateString("fi-FI", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .split(".")
    .reverse()
    .join("-");
}

/**
 *
 * @param {string} counterId
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns {string} url for fetching observations data from counterId between the specified dates
 */
export function fetchGetObservationsUrl(counterId, startDate, endDate) {
  // console.log("fetchGetObservationsUrl")
  // console.log("startDate " + startDate)
  // console.log("endDate " + endDate)

  let apiUrl = observationsUrl + counterId;
  const formattedStartDate = formatDate(startDate);
  console.log(formattedStartDate);

  const formattedEndDate = formatDate(endDate);
  console.log(formattedEndDate);

  const queryParams = {
    startDate: formattedStartDate,
    endDate: formattedEndDate,
  };
  let queryString = Object.keys(queryParams)
    .map((key) => `${key}=${encodeURIComponent(queryParams[key])}`)
    .join("&");
  let urlWithParams = `${apiUrl}?${queryString}`;

  // console.log(urlWithParams)

  return urlWithParams;
}
