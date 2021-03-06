'use strict';

//Selectores

/*
Diferencias Generales entre las versiones de JQuery Core 1.x, 2.x y 3.x
Version I: Poca compatibilidad con los navegadores, había que mantener código para habilidar el soporte con
los diferentes tipos de navegadores web.

Version II: JQuery deja de ser compatible con Internet Explorer, se incrementa la optimización del código.

Version III: JQuery trae soporte para promesas, peticiones, mejora mucho para ser compatible con la
tecnología HTML en su versión 5.


*/

/*
    El signo de dólar o también la palabra JQuery representa un objeto, el objeto JQuery
    Lo que esté entre paréntesis es el elemento del selector, en este caso se selecciona document.
    document siempre se refiere a toda la página web en general.

    El método ready hace referencia a un evento que se acciona una vez que el documento cargue por completo
*/

$(document).ready(() => {
    console.log("DOM Loaded");

    //Selector de ID
    let color_red_p = $("#color_red");
    let color_green_p = $("#color_green");
    let color_yellow_p = $("#color_yellow");
    color_red_p
        .css("backgroundColor", "red")
        .css("color", "white");
    color_green_p
        .css("backgroundColor", "green")
        .css("color", "white");
    color_yellow_p
        .css("backgroundColor", "yellow")
        .css("color", "green");
    console.log(color_red_p);

    //Selector de Clase
    //Elijen los elementos del DOM en base de una clase
    let dom_font_class = $(".resize");
    dom_font_class.on('click', function() {
        if ($(this).hasClass("font_size") == true) {
            $(this).removeClass("font_size");
        } else {
            $(this).addClass("font_size");
        }
    });
    //Selector por Etiqueta
    let paragraphs = $("p");
    paragraphs.on('click', function() {
        if ($(this).hasClass("zebra") == true) {
            $(this).removeClass("zebra");
        } else {
            $(this).addClass("zebra");
        }
    });

    //Selectores por atributo
    let google_link = $('[title = "Google"]');
    google_link.css("background", "red");

    //Selector find, busca los hijos de un elemento, sin importar su localización, lo importante es que sean hijos
    //Find sirve para buscar dentro de un arbol HTML muy grande elementos que son hijos de otro
    //que no sabemos exactamente donde estan dentro de el.
    let highlighted_elements = $('#box').find(".highlighted");
    console.log(highlighted_elements);

    //Selector parent, sirve para ir saltando en el DOM a los elementos padre a partir de un elemento hijo
    let element_three = $('#element_three');
    let highlighted_elements_two = element_three.parent().parent().find(".highlighted");
    console.log(highlighted_elements_two);
});
