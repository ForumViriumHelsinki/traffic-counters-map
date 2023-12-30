import { clearCounterInfo } from "./info-err-load-display";

/**
 * shows up one clicked visualisation card and hides all other cards
 */
export function setUpVizCollapsibleBtnListeners() {
  // Add click event listeners to each button
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      const targetCollapse = document.getElementById(targetId);

      // Collapse all other elements except the one that is being clicked
      document.querySelectorAll(".collapse").forEach((collapse) => {
        if (collapse !== targetCollapse) {
          collapse.classList.remove("show");
        }
      });

      // Toggle the clicked element
      targetCollapse.classList.toggle("show");
    });
  });
}

/**
 * listener to the close button on the visualisation cards
 * closes the visualisation cards and clears counter info
 */
export function setCloseContainerBtnListener() {
  const closeContainerBtn = document.getElementById("closeContainerBtn");
  closeContainerBtn.addEventListener("click", function () {
    console.log("closeContainerBtn clicked");
    showVisualisationCards(false);
    clearCounterInfo();
  });
}

/**
 * show or hide visualisation
 * @param {*} show
 */
export function showVisualisationCards(show) {
  console.log(show);
  if (show === true) {
    document.getElementById("vizOverlay").style.display = "flex";
    document.getElementById("multiCollapseVizCustom").classList.add("show");
  } else {
    document.getElementById("vizOverlay").style.display = "none";
  }
}
