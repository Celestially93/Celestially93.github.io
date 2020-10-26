function calculate() {
    //Input: Let the user input the number and the operator.
    let firstnumber = parseFloat(document.getElementById("firstNumber").value);
    let secondnumber = parseFloat(document.getElementById("secondNumber").value);
    let operator = (document.getElementById("select-operator").value);
    let userAnswer = parseFloat(document.getElementById("userAnswer").value);

    //Processing: Use switch case & compute.

    let answer;
    let message;
    switch (operator) {
        case "addition":
            answer = firstnumber + secondnumber;
            break;
        case "subtraction":
            answer = firstnumber - secondnumber;

            break;
        case "multiplication":
            answer = firstnumber * secondnumber;

            break;
        case "division":
            answer = firstnumber / secondnumber;
    }

    if (userAnswer == answer) {
        message = "Correct!🏆";
    } else {
        message = "Incorrect. Try again!🌼";
    }
    //Output:
    document.getElementById("output").innerHTML = message;
}