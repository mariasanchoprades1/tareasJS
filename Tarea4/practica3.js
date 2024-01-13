var textoDivEvent = document.getElementById("textoEvent");

textoDivEvent.onmouseover = function(event) {
    if (event.type === "mouseover") {
        this.style.fontSize = "16pt";
    }
};

textoDivEvent.onmouseout = function(event) {
    if (event.type === "mouseout") {
        this.style.fontSize = "12pt";
    }
};
