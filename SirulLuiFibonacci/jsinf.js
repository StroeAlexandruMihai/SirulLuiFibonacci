/// display animation


const infinite = 999;


function fibonacci_while(number) {

    if (number == 1)
        return 0;
    if (number == 2)
        return 1;
    var num1 = 0;
    var num2 = 1;
    var sum;
    var i = 2;

    while (i < number) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;

    }
    return num2;
}



var handle, counter = 2,
    text = '';

function showVal() {
    if (counter < infinite) {
        text += fibonacci_while(counter) + ", ";
        document.getElementById("display").innerHTML = text;
        counter++;
    } else {
        window.clearInterval(handle);
    }
}

handle = window.setInterval(showVal, 1000);