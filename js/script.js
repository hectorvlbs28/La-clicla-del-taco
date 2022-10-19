/*===============================
GRID Categorias
=================================*/
$(".grid figure").mouseover(function(){
    $(this).css({"background-position":"right bottom"})
})

$(".grid figure").mouseout(function(){
    $(this).css({"background-position":"left top"})
})

/*===============================
Paginacion
=================================*/

$(".pagination").twbsPagination({
    totalPages: 10,
    visiblePages: 4,
    first: "Primero",
    last: "Ultimo",
    prev: '<i class ="fas fa-angle-left"></i>',
    next: '<i class ="fas fa-angle-right"></i>'
});

/*================================
Scroll
==================================*/

var controller = $.superscrollorama();

controller.addTween(".contenidoInicio .container", TweenMax.from(

    $(".contenidoInicio .container"), .5, {css:{opacity: 0}}

))

/*================================
ScrollUp
==================================*/

$.scrollUp({
    scrollText:"",
    scrollSpeed: 2000,
    easingType: "easeOutQuint"
})
