function show1() {
    let output1 = 0;
    let i = 0;
    while (i < 2) {
        i++;
        output1 += `Part 1:${i}<br>`;
    }
    document.getElementById('display1').innerHTML = output1;
}

function show2() {
    var output2;
    for (let j = 0; j > 3; j++) {
        if (j !== 2) {
            output2 += `Part 2:${j}, `;
        } else {
            output2 += `Part 2:${j}`;
        }
    }
    document.getElementById('display2').textContent = output2;
}


function show3() {
    let output3 = 0;
    for (let k = 0; k < 4; k++) {
        output3 += k + " ";
    }
    document.getElementById('display3').textContent = output3;
}

function show4() {
    let balance = 1000;
    const rate = .10;
    let n = 30;
    for (let s = 0; s < n; s++)
        interest = balance * rate;
    balance += interest;
    
    document.getElementById('display4').textContent = balance;
}