// // Author: Aman Arabzadeh
// Inspired by these three source:
// https://developer.mozilla.org/
// https://openweathermap.org/    <===== // API is take from here, you need to register for
// https://www.latlong.net/

const clock = document.querySelector(".digits"); // get the class
const date = document.querySelector(".date"); // get the class
const tempElement = document.querySelector(".temp");
const lat = document.getElementById("lat");
const lon = document.getElementById("lon");
let cityName = "Sundsvall";
// let cityName = prompt("Enter city name: ");
const API_KEY = "b4ffac792f84197b4860a24d827f5454";
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  cityName +
  "&appid=" +
  API_KEY +
  "&units=metric";

// Update the time every second
setInterval(() => {
  // Get the current time
  const now = new Date();

  // Format the time as hours, minutes, and seconds, substring the useless part
  // take two digits of time.
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  // Display the time on the clock
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}, 1000); // delay 1 second

// Make an HTTP request to retrieve the temperature data
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const Latitude = "Latitude: " + data.coord.lat;
    const Longitude = "Longitude: " + data.coord.lon;
    // console.log("Latitude  is: " + data.coord.lat);
    // console.log("Longitude is: " + data.coord.lon);
    // Update the temperature display with the current temperature
    const temperature = data.main.temp;
    //  toFixed() converts a number to a string, rounded to a specified number of decimals:
    tempElement.textContent = `Temperature in ${cityName} is:  ${temperature.toFixed()}°C `;
    lat.textContent = Latitude;
    lon.textContent = Longitude;
  })
  .catch((error) => {
    console.error("An error occurred while retrieving temperature data", error);
    tempElement.textContent = "Unable to retrieve temperature";
  });
