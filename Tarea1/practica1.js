

alert("PRACTICA 1");

let contadorMayor100 = 0;
let suma =  0;

let numero1=parseInt(prompt("Introduce el primer numero:"));
suma += numero1;
if (numero1 > 100) {
    contadorMayor100++;
}

let numero2=parseInt(prompt("Introduce el segundo numero:"));
suma += numero2;
if (numero2 > 100) {
    contadorMayor100++;
}
let numero3=parseInt(prompt("Introduce el tercer numero:"));
suma += numero3;
if (numero3 > 100) {
    contadorMayor100++;
}
let numero4=parseInt(prompt("Introduce el cuarto numero:"));
suma += numero4;
if (numero4 > 100) {
    contadorMayor100++;
}
let numero5=parseInt(prompt("Introduce el quinto numero:"));
suma += numero5;
if (numero5 > 100) {
    contadorMayor100++;
}
  
alert("Los numeros elegidos son: " + (numero1) + " " + (numero2) + " " + (numero3) + " " +(numero4) + " " + (numero5));
alert(" La suma de los numeros es: " + ( suma) + " Los numeros mayores de 100 son: " +( contadorMayor100));

