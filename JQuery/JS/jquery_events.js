'use strict';

$(document).ready(() => {

    //Eventos Mouse Hover y Mouse Out
    let box = $(".box");

    $(box).mouseover(function() {
        $(this).css("backgroundColor", "green");
    });

    $(box).mouseout(function() {
        $(this).css("backgroundColor", "yellow");
    });

    //Evento hover
    function cambiaCafe() {
        $(this).css("backgroundColor", "brown");
    }

    function cambiaNegro() {
        $(this).css("backgroundColor", "black");
    }

    let brown_black = $(".brown_black");
    $(brown_black).hover(cambiaCafe, cambiaNegro);

    //Evento click y dblclick

    $(brown_black).click(function(e) {
        $(this).addClass("more_width");
    });

    $(brown_black).dblclick(function() {
        $(this).css("width", "1000px");
    });

    //Evento focus y blur
    let user_name = $("#user_name");
    //Focus es un evento que se acciona cuando se entra dentro del input
    user_name.focus(function(e) {
        e.preventDefault();
        $(this).css("border", "2px solid green");
    });
    //Focus se acciona cuando se sale del input
    user_name.blur(function(e) {
        e.preventDefault();
        $(this).css("border", "1px solid #ccc");
        let form_data = $("#form_data");
        //form_data.show();
        form_data.text(user_name.val()).show();
    });

    //Evento mouseup y mousedown

    //Mouseup se llama cuando el raton es levantado en un input
    user_name.mouseup(function(e) {
        e.preventDefault();
        $(this).css("backgroundColor", "green");
    });

    //Mousedown se llama cuando el raton es presionado en un input
    user_name.mousedown(function(e) {
        e.preventDefault();
        $(this).css("backgroundColor", "red");
    });

    //Evento mousemove, es un evento que se llama cuando el mouse se mueve en un elemento
    //en este caso el evento se acciona cuando el mouse se mueve en todo el document
    //se mostrara las coordenadas del mouse
    $(document).mousemove(function(e) {
        e.preventDefault();
        let follow_me = $("#follow_me");
        follow_me.css("left", event.clientX);
        follow_me.css("top", event.clientY);
    });
});
