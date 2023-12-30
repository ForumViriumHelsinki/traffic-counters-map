/**
 * @module checkdoxes contains functions related to checkboxes.
 */
import { addCheckboxEventListener } from "./event-listeners.js";

export function getAllCheckboxes() {
  return document.querySelectorAll(".filter-checkbox");
}

export function uncheckAllCheckboxes() {
  // Get all elements with the class "filter-checkboxes"
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  // Uncheck all checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}

export function setupCheckboxListeners() {
  const checkboxes = getAllCheckboxes();
  // Add a click event listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", function () {
      const clickedId = checkbox.id;

      addCheckboxEventListener(checkbox);
    });
  });
}
