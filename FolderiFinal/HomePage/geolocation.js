var geo = document.getElementById("geoloc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    geo.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  g.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}