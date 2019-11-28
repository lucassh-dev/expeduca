var $doc = $('html, body');
$('#botao').click(function(e) {
    e.preventDefault();

    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1500);
    return false;
});
