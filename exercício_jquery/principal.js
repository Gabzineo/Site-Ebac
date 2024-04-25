
$(document).ready(function(){
    $('ul').on('click', 'li', function(){
    $(this).css('text-decoration', 'line-through');
    })

    $('header button').click(function(){
        $('form').slideDown(400);
    })

    $('#reset-button').click(function(){
        $("form").slideUp(200);
        $(novatarefa).val('')
    })

    $('form').on('submit', function(e){
        e.preventDefault()
        const novatarefa = $('#terefa-text').val();
        const novoitem = $('<li style = "display: none"></li>').text(novatarefa)
    $('ul').append(novoitem)
    $(novoitem).fadeIn(1000);
    $('#terefa-text').val('')
    })
    
})