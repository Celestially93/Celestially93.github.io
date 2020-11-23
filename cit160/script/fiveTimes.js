let output = "";
for (let i = 1; i <= 12; i++) {
    output += "5 x " + i + " = " + i * 5 + '<br>';
}
document.getElementById("output").innerHTML = output;