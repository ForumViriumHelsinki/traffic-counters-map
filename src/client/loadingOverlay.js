export function showLoadingSpinner() {
    console.log("showLoadingSpinner")
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'flex';
}
export function hideLoadingSpinner() {
    console.log("hideLoadingSpinner")
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}
