//Current Date at footer
{
    var current = new Date();
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("currentDate").innerHTML = day[current.getDay()] + "," + current.getDate() + " " + month[current.getMonth()] + "" + current.getFullYear();
}


//Toggle menu for small screen
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

//Pancake message that appears only on Fridays.


{
    var now = new Date();
    var dayOfWeek = now.getDay();
    
    
    if (dayOfWeek == 5) {
        document.getElementById("pancakes").style.display = "block";
    }
    else {
        document.getElementById("pancakes").style.display = "none";
    }

   
}

//Optimizing Images

let imagesToLoad = document.querySelectorAll('img[data-src]');

        const loadImages = (image) => {
          image.setAttribute('src', image.getAttribute('data-src'));
          image.onload = () => {image.removeAttribute('data-src');};
        };
        
        if('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((items, observer) => {
              items.forEach((item) => {
                if(item.isIntersecting) {
                  loadImages(item.target);
                  observer.unobserve(item.target);
                }
              });
            });
            imagesToLoad.forEach((img) => {
              observer.observe(img);
            });
          } else {
            imagesToLoad.forEach((img) => {
              loadImages(img);
            });
          }

          //JSON

          const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
          fetch(requestURL)
            .then(function (response) {
              return response.json();
            })
            .then(function (jsonObject) {
              console.table(jsonObject);
              const towns = jsonObject['towns']; 
              for (let i = 0; i < towns.length; i++ ) {
                if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
          
                  let card = document.createElement('section');
                  let info = document.createElement('div');
                  let imgbox = document.createElement('div');
                  let h2 = document.createElement('h2');
                  let h3 = document.createElement('h3');
                  let p = document.createElement('p');
                  let p1 = document.createElement('p');
                  let p2 = document.createElement('p');
                  let img = document.createElement('img');
          
                  h2.textContent = towns[i].name; 
                  h3.textContent = towns[i].motto;
                  p.textContent = 'Year Founded: ' + towns[i].yearFounded;
                  p1.textContent = 'Population: ' + towns[i].currentPopulation;
                  p2.textContent = 'Annual Rain Fall: ' + parseInt(towns[i].averageRainfall) + '"';
                  img.setAttribute('src', 'images/' + towns[i].photo);
                  img.setAttribute('alt', ('Image of the town of ' + towns[i].name));
                  info.setAttribute('class', 'info');
                  imgbox.setAttribute('class','imgbox');
                  
                  card.appendChild(info);
                  card.appendChild(imgbox);
                  info.appendChild(h2);
                  info.appendChild(h3);
                  info.appendChild(p);
                  info.appendChild(p1);
                  info.appendChild(p2);
                  imgbox.appendChild(img);
                  
                  document.querySelector('div.cards').appendChild(card);}
            }});

            //Map
            function initMap() {
              
          const preston = { lat: 42.0963133, lng: -111.8766173 };
             
          const map = new google.maps.Map(document.getElementById("map"), {
                zoom: 9,
                center: preston,
              });
              
          const marker = new google.maps.Marker({
                position: preston,
                map: map,
              })};
      
              //weather

              const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cbf6f180a0de7965e7eda02d85df55c9";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let temp = parseInt((jsObject.main.temp - 273.15) * (9/5) + 32);
    let speed = jsObject.wind.speed;

    document.getElementById('degrees').textContent = temp;
    document.getElementById('wind').textContent = speed;
    document.getElementById('weather').textContent = jsObject.weather[0].main;
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