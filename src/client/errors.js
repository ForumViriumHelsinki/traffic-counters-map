export function displayNoDataError(errorDiv, showErr) {

    let errMsg = "<p style='color: red;'>" + " No data received for this counter in the past month" + "</p>"
    displayError(errorDiv, showErr, errMsg)

}

export function displayTimeWindowError(errorDiv, showErr, errMsg) {

    let errhtml = "<p style='color: red;'>" + errMsg + "</p>"
    displayError(errorDiv, showErr, errhtml)

}


export function displayError(errorDiv, showErr, errorMessage) {

    // Display the error message in the specified div with id "errorDiv"
    if (errorDiv) {
        if (showErr) {
            errorDiv.innerHTML = errorMessage;
        }
        else {
            errorDiv.innerHTML = "";
        }
    } else {
        console.error("Error div with id 'errorDiv' not found.");
    }

}