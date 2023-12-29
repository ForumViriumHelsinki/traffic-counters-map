



export function getAllCheckboxes() {
    return document.querySelectorAll('.filter-checkbox')
}


export function uncheckAllCheckboxes() {
    // Get all elements with the class "filter-checkboxes"
    const checkboxes = document.querySelectorAll('.filter-checkbox');
    // Uncheck all checkboxes
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}