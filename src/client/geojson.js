export function updateGeojsonWithCheckboxSelection(geojsonData, checkbox) {
    console.log("update geojson Data after checkbox selection")
    let source;
    geojsonData.features = geojsonData.features.map((item) => {
        source = item.properties.source.toLowerCase()
        if (source.startsWith("harbor")) {
            source = "infotripla"
        }
        if (source === checkbox.id) {
            if (checkbox.checked) {
                item.properties.show_on_map = true;
            } else {
                item.properties.show_on_map = false;
            }
        }
        return item;
    });
    return geojsonData

}


export function updateGeojsonWithCounterIdSelection(geojsonData, counterId) {
    console.log("update geojson data after counter id input")

    geojsonData.features = geojsonData.features.map((item) => {

        let id = item.properties.id
        item.properties.show_on_map = false;
        if (id === counterId) {
            item.properties.show_on_map = true;
        }
        return item;
    });
    return geojsonData

}