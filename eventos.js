document.addEventListener("DOMContentLoaded", function() {
    let contenedorBoton = document.querySelector("div");

    contenedorBoton.addEventListener("click", function(event) {
        if (event.target === contenedorBoton) { //event.target lo utilizamos para verificar si el click se hizo en el contenedor y no en el boton dentro del contenedor
            alert("Hola! Soy el Div");
        }
    })
}) 

