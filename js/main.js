$(document).ready(function() {
    $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1900);
        return false;
    });
});

var hidden = document.querySelector('.hidden');
var btnCall = document.querySelector('.act');
btnCall.addEventListener('click', function(){
hidden.classList.remove('hide');
hidden.classList.add('active');
});
var btnExit = document.querySelector('.exit');
btnExit.addEventListener('click', function(){
hidden.classList.add('hide');
hidden.classList.remove('active');
});