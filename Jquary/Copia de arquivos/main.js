$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#cancel-button').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaimagem = $('#endereco-imagem').val();
        const novoitem = $('<li style = "display: none"></li>')
        $(`<img src="${novaimagem}" />`).appendTo(novoitem);
        $(`
            <div class = "overlay-text-link">
                <a href ="${novaimagem}" target= "_blank" title= "Ver Imagem em tamanho real">
            Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoitem);
        $(novoitem).appendTo('ul')
        $(novoitem).fadeIn(1000);
        $('#endereco-imagem').val('')
    })
})