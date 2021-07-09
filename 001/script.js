console.log("Hello World");

var allalalalla = 0;

function func() {
    allalalalla++;
    if (allalalalla == 0) var start = window.performance.now();
    if (allalalalla != 100) {
        console.log(allalalalla);
    }
    if (allalalalla == 25) {
        document.getElementById("jsTest").innerHTML = "You're at 25, congrats man!";
    } else if (allalalalla == 50) {
        document.getElementById("jsTest").innerHTML = "Halfway to 100!";
    } else if (allalalalla == 75) {
        document.getElementById("jsTest").innerHTML = "ALMOST THERE!";
    } else if (allalalalla == 100) {
        alert("YOU'RE NOW AT 100 CONGRATS MAN!")
        console.log("lets goo 100");
        var end = window.performance.now();
        let time = end - start;
        console.log(`Starting time ${start}`);
        document.getElementById("jsTest").innerHTML = `YOU'RE AT 100 CONGRATS MAN! It took you ${time}`; //it doesn't matter if you move this to the top, the alert will still be run first
    } else {
        document.getElementById("jsTest").innerHTML = allalalalla;
    }
    return true;
}

let test = func();
console.log(`Ran the function func() : ${test}`);
let hej = 2;