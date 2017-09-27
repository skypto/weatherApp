// In this file we will create a constructor function  to store the web data collected from the API response
/*
Constructors are like regular functions, but we use them with the "new" keyword. 
There are two types of constructors: native (aka built-in) constructors like Array and Object, 
which are available automatically in the execution environment at runtime; and custom constructors, 
which define properties and methods for your own type of object.

A constructor is useful when you want to create multiple similar objects with the same properties and methods. 
It’s a convention to capitalize the name of constructors to distinguish them from regular functions
*/

/*
Conversion: The temperature returned is in kelvin

Kelvin to Degrees   --> T(°C) = T(K) - 273.15
Kelvin to Farenheit --> T(°F) = T(K) × 1.8 - 459.67
*/

"use strict";

function Weather (cityName, description){
    this.cityName = cityName;  // --> cityName from app.js
    this.description = description; //--> description derived from the response data from the XMLHttp request
    this._temperature = ''; //-->This allows for creation of a GETTER and a SETTER for this field to be used for our conversion of the temperature metric
}

Object.defineProperty(Weather.prototype, 'temperature', {
    get: function(){
        return this._temperature;   
    },
    set: function (value){
        this._temperature = (value - 273.15).toFixed(0) + '\xB0C.';      //--> conversion from kelvin to degrees Celcius    
    }
})