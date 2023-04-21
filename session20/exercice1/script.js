let button = document.querySelector("button");
let secondes = 10;
let interval;

button.addEventListener('click', start);

function start() {
    interval = setInterval(decompte, 1000);
}

function decompte() {
    secondes--;
    if (secondes > 0) {
        document.querySelector('body').innerHTML += "<br/>" + secondes;
    } else {
        stop();
    }
}

function stop() {
    clearInterval(interval);
}