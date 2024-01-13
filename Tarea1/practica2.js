
alert("PRACTICA 2");
let numeros = [7,8,2,9,10];
let suma = 0;

for (let i = 0; i < numeros.length ; i++) {
    
    if (numeros[i]>8){
        suma += numeros[i];
    }
}

alert("La suma de los numeros mayores a 8 es: " + suma);
