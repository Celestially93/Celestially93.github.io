//Current Day
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date(); 
document.querySelector("#currentDate").textContent = days [d.getDay()];

// Current Date
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const m = new Date();
const date = new Date();
document.querySelector("#month").textContent = months [m.getMonth()];
document.getElementById("date").innerHTML = date.getDate();


// Current Year In Footer
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

//Weather API

const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=13.6167&lon=123.1833&units=metric&exclude=hourly,minutely&appid=632c14c053cc10b594e70f5cb1b4d0f1";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {

    document.getElementById("temperature").textContent = jsObject.current.temp;
    document.getElementById("current").textContent = jsObject.current.weather[0].description;
    document.getElementById("humidity").textContent = jsObject.current.humidity;
    document.getElementById("windspeed").textContent = jsObject.current.wind_speed;
});

// Get the user input and add it to the list of to do items.
function newItem() {
    var li = document.createElement("li");
    var userInput = document.getElementById("userInput").value;
    var text = document.createTextNode(userInput);
    li.appendChild(text);
    if (userInput === '') {
      alert("Please list something that you need to do!");
    } else {
      document.getElementById("list").appendChild(li);
    }
    document.getElementById("userInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }

// Create close button and add it to the list.
var myList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Clicking the close button will remove an item from the list.
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

//Add a check symbol when the items on the list has been done.

var check = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);









