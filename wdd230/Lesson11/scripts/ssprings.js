
//Weather API

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=c1dcfb6c8efcda936d6f6f66d54711d8&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('current').textContent = jsObject.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed;
       
      let temperature = parseFloat(jsObject.main.temp);
      let windspeed = parseFloat(jsObject.wind.speed);
     
      let windchill = "";
      if (temperature <= 50 && windspeed > 3) {
          windchill = windChill(temperature, windspeed) + "&deg;F";
      }
   
      document.getElementById("windchill").innerHTML = windchill;
      
      function windChill(tempF, speed) {
          windchill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, .16)) + (0.4275 * tempF * Math.pow(speed, .16));
          return windchill.toFixed(0);
      }

});



//Five Day Forecast

const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=c1dcfb6c8efcda936d6f6f66d54711d8&units=imperial";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    

    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    let newList = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
    
    for (let day = 0; day <= 4; day ++) {
        let d = new Date(newList[day].dt_txt);
        document.getElementById(`days${day+1}`).textContent = dayOfWeek[d.getDay()];
        document.getElementById(`day${day+1}`).textContent = newList[day].main.temp;

        const imgalt = newList[day].weather[0].description;
        const imagesrc = 'https://openweathermap.org/img/wn/' + newList[day].weather[0].icon + '@2x.png';
        document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
        document.getElementById(`icon${day+1}`).setAttribute('alt', imgalt);
    }

});

// Soda Springs Event
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const sspringsfilter = towns.filter(x => x.name == "Soda Springs");
    let sspringsEvents = sspringsfilter[0].events;
    let ul = document.createElement('ul'); 

    sspringsEvents.forEach(event => {
    let listItem = document.createElement('li');
    listItem.innerHTML = event;
    ul.append(listItem);
  }); 

  document.getElementById("ssprings").appendChild(ul);
});