'use strict';
$(document).ready(function(){

    console.log("DOM Loaded");
    reloadLinks();
    let add_client_link = $("#add_client_link");
    let submit_data = $("#submit_data");

  add_client_link.keyup(function(){
      if($(this).val().length >= 1){
        submit_data.removeAttr("disabled");
      }else{
        submit_data.attr("disabled", "disabled");
      }
    });
    submit_data.click(function(){
      //let link_list = $("#link_list");
      //Reset input value
      $("#link_list").append('<li><a href="' + $("#add_client_link").val() + '"></a></li>');
      reloadLinks();
      add_client_link.val("");
    });

    function reloadLinks(){
      $('a').each(function(indexInArray){
        let eachElement = $(this);
        let link = eachElement.attr("href");
        eachElement.attr("target", "_blank");

        console.log(link);
        $(eachElement).text(link);
      });
    }
});
