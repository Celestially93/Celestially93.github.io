//Input: Get the temperatire and windspeed from the user.
//Process: Use if else statement and call function.
//Output: Alert if the temperature or windspeed is too high or low.
//Output: Show the calcuation if the requirements for temperature and windspeed is met.


function doInputOutput() {
    let temperature = parseFloat(document.getElementById("temperature").value);
    let windspeed = parseFloat(document.getElementById("windSpeed").value);


    if (temperature > 50 || windspeed < 3) {
        alert("The wind chill calculator only works for temperatures at or below 50 ° F and wind speeds above 3 mph.");
    } else {
        let windchill = windChill(temperature, windspeed);
        document.getElementById("output").innerHTML = windchill.toFixed(2);
    }
}

function windChill(temperature, windspeed) {
    let windchill = 35.74 + (0.6215 * temperature) - 35.75 * (Math.pow(windspeed, 0.16)) + (0.4275 * temperature) * Math.pow(windspeed, 0.16);
    return windchill;
}