var geo = document.getElementById("geoloc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    geo.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  geo.innerHTML = "Gjeresia gjeografike: " + position.coords.latitude + 
  "<br>Gjatesia gjeografike: " + position.coords.longitude;
  
  
}

