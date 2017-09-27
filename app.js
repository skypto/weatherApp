// This is where our souce code for the weather app logic will be stored

"use strict";

searchButton.addEventListener('click', searchWeather); // --> setup an event listner to run the searchWeather function when the button is clicked

function searchWeather() {
   // console.log(searchCity.value); --> for checking if our code works on button click
   var cityName = searchCity.value;
   loadingText.style.display = 'block';

   weatherBox.style.display = 'none';
   
   //Step for input validation to ensure user enters a input before pressing the button. trim() takes care of white spaces
   if (cityName.trim().length == 0){
        return alert('Please enter a City Name');
   }
   //steps below are used for making a call to our Weather Api
   var http = new XMLHttpRequest;
   var apiKey = 'e53a82e48ef02470deb06699e9b7e8e1';
   var url = 'http://api.openweathermap.org/data/2.5/weather?q='+cityName +'&units=metic&APPID='+apiKey;
   var method = 'GET';

   http.open(method, url);
   http.onreadystatechange= function(){
       if (http.readyState == XMLHttpRequest.DONE &&  http.status === 200){
                // logic for the weather extraction from the http request
                var data = JSON.parse(http.responseText);    //--> JSON.parse changes the response from the api from string to Object
                var weatherData = new Weather(cityName, data.weather[0].description.toUpperCase());  //this is the constructor we setup in weather-data.js
                weatherData.temperature = data.main.temp;
               // console.log (weatherData); // will display the result in debugger (chrome dev tools)
               updateWeather(weatherData);  // perform an update to the dom with this function
       }else if (http.readyState == XMLHttpRequest.DONE &&  http.status !== 200){
           alert('Something went wrong!'); 
       }
   };
   http.send();
}


function updateWeather (weatherData){
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;

    loadingText.style.display = 'none'; //hide loading before displaying the weather box
    weatherBox.style.display = 'block';
}




/* -->
sample 'http.responseText' looks like below: (returns a string)

"{\"coord\":{\"lon\":4.35,\"lat\":50.85},\"weather\":[{\"id\":800,\"main\":\"Clear\",\"description\":\"clear sky\",\"icon\":\"01d\"}],\"base\":\"stations\",\"main\":{\"temp\":290.31,\"pressure\":1022,\"humidity\":77,\"temp_min\":289.15,\"temp_max\":292.15},\"visibility\":10000,\"wind\":{\"speed\":1.5,\"deg\":160},\"clouds\":{\"all\":0},\"dt\":1506506100,\"sys\":{\"type\":1,\"id\":4842,\"message\":0.0139,\"country\":\"BE\",\"sunrise\":1506490646,\"sunset\":1506533304},\"id\":2800866,\"name\":\"Brussels\",\"cod\":200}"

=============================================
/* -->
sample JSON.parse(http.responseText) looks like this: (returns an object)

object Object] {
    base: "stations",
    clouds: [object Object] {
      all: 0
    },
    cod: 200,
    coord: [object Object] {
      lat: 50.85,
      lon: 4.35
    },
    dt: 1506502500,
    id: 2800866,
    main: [object Object] {
      humidity: 77,
      pressure: 1023,
      temp: 288.31,
      temp_max: 290.15,
      temp_min: 287.15
    },
    name: "Brussels",
    sys: [object Object] {
      country: "BE",
      id: 4842,
      message: 0.0034,
      sunrise: 1506490643,
      sunset: 1506533309,
      type: 1
    },
    visibility: 10000,
    weather: [[object Object] {
    description: "mist",
    icon: "50d",
    id: 701,
    main: "Mist"
  }],
    wind: [object Object] {
      speed: 1
    }
  }
*/