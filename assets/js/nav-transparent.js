// SCRIPT CONVIERTE LA BARRA NAV EN OTRO COLOR CUANDO SE HACE SCROLL

$(window).scroll(function() {
    if ($("#menu").offset().top > 53) {
        $("#menu").addClass("back-pink");
        $(".navbar-brand").addClass("black-color");
    } else {
        $("#menu").removeClass("back-pink");
        $(".navbar-brand").removeClass("black-color");
    }
});