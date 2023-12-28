/**
 * Module for updating geojson data.
 * @module geojson-modifier
 */

/**
 * Updates geojson data with checkbox selection:
 * goes through all the features in geojson data and updates the show_on_map property to true if the source property matches the checkbox id
 * and the checkbox is checked
 * @param {GeoJSON} geojsonData - GeoJSON data with counter features.
 * @param {HTMLInputElement} checkbox - The checkbox element.
 * @returns {GeoJSON} GeoJSON data with updated show_on_map property.
 *
 */
export function updateGeojsonWithCheckboxSelection(geojsonData, checkbox) {
  console.log("update geojson Data after checkbox selection");
  let source;
  geojsonData.features = geojsonData.features.map((item) => {
    source = item.properties.source.toLowerCase();
    if (source.startsWith("harbor")) {
      source = "infotripla";
    }
    if (source === checkbox.id) {
        item.properties.show_on_map = checkbox.checked
    }
    return item;
  });
  return geojsonData;
}

/**
 * sets the show_on_map property to true for the feature with the given counter id and false for all other features
 * @param {GeoJSON} geojsonData
 * @param {string} counterId
 * @returns {GeoJSON} GeoJSON data with updated show_on_map property.
 */
export function updateGeojsonWithCounterIdSelection(geojsonData, counterId) {
  console.log("update geojson data after counter id input");

  geojsonData.features = geojsonData.features.map((item) => {
    let id = item.properties.id;
    item.properties.show_on_map = false;
    if (id === counterId) {
      item.properties.show_on_map = true;
    }
    return item;
  });
  return geojsonData;
}
