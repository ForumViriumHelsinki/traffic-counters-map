




export function displayError(errorMessage) {

    // Display the error message in the specified div with id "errorDiv"
    let errorDiv = document.getElementById('errorDiv');
    if (errorDiv) {
            errorDiv.innerHTML = errorMessage;
    } else {
        console.error("Error div with id 'errorDiv' not found.");
    }

}

export function clearError() {

    // Clear the error message in the specified div with id "errorDiv"
    let errorDiv = document.getElementById('errorDiv');
    if (errorDiv) {
            errorDiv.innerHTML = "";
    } else {
        console.error("Error div with id 'errorDiv' not found.");
    }

}

export function displayCounterInfo(infoMessage) {

    // Display the info message in the specified div with id "infoDiv"
    let infoDiv = document.getElementById('counterInfoDiv');
    if (infoDiv) {
            infoDiv.innerHTML = infoMessage;
    } else {
        console.error("Info div with id 'infoDiv' not found.");
    }

}

export function clearCounterInfo() {

    // Clear the info message in the specified div with id "infoDiv"
    let infoDiv = document.getElementById('counterInfoDiv');
    if (infoDiv) {
            infoDiv.innerHTML = "";
    } else {
        console.error("Info div with id 'infoDiv' not found.");
    }

}
