
alert("PRACTICA 5");

let precio = parseInt (prompt ("Dime el precio de un producto: "));

let ivaProducto = (precio * 21 ) / 100 ;

let precioConIva = precio + ivaProducto;

precioConIva = precioConIva.toFixed(2);

alert("El IVA del producto es: " + (ivaProducto) + " El precio total del producto es: " + (precioConIva));

