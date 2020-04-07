// SCRIPT CONVIERTE LA BARRA NAV EN OTRO COLOR CUANDO SE HACE SCROLL

$(window).scroll(function() {
    if ($("#menu").offset().top > 53) {
        $("#menu").addClass("back-black");
        $(".navbar-brand").addClass("black-color");
    } else {
        $("#menu").removeClass("back-black");
        $(".navbar-brand").removeClass("black-color");
    }
});