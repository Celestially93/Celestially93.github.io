function sumofOddnum() {
    //Input: The user inputs the number.
    //Process: Adds all the the odd numbers between 1 and the number  that the user entered using "for loop".
    //Outputs the result.
    let n = parseFloat(document.getElementById("number").value);
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) {
            sum += i;
        }
    
    }

    document.getElementById("output").innerHTML = sum;
}