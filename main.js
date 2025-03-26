$(document).ready(function () {
    $("#telefone").mask("(00) 00000-0000");
    
    $("#meuFormulario").on("submit", function (event) {
        event.preventDefault();

        var telefoneVal = $("#telefone").cleanVal();
        var isValid = true;

        if (telefoneVal.length !== 11) {
            $("#telefone").addClass("is-invalid").removeClass("is-valid");
            isValid = false;
        } else {
            $("#telefone").addClass("is-valid").removeClass("is-invalid");
        }

        if (!this.checkValidity()) {        
            isValid = false;
        }

        $(this).addClass("was-validated");

        if (isValid) {
            try {
                $("#successModal").modal("show");
            } catch (error) {
                console.error("Erro ao abrir o modal:", error);
            }

            setTimeout(function () {
                $("#meuFormulario")[0].reset();
                $("#meuFormulario").removeClass("was-validated");
                $(".form-control").removeClass("is-valid is-invalid");
            }, 2000);
        }
    });

    $("#nome").on("input", function () {
        if ($(this).val().length < 3) {
            $(this).addClass("is-invalid").removeClass("is-valid");
        } else {
            $(this).addClass("is-valid").removeClass("is-invalid");
        }
    });
});
