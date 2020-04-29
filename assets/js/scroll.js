$('.ancla').on('click', function(e) {
    e.preventDefault();
    var strAncla = '#' + $(this).data('ancla');
    var strAnclaHome = '#' + $(this).data('home');
    var strAnclaMi = '#' + $(this).data('sobre-mi');
    var strAnclaHabilidades = '#' + $(this).data('habilidades');
    var strAnclaProyectos = '#' + $(this).data('proyectos');
    var strAnclaContacto = '#' + $(this).data('contacto');
    $('html,body').animate({ scrollTop: $(strAncla).offset().top }, 1000);
    $('html,body').animate({ scrollTop: $(strAnclaHome).offset().top }, 1000);
    $('html,body').animate({ scrollTop: $(strAnclaMi).offset().top }, 1000);
    $('html,body').animate({ scrollTop: $(strAnclaHabilidades).offset().top }, 1000);
    $('html,body').animate({ scrollTop: $(strAnclaProyectos).offset().top }, 1000);
    $('html,body').animate({ scrollTop: $(strAnclaContacto).offset().top }, 1000);
});