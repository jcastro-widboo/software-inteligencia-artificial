//UNIVERSIDAD UTE
//INTELIGENCIA ARTIFICIAL
//INTEGRANTES: AVALOS FRANCISCO; CASTRO JORGE; ECHEVERRIA CRISTHIAN; NAVARRO MILTON

$(document).ready(function() {
    if (!Raphael.svg) {
        window.location = './404.html';
    }

    $(window).bind('selectstart', function(event) {
        event.preventDefault();
    });

    Panel.init();
    Controller.init();
});