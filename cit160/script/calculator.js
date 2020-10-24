function calculate() {
    //Input: Let the user input the number and the operator.
    let firstnumber = parseFloat(document.getElementById("firstNumber").value);
    let secondnumber = parseFloat(document.getElementById("secondNumber").value);
    let operator = parsefloat(document.getElementById("select-operator").value);
    let userAnswer = parsefloat(document.getElementById("userAnswer").value);

    //Processing: Use switch & compute.

    let answer;
    let message;
    switch (operator) {
        case "addition":
            answer = parseFloat(firstnumber + secondnumber);
            if (userAnswer == answer){
                message = "Correct!🏆"
            } else {
                message = "Incorrect. Try again!🌼"
            }
            break;
        case "subtraction":
            answer = parseFloat(firstnumber - secondnumber);
            if (userAnswer == answer){
                message = "Correct!🏆"
            } else {
                message = "Incorrect. Try again!🌼"
            }
            break;
        case "multiplication":
            answer = parseFloat(firstnumber * secondnumber);
            if (userAnswer == answer){
                message = "Correct!🏆"
            } else {
                message = "Incorrect. Try again!🌼"
            }
            break;
        case "division":
            answer = parseFloat(firstnumber / secondnumber);
            if (userAnswer == answer){
                message = "Correct!🏆"
            } else {
                message = "Incorrect. Try again!🌼"
            }
            break;         
    }



    //Output:
    document.getElementById("output").innerHTML = message;

}