const openStreetMapUrl = "https://nominatim.openstreetmap.org/reverse?lat={latitude}&lon={longitude}&format=json";

let openMeteoUrl = "https://api.open-meteo.com/v1/forecast?";
openMeteoUrl += "latitude={latitude}&"; // Remplace {latitude} par la valeur de latitude
openMeteoUrl += "longitude={longitude}&"; // Remplace {longitude} par la valeur de longitude
openMeteoUrl += "timezone=auto&"; // Fuseau horaire automatique
openMeteoUrl += "daily=sunrise,sunset,uv_index_max,uv_index_clear_sky_max&"; // Prévisions quotidiennes (lever/coucher du soleil, indice UV)
openMeteoUrl += "hourly=temperature_2m,relativehumidity_2m,windspeed_10m,winddirection_10m,weathercode,visibility,is_day&"; // Prévisions horaires (température, humidité, vitesse et direction du vent, code météo, visibilité, heure du jour)
openMeteoUrl += "current_weather=true"; // Inclut les informations météo actuelles

