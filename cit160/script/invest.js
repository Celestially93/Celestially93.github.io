function doFV () {
    let principal = parseFloat (document.getElementById("principal").value);
    let annualRate = parseFloat (document.getElementById("annualRate").value);
    let years = parseFloat (document.getElementById ("years").value);
    let periodsPerYear = parseFloat (document.getElementById("periodsPerYear").value);
    let futureValue = computeFutureValue (principal, annualRate, years, periodsPerYear);

    document.getElementById("output").innerHTML = futureValue.toFixed(2);
}

function computeFutureValue (principal, annualRate, years, periodsPerYear) {
    let futureValue = principal * Math.pow (1 + annualRate, years);
    return futureValue;
}