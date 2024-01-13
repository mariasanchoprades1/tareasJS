function precioConIva(precio) {
    const IVA = 0.21;
    return +(precio * (1 + IVA)).toFixed(2); 
}

let precioBase = parseFloat(prompt("Introduce el precio del artículo sin IVA:"));

alert("Precio con IVA: " + precioConIva(precioBase));
