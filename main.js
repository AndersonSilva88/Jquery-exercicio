$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeatividade = $('#nome-atividade').val();
        const novoItem = $('<li></li>');

        $(`<a>${nomeatividade}</a>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#nome-atividade').val('');

    })

    $('ul').click(function () {
        $('a').wrap("strike");
        $('a').css("text-decoration", "line-through");

    })


})