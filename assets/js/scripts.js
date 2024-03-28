//para habilitar tooltips en footer y en sección presentación
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//js para cambiar el bg-color de elementos de la nav cuando se clickea
$(document).ready(function(){
    $('.nav-link').on('click', function(){
        $('.nav-item').removeClass('active'); //"activa" 
        $(this).parent().addClass('active');
        // permanece 1 segundo con bg-info y recupera fondo inicial
        setTimeout(function(){
            $('.nav-item').removeClass('active');
        }, 1000);
    });
});

// js para el botón Enviar
var boton = document.getElementById('boton-enviar');
boton.addEventListener('click', function() {
    alert('Gracias por escribirnos :)');
});