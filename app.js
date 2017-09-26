// This is where our souce code for the weather app logic will be stored

"use strict";

searchButton.addEventListener('click', searchWeather); // --> setup an event listner to run the searchWeather function when the button is clicked

function searchWeather() {
    console.log(searchCity.value);
}