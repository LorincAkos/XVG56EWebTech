$(document).ready(function(){
    $("#animacio").click(function(){
        $("#dragElement").animate({left: '300px', width: '300px'},1000);
        $("#dragElement").animate({top: '100px', width: '+=50px'},1000);
        $("#dragElement").animate({left: '0px', opacity: 0.4},1000);
        $("#dragElement").animate({top: '0px', width: '150px'},1000);
    })

    $("#elrejt").click(function(){
        $("p").toggle(2000);
    });

    $("#összeki").click(function(){
        $("#dragElement").animate({height: 'hide'},1000);
        $("#dragElement").animate({height: 'show'},1000);
        $("#dragElement").animate({left: '300px', width: '300px'},1000);
    });

    $("#effektElem").on("click", function(){
        $(this).effect("bounce", {times: 3}, 500);
      });

})

$(function() {
    $("#dragElement").draggable();
    $("#dropZone").droppable({
    drop: function(event, ui) {
        $(this).addClass("ui-state-highlight").html("Elem elhelyezve!");
    }
    });
});
