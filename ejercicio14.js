$(document).ready(function() {
    let bombillaEncendida = false;

    $(".interruptor").click(function() {
        bombillaEncendida = !bombillaEncendida;
        if (bombillaEncendida) {
            $(".bombilla").attr("src", "on.jpg");
            $(".interruptor").attr("src", "bon.jpg");
        } else {
            $(".bombilla").attr("src", "off.jpg");
            $(".interruptor").attr("src", "boff.jpg");
        }
    });

    $("#tamaño-bombilla").on("input", function() {
        let tamaño = $(this).val() + "px";
        $(".bombilla").css("width", tamaño);
    });

    $("#intensidad-luz").on("input", function() {
        let intensidad = $(this).val();
        if (bombillaEncendida) {
            $(".bombilla").css("opacity", intensidad / 100);
        }
    });

    $("#rotacion-bombilla").on("input", function() {
        let rotación = $(this).val() + "deg";
        $(".bombilla").css("transform", "rotate(" + rotación + ")");
    });
});
