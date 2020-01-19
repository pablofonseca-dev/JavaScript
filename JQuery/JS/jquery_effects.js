'use strict';

$(document).ready(function(){
  let box = $(".box");

  //Boxes

  let show_effect = $(".show_effect");
  let fade_effect = $(".fade_effect");
  let fade_to_effect = $(".fade_to_effect");
  let toggle_effect = $(".toggle_effect");
  let animate_effect = $(".animate_effect");
  let callback_animation = $(".callback_animation");

  //Controls -> Buttons

  let show_box = $("#show");
  let hide_box = $("#hide");

  let fade_in = $("#fade_in");
  let fade_out = $("#fade_out");

  let fade_to_show = $("#fade_to_show");
  let fade_to_hide = $("#fade_to_hide");

  let toggle_button = $("#toggle_button");

  let animate_button = $("#animate_button");

  let callback_button = $("#callback_button");

  show_box.click(function(){
    $(show_effect).show();
  });

  hide_box.click(function(){
    $(show_effect).hide();
  })

  fade_in.click(function(){
    $(fade_effect).fadeIn();
  });

  fade_out.click(function(){
    $(fade_effect).fadeOut();
  });

  //fadeTo cambia la opacidad a un valor en una totalidad de N segundos o valor
  //constante, que es el primer argumento.
  fade_to_show.click(function(){
    $(fade_to_effect).fadeTo('slow', 0.8);
  });

  fade_to_hide.click(function(){
    $(fade_to_effect).fadeTo('slow', 0.2);
  });

  toggle_button.click(function(){
    $(toggle_effect).slideToggle('fast');
  });

  animate_button.click(function(){
    //El metodo animate sirve para animar cualquier elemento de html
    //Las animaciones se incluyen en un formato de tipo JSON
    $(animate_effect).animate({
                        marginLeft: '500px',
                        fontSize: '40px',
                        height: '110px'
                      }, 'slow')
                      .animate({
                        borderRadius: '900px',
                        marginTop: '80px'
                      }, 'slow')
                      .animate({
                        borderRadius: '0px',
                        marginLeft: '0px',
                      }, 'slow')
                      .animate({
                        borderRadius: '100px',
                        marginTop: '0px'
                      }, 'slow')
                      .animate({
                        borderRadius: '0px',
                        marginTop: '2%',
                        fontSize: '16px',
                        height: '50px'
                      });
  });

  //Funciones anónimas de CallBack en animaciones
  callback_button.click(function(){
    //Se introduce una funcion anonima de callback
    //se ejecuta una vez que se complete la animacion
    callback_animation.fadeOut(1000, function(){
        console.log("Box has been hidden");
    });
  });
});
