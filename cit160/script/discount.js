function totalAmountdue() {
    //Input:
    let subtotal = parseFloat(document.getElementById("customerSubtotal").value);
    let dayOfWeek = new Date().getDay();
    let partialsub = subtotal * .1;
    let partialsubone = subtotal - partialsub;
    let partialtax = subtotal * .06;
    let totalamountdue;

    //Processing:
    if ( dayOfWeek == 2 && dayOfWeek == 3 && (subtotal >=50)) {
        totalamountdue = partialsubone + partialtax; 
    } else {
        totalamountdue = subtotal * .06 + subtotal;
    }

    //Output:
    document.getElementById("output").innerHTML = totalamountdue.toFixed (2) ;
}