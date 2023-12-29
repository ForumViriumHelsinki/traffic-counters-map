
let selectedStartDate = null
let selectedEndDate = null

export function setUpDefaultTimeWindow() {

    // Get the current date
    const currentDate = new Date();
    const formattedEndDate = currentDate.toISOString().slice(0, 10);// Format the date as "YYYY-MM-DD"
    document.getElementById('endDate').value = formattedEndDate;

    let defaultStartDate = new Date(currentDate);
    defaultStartDate.setDate(currentDate.getDate() - 60);
    const formattedStartDate = defaultStartDate.toISOString().slice(0, 10);// Format the date as "YYYY-MM-DD"
    document.getElementById('startDate').value = formattedStartDate;

    selectedEndDate = currentDate
    selectedStartDate = defaultStartDate

}

export function setUpTimeInputListeners() {

    const startDate = document.getElementById('startDate');
    const endDate = document.getElementById('endDate');
    const errorMessage = document.getElementById('errorMessage');

    startDate.addEventListener('change', function () {
        selectedStartDate = new Date(startDate.value);
        validateTimeWIndowInput()
    });

    endDate.addEventListener('change', function () {
        selectedEndDate = new Date(endDate.value);
        validateTimeWIndowInput()
    });

}

export function validateTimeWIndowInput() {

    const errorMessage = document.getElementById('errorMessage');
    if (selectedStartDate == null || selectedEndDate == null) {
        errorMessage.textContent = "Please select start and end date"
        return false
    }
    else {
        if (selectedStartDate > selectedEndDate) {
            errorMessage.textContent = "Selected start date greater than end date"
            return false
        }
        else {
            return true
        }
    }

}

export function getSelectedTimeWindow() {
    return { "startDate": selectedStartDate, "endDate": selectedEndDate }
}