document.addEventListener("DOMContentLoaded", function() {
    let contenedorBoton = document.querySelector("div");

    contenedorBoton.addEventListener("click", function(event) {
        if (event.target === contenedorBoton) {
            alert("Hola! Soy el Div");
        }
    })
})
    
    /*contenedorBoton.addEventListener("click",function(){
        alert("Hola! Soy el Div");*/




