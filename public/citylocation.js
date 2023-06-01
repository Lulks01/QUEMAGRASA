export default
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Make API call to retrieve the city
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`)
        .then(response => response.json())
        .then(data => {
            var city = data.results[0].components.city;
            var locationText = document.getElementById("cidade");
            locationText.innerHTML = city;
        })
        .catch(error => {
            console.log(error);
            alert("Error retrieving the city.");
        });
}