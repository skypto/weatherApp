// This is where our souce code for the weather app logic will be stored

"use strict";

searchButton.addEventListener('click', searchWeather); // --> setup an event listner to run the searchWeather function when the button is clicked

function searchWeather() {
   // console.log(searchCity.value); --> for checking if our code works on button click
   var cityName = searchCity.value;
   
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
                console.log (weatherData); // will display the result in debugger (chrome dev tools)
       }else if (http.readyState == XMLHttpRequest.DONE &&  http.status !== 200){
           alert('Something went wrong!'); 
       }
   };
   http.send();
}
