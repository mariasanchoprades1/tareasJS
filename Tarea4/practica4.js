var textoDivListener = document.getElementById("textoListener");

function aumentar() {
    this.style.fontSize = "16pt";
}

function disminuir() {
    this.style.fontSize = "12pt";
}

if (textoDivListener.addEventListener) {
    textoDivListener.addEventListener("mouseover", aumentar, false);
    textoDivListener.addEventListener("mouseout", disminuir, false);
} else if (textoDivListener.attachEvent) {
    textoDivListener.attachEvent("onmouseover", aumentar);
    textoDivListener.attachEvent("onmouseout", disminuir);
}
