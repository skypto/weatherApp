# Weather App*
### Author: Skypto

Super Awesome Weather App that can display the weather for any City.

> This Web application provides the possibility to fetch live weather update from a 3rd party service using an API CALL and display on screen in the Web browser.

###### DEMO:
[![N|Solid](http://files.softicons.com/download/web-icons/vector-stylish-weather-icons-by-bartosz-kaszubowski/png/128x128/sun.rays.cloud.drizzle.png)](https://skypto.github.io/weatherApp/) 
===
## v4.1.0
* Update of XMLHttpRequest endpoint from unsecure to secure. (ie http to https)

## v4.0.2
* Update to Readme file with Demo link to webApp.

## v4.0.1
* Update to Readme file markdown format.

## v4
* Possibility to display the processed API data in the Browser.

## v3
* Http Request setup.
* There is now a possibility to get weather information based on the user input
* Usage of API from **openweathermap.org** (Account creation and API key required for this interation)
* Creation of a new file **weather-data.js** which is a model for storage of the data collected from the API response.
* Possible to fetch only relevant information from the response received from Openweathermap (ie. City, weather description and Temperature)
* Creation of a getter and a setter in the **weather-data.js** file to help with the conversion from kelvin to degree celcius

## v2
* Contains data for fetching user inputs from the html page
* introduced a new file app.js which contains values that we fetch from the Dom for initialization
* Data manipulation/logic is performed in app.js

## v1
* Contains all the initial files required to setup our development.
* Available files: **index.html**, **style.css** and **app.js**