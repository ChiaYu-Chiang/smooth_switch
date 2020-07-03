function lightOn() {
    document.body.style.backgroundColor = "#FFFFFF";
}

function lightOff() {
    document.body.style.backgroundColor = "#1C1C1E";
}

function show() {
    if (document.getElementById("toggle").checked) {
        lightOn();
    } else {
        lightOff();
    }
}