import { formatDate } from "./api-data";

let selectedStartDate = null;
let selectedEndDate = null;

/**
 * Sets up the default time window to be the last 60 days from the current date
 * on the datepicker elements in the UI
 */
export function setUpDefaultTimeWindow() {
  // Get the current date
  const currentDate = new Date();
  const formattedEndDate = formatDate(currentDate);
  document.getElementById("endDate").value = formattedEndDate;

  let defaultStartDate = new Date(currentDate);
  defaultStartDate.setDate(currentDate.getDate() - 60);
  const formattedStartDate = formatDate(defaultStartDate);
  document.getElementById("startDate").value = formattedStartDate;

  selectedEndDate = currentDate;
  selectedStartDate = defaultStartDate;
}

/**
 * sets up event listeners to validate for the datepicker elements in the UI
 * runs validation
 */
export function setUpTimeInputListeners() {
  const startDate = document.getElementById("startDate");
  const endDate = document.getElementById("endDate");
  const errorMessage = document.getElementById("errorMessage");

  startDate.addEventListener("change", function () {
    selectedStartDate = new Date(startDate.value);
    validateTimeWIndowInput();
  });

  endDate.addEventListener("change", function () {
    selectedEndDate = new Date(endDate.value);
    validateTimeWIndowInput();
  });
}

/**
 * validates the time window input - if start date is greater than end date or if a date is not selected
 */
export function validateTimeWIndowInput() {
  const errorMessage = document.getElementById("errorMessage");
  if (selectedStartDate == null || selectedEndDate == null) {
    errorMessage.textContent = "Please select start and end date";
    return false;
  } else {
    if (selectedStartDate > selectedEndDate) {
      errorMessage.textContent = "Selected start date greater than end date";
      return false;
    } else {
      return true;
    }
  }
}

/**
 *
 * @returns {object} object with start date and end date of the selected time window
 */
export function getSelectedTimeWindow() {
  return { startDate: selectedStartDate, endDate: selectedEndDate };
}

/**
 *
 * @returns {string} string with start date and end date of the selected time window
 */

export function getSelectedTimeWindowText() {
  const dateToString = (date) => date.toISOString().slice(0, 10); // Format the date as "YYYY-MM-DD"
  return (
    dateToString(selectedStartDate) + " - " + dateToString(selectedEndDate)
  );
}
