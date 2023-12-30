import { addCounterIdGoBtnEventListener } from "./event-listeners.js";
import { validateTimeWIndowInput } from "./time-input.js";

/**
 * sets up event listeners to validate for the counter id input field and timewindow in the UI
 */
export function setupCounterIdForm() {
  // Setup counter form and add event listeners
  const counterIdForm = document.getElementById("counterIdForm");
  const numericInput = document.getElementById("numericInput");
  const errorMessage = document.getElementById("errorMessage");

  if (counterIdForm) {
    counterIdForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
      if (!/^\d+$/.test(numericInput.value)) {
        errorMessage.textContent = "Enter a valid numeric counter ID.";
      } else if (!validateTimeWIndowInput()) {
        // check if time window is valid
        return;
      } else {
        // counter id is valid and time window is valid
        errorMessage.textContent = ""; // Clear error message if input is valid
        const counterId = Number(numericInput.value);
        addCounterIdGoBtnEventListener(counterId);
      }
    });
  }
}

/**
 * sets the counter id to the input field
 * @param {string} id
 */
export function setCounterIdToInputField(id) {
  const numericInput = document.getElementById("numericInput");
  numericInput.value = id;
}
