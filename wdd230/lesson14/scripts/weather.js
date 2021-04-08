//Weather Summary -API

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=13.6167&lon=123.1833&units=metric&exclude=hourly,minutely&appid=632c14c053cc10b594e70f5cb1b4d0f1";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById("temperature").textContent = jsObject.current.temp;
    document.getElementById("current").textContent = jsObject.current.weather[0].description;
    document.getElementById("humidity").textContent = jsObject.current.humidity;
    document.getElementById("windspeed").textContent = jsObject.current.wind_speed;
    

    


  });

  function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//Three Day Forecast

const apiForecastURL = "api.openweathermap.org/data/2.5/forecast/daily?lat=13.6167&lon=123.1833&cnt=3&appid=632c14c053cc10b594e70f5cb1b4d0f1";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    const dayOfWeek = ""
    let day = new Date;
    
    for (let day = 0; day <= 3; day ++) {
      let day = dayOfWeek;

    document.getElementById("days1").textContent = day;
    document.getElementById("days2").textContent = day;
    document.getElementById("days3").textContent = day;

    document.getElementById("day1").textContent = jsObject.current.temp;
    document.getElementById("day2").textContent = jsObject.current.temp;
    document.getElementById("day3").textContent = jsObject.current.temp;
    
    }

});

