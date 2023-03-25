$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();
        const nomeatividade = $('#nome-atividade').val();
        const novoItem = $('<li></li>');

        $(`<li>${nomeatividade}</li>`).appendTo(novoItem);
        console.log(nomeatividade);
        $(novoItem).appendTo('ul');
        $('#nome-atividade').val('');

    })

    $('li').click(function () {
        e.preventDefault();
        $(this).closest('li').next('li').css(
            'text - decoration',
            this.checked ? 'line-through' : 'none'
        );
    })


})