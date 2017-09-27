// This file will be used for initializing or loading some element from the code to get all the DOM objects that we will be working with

"use strict";

//Define parameters used for making request (input and action)
 var searchButton = document.querySelector('button'); //--> assign a variable for the html button
 var searchCity = document.querySelector('#city'); // --> assign a value for the search input from the html page


 //Define parameters that will be used for displaying the results to the HTML webpage
 var loadingText = document.querySelector('#load');
 var weatherBox = document.querySelector('#weather');

 // --> there are many ways of fetching div elements, either with thier id tags or their relative positions. 
 var weatherCity = weatherBox.firstElementChild;
 var weatherDescription = document.querySelector('#weatherDescription');
 var weatherTemperature = weatherBox.lastElementChild;

 