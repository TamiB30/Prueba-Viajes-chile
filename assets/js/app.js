
$(document).ready(function () {
    $("#btn-formulario").click(function () {
        let nombre = document.getElementById("inputNombre").value;
        alert("¡Hola " + nombre + " su mensaje ha sido enviado!")
    })

    $("#quienes-somos figure").click(function () {
        var tarjeta = $(this).closest('.col-md-4');
        tarjeta.find('.txt-quienes').toggle();
    });
})

