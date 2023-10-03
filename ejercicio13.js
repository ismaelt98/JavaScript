$(document).ready(function() {
    $(".imagen-delantera").hide();

    $(".imagen-contenedor").hover(
        function() {
            $(".imagen-delantera").show();
        },
        function() {
            $(".imagen-delantera").hide();
        }
    );
});
