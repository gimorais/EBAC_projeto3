$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $("form").submit(function(event) {
        event.preventDefault(); // evita reload
        
        const tarefa = $("#tarefa-nova").val().trim();
        if (tarefa !== "") {
            const novoItem = $("<li></li>").text(tarefa);
            $(".lista-tarefas ul").append(novoItem);
            $("#tarefa-nova").val("");
        }
    });

    // Delegação para itens novos e antigos
    $(".lista-tarefas ul").on("click", "li", function() {
        $(this).toggleClass("riscado");
    });
});