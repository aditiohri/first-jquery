$('#add').click(function() {
    var skillSet = $('#input').val();
    $('#skills').append(`<li><button id="del">X</button> ${skillSet}</li>`);
})

$(document).on('click', 'li', function(){
    $(this).remove();
 })

$('ul').css('list-style-type', 'none');


// $('ul').addClass("HideStyle");
// $('li').prepend(`<button class="btn-danger">X</button>`);


// $('#list').css('text-align', 'left');

// list-style-type: square