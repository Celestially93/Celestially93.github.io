
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

//Event Preston

const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json"


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];

    const prestonfilter = towns.filter(x => x.name == "Preston");
    let prestonEvents = prestonfilter[0].events;
    let ul = document.createElement('ul'); 

    prestonEvents.forEach(event => {
    let listItem = document.createElement('li');
    listItem.innerHTML = event;
    ul.append(listItem);
  }); 

  document.getElementById("event").appendChild(ul);
});




/*
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cbf6f180a0de7965e7eda02d85df55c9";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let temp = parseInt((jsObject.main.temp - 273.15) * (9/5) + 32);
    let speed = jsObject.wind.speed;

    document.getElementById('temp').textContent = temp;
    document.getElementById('windspeed').textContent = speed;
    document.getElementById('current').textContent = jsObject.weather[0].main;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

    if ((temp < 50) && (speed > 3)) {
      var wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
      document.getElementById("windchill").innerHTML = parseInt(wc);
  }
  
  else {document.getElementById("windchill").innerHTML = temp};


  });

  const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=cbf6f180a0de7965e7eda02d85df55c9";
  fetch(forecasturl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    for (let i = 1; i < jsObject.list.length; i++ ) {
    
      let sixo = jsObject.list[i].dt_txt.substr(11, 8);

    if (sixo == "18:00:00")  {

      let d = new Date(jsObject.list[i].dt_txt);
    
      let card = document.createElement('section');
      let date = document.createElement('p');
      let icon = document.createElement('img');
      let temp = document.createElement('p');

      date.textContent = d.toString().substr(0, 3);
      date.setAttribute('class', 'foredow');
      icon.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
      icon.setAttribute('alt', jsObject.list[i].weather[0].main);
      temp.textContent = parseInt((jsObject.list[i].main.temp - 273.15) * (9/5) + 32);
      temp.setAttribute('class', 'foretemp');

      card.appendChild(date);
      card.appendChild(icon);
      card.appendChild(temp);

      document.querySelector('div.forecast').appendChild(card);
    }

    }

  });
  */