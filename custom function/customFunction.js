/* eslint-disable no-console */
// this is function definition
function calculateBill(bill, rest, gst = 0.12) {
        console.log(`running calculateBill`);
        // const total = 1000*1.12+50;
        const total = bill + gst * bill + rest;
        // console.log(total);
        return total;
}

// this is function calling or its called **Run**
const myBill = calculateBill(1000, 10, 0.1);
document.getElementById('op').innerHTML = myBill;
