const date = new Date().getFullYear()

window.onload = function setDate() {
    document.getElementById('date').innerHTML = date;
}