$("body").prepend('<p class="animacion" style="display: none" >No dudes en comunicarte!</p>');
$("body").prepend('<p class="animacion2" style="display: none" >Redes al final de la pagina ♥</p>');
$("p").fadeIn();

$(".animacion2").fadeIn("fast",function(){
    $(".animacion2").fadeIn(800);
    });

$(".animacion").css({
   "font-family": "Roboto Mono, monospace",
   "color": "white"
})

$(".animacion2").css({
   "font-family": "Roboto Mono, monospace",
   "color": "white"
})