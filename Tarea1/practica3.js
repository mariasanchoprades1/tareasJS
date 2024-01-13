
alert("PRACTICA 3");

let mes = prompt ("Dime un mes del año: ").toLowerCase();

if(mes == "enero" || mes == "febrero" || mes == "diciembre") {
    alert("Es invierno! ");

} else if(mes == "marzo" || mes === "abril" ||mes ==  "mayo" ){
    alert("Es primavera! ");


}  else if (mes == "junio" ||mes ==  "julio" || mes == "agosto" ) {
    alert("Es verano! ");


}  else if (mes == "septiembre" || mes == "octubre" ||mes ==  "noviembre") {
    alert("Es otoño! ");


} else { 
alert("Mes incorrecto. ");}


