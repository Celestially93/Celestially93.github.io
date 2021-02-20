
let temperature = parseFloat(document.getElementById("highTemperature").textContent);
let windspeed = parseFloat(document.getElementById("windSpeed").textContent);

let windchill = windChill(temperature, windspeed);

document.getElementById("output").innerHTML = windchill.toFixed(2);

function windChill(temperature, windspeed) {
    let windchill = 35.74 + (0.6215 * temperature) - 35.75 * (Math.pow(windspeed, 0.16)) + (0.4275 * temperature) * Math.pow(windspeed, 0.16);
    return windchill;
}