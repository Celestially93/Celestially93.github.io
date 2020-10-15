function convertpoundstokilograms () {
    //Input: Get the number in pounds from the user.
    let pounds = parseFloat (document.getElementById ("poundsInput").value);

    //Processing: Convert 
    let kilograms = pounds / 2.2046;

//Output
document.getElementById ("output").innerHTML = kilograms.toFixed(1) + " " + "Kilograms";
}
