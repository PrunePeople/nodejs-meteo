"use strict";

// const api_url =
//   "https://nominatim.openstreetmap.org/reverse?lat={latitude}&lon={longitude}&format=json";

// Obtention des éléments HTML
const el_latitude = document.querySelector("#latitude");
const el_longitude = document.querySelector("#longitude");
const el_temperature = document.querySelector("#temperature");

// Démarrage de la géolocalisation
// Vérifie si la géolocalisation est disponible
if (navigator.geolocation) {
  // console.log("Geoloc OK")
  navigator.geolocation.getCurrentPosition(refreshPosition);
  navigator.geolocation.watchPosition(refreshPosition);
} else {
  alert("Geolocation is not supported by this browser.");
}

// Exécute refreshPosition lors d'un changement de géolocalisation
function refreshPosition(position) {
  console.log(position.coords.latitude, position.coords.longitude);

  // Rafraîchit les coordonnées dans le HTML
  el_latitude.innerText = position.coords.latitude;
  el_longitude.innerText = position.coords.longitude;

  // Remplace l'URL de l'API par les valeurs de latitude et de longitude
  let geolocation_url = openStreetMapUrl;
  geolocation_url = geolocation_url.replace(
    "{latitude}",
    position.coords.latitude
  ); // cherche le motif qui est entre {{ }} dans la chaîne d'origine et remplace le et tu le stocke dans url
  geolocation_url = geolocation_url.replace(
    "{longitude}",
    position.coords.longitude
  );

  let forecast_url = openMeteoUrl;
  forecast_url = forecast_url.replace("{latitude}", position.coords.latitude);
  forecast_url = forecast_url.replace("{longitude}", position.coords.longitude);
  // console.log(url);

  // Effectue une requête fetch vers l'URL de prévision météo
  fetch(forecast_url)
    .then((response) => response.json())
    .then((data) => {
      el_temperature.innerText = data.current_weather.temperature;
      console.log(data);
    });
}
