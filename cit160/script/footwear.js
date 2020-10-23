function footWear() {
    //Input: Get the weather from the user.
    let weather = document.getElementById("weather-select").value;
    //Process: 
    let shoes;
    if (weather == "hot") {
        shoes = "Sandals,";
    } else if (weather == "rain") {
        shoes = "Galoshes,";
    } else if (weather == "snow") {
        shoes = "Boots,";
    } else {
        shoes = "Your favorite shoes,";
    }

    //Output: Display the shoes for "today's weather" to the user.
    document.getElementById("output").innerHTML = `${shoes} is your footwear for today's weather!👣`;

}