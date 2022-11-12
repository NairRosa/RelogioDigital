function updateTime () {

    var display = document.querySelector('.display');

    var now = new Date();

    var now = correctTime(now.getHours()) + ':' + correctTime(now.getMinutes()) + ':' + correctTime(now.getSeconds());

    display.textContent = now;
}

function correctTime(number) {
    if (number < 10) {
        number = '0' + number;
    }
    return number;
}

updateTime();
setInterval(updateTime, 1000);