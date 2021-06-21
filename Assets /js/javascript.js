$(".card-title").click(function(){
    $(".card").toggle("slow");
});

$("#tt").click(function(){
    alert("El correo fue enviado correctamente");
}); 
$("#botonuno").click(function () {
    $("#carousel-dos").fadeOut("slow", function () {
        ;
    });
    $("#carousel-uno").fadeIn("slow", function () {
        ;
    });
    $("#botonuno").css("background-color", "#000000");
    $("#botondos").css("background-color", "#BBBBBB");

});

$("#botondos").click(function () {
    $("#carousel-dos").fadeIn("slow", function () {
        ;
    });
    $("#carousel-uno").fadeOut("slow", function () {
        ;
    });
    $("#botonuno").css("background-color", "#BBBBBB");
    $("#botondos").css("background-color", "#000000");


});