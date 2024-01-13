document.getElementById('aficiones').onchange = function() {
    var select = document.getElementById('aficiones');
    alert("La longitud de la lista es " + select.length +
          "\nEl índice seleccionado es el " + select.selectedIndex +
          "\nEl valor del índice seleccionado es " + select.value);
  };
  
  function resetForm() {
    document.getElementById('miFormulario').reset();
  }
  
  document.getElementById('miFormulario').onsubmit = function(event) {
    var dni = document.getElementById('dni').value;
    var telefono = document.getElementById('telefono').value;
    
    if (!dni) {
      alert("El campo DNI es obligatorio.");
      event.preventDefault();
    } else if (!/^\d{9}$/.test(telefono)) {
      alert("El teléfono debe tener 9 dígitos.");
      event.preventDefault();
    }
  };
  