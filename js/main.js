$(document).ready(function() {
    $("a.scrollto").click(function () {
        var elementClick = '#'+$(this).attr("href").split("#")[1]
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1900);
        return false;
    });
});

let hidden = document.querySelector('.hidden');
let btnCall = document.querySelector('.act');
btnCall.addEventListener('click', function(){
hidden.classList.remove('hide');
hidden.classList.add('active');
});
let btnExit = document.querySelector('.exit');
btnExit.addEventListener('click', function(){
hidden.classList.add('hide');
hidden.classList.remove('active');
});


const localStorageContent = localStorage.getItem('names');

let names;
if(localStorageContent === null){
names = [];
} else {
    names = JSON.parse(localStorageContent);
}


names.push('SUKA');

localStorage.setItem('names', JSON.stringify(names));

