function doFV () {
    let principal = parseFloat (document.getElementById("principal").value);
    let annualRate = parseFloat (document.getElementById("annualRate").value);
    let years = parseFloat (document.getElementById ("years").value);
    let periodsPerYear = parseFloat (document.getElementById("periodsPerYear").value);
    let futureValue = computeFutureValue (principal, annualRate, years, periodsPerYear);

    document.getElementById("investment").innerHTML = futureValue.toFixed(2);
}



function doPayment() {
    let principal = parseFloat(document.getElementById("principal").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let years = parseFloat(document.getElementById("years").value);
    let compute = computePayment (principal, annualRate, years);

   document.getElementById("output").innerHTML = "$" + compute.toFixed(2);
}

function doBalance() {
    let principal = parseFloat(document.getElementById("principal").value);
    let annualRate = parseFloat(document.getElementById("annualRate").value);
    let years = parseFloat(document.getElementById("years").value);
    let numberOfPaymentPaidToDate = parseFloat(document.getElementById("numberOfPaymentPaidToDate").value);
    let paymentsPerYear = parseFloat(document.getElementById("paymentsPerYear").value);
    let balance = computeBalance (principal, annualRate, numberOfPaymentPaidToDate, paymentsPerYear);

    document.getElementById("output1").innerHTML = "$" + balance.toFixed(2);
}



function computeFutureValue (principal, annualRate, years, periodsPerYear) {
    let futureValue = principal * Math.pow (1 + annualRate, years);
    return futureValue;
}

function computePayment (principal, annualRate, years) {
    let computePayment = principal * annualRate / 1 - ((Math.pow(1 + annualRate), -years));
    return computePayment;
}

function computeBalance (principal, annualRate, numberOfPaymentPaidToDate, paymentsPerYear) {
    let balance = (principal * (Math.pow (1 + annualRate), numberOfPaymentPaidToDate) - (paymentsPerYear * (Math.pow(1 + annualRate), numberOfPaymentPaidToDate))- 1) / annualRate;
    return balance; 
}