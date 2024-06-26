//para habilitar tooltips en footer y en sección presentación
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//js para cambiar el bg-color de nav-items cuando se presionan
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

// js para crear advertencia al hacer click en <i> de footer
document.addEventListener('DOMContentLoaded', function() {
    var iconos = document.querySelectorAll('footer a i');
    iconos.forEach(function(icono) { 
        icono.addEventListener('click', function(event) {
            event.preventDefault();
            // pop up notificando que cambiarás de página
            var confirmacion = confirm("Estás a punto de abandonar esta página. ¿Deseas continuar?");
            // redirigir al link si se presiona aceptar; sino, quedarse en Viajes Chile
            if (confirmacion) {
                window.location.href = this.parentElement.getAttribute('href');
            }
        });
    });
});

//js para invertir colores de cards al hacer click sobre ellas
document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.card'); //trae todas las .card

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            this.classList.toggle('bg-info');
            this.classList.toggle('text-light');
            this.classList.toggle('bg-white');
        });
    });
});
