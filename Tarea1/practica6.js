let cadena = prompt("Introduce una cadena: ");

document.write ("Longitud de la cadena:" + cadena.length + " caracteres ");


document.write(" Cadena en mayusculas:" + cadena.toUpperCase());


document.write(" Cadena en minusculas:" + cadena.toLowerCase());

let palabras = cadena.split(" ");

document.write(" Las diferentes palabras son: " + palabras);

document.write (" Palabras al reves: " + palabras.reverse().join(" "));

