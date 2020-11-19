function show1() {
    let output1 = "";
    let i = 0;
    while (i < 2) {
        output1 += `Part 1:${i}<br>`;
        i++;

    }
    document.getElementById('display1').innerHTML = output1;
}

function show2() {
    var output2 = "";
    for (let j = 0; j < 3; j++) {
        if (j !== 2) {
            output2 += `Part 2:${j}, `;
        } else {
            output2 += `Part 2:${j}`;
        }
    }
    document.getElementById('display2').textContent = output2;
}


function show3() {
    let output3 = "";
    for (let k = 0; k < 4; k++) {
        output3 += k + " ";
    }
    document.getElementById('display3').textContent = output3;


}

function show4() {
    let balance = 1000;
    const rate = .10;
    let n = 30;
    for (let s = 1; s < n; s++)
        interest = balance * rate;
    balance += interest;
    document.getElementById('display4').textContent = balance;
}

//For this problem, just write a comment in your submission of why this syntax is incorrect.

let i = 0;
while (i < 3); {
    // valid statements (this is not the problem)
    i++;
}

//Do not put semi-colon after the condition.