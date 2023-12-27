
import * as d3 from 'd3';
import { showLoadingSpinner, hideLoadingSpinner } from './loadingOverlay';
const counter_url = '/api/counters';

const latest_obs_url = '/api/observations-latest/';
const observations_url = 'http://lidotiku.api.dev.hel.ninja/api/observations/?counter=';
const observations_param = '&order=-datetime';

export function fetchGetObservationsUrl(counterId, startDate, endDate) {
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

export async function fetchCsvObservations(urlWithParams) {

    try {
        const data = await d3.csv(urlWithParams,
            function (d) {
                return { date: d3.timeParse('%Y-%m-%dT%H:%M:%S%Z')(d.datetime), value: +d.value, typeOfMeasurement: d.typeofmeasurement, direction: d.direction }
                //return { date: d3.timeParse('%Y-%m-%d')(d.date), value: d.value }
            })

        return data;
    } catch (error) {
        console.error('Error loading CSV file:', error);
        throw error; // You can rethrow the error or handle it as needed
    }
}


export async function fetchCountersData() {

    try {
        const response = await fetch(counter_url);
        const geojson = await response.json();

        geojson.features = geojson.features.map((item) => {
            item.properties.show_on_map = true;
            return item;
        });

        console.log("fetched counters data");
        console.log(geojson);
        return geojson;
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error
        throw error;
    }
}

function formatDate(date) {

    return date.toLocaleDateString('fi-FI', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).split('.').reverse().join('-');
}

