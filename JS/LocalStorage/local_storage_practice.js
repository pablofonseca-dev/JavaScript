 'use strict';

 window.addEventListener('load', () => {
     console.log("DOM Loaded");

     //Add a movie to the Local Storage
     let form_dom = document.querySelector("#movie_form");
     var local_keys_counter = 1;
     var local_movie_format = "movie_name_" + local_keys_counter;
     form_dom.addEventListener('submit', () => {
         let movie_name_dom = document.querySelector("#movie_name").value;
         if (
             movie_name_dom.trim().length <= 0 ||
             !isNaN(movie_name_dom) == true ||
             movie_name_dom == null ||
             movie_name_dom == undefined
         ) {
             let movie_name_error_dom = document.querySelector("#movie_name_error");
             movie_name_error_dom.append("The name of the movie is invalid.");
         } else {
             let while_flow = true;
             while (while_flow) {
                 if (localStorage.getItem(local_movie_format) != null) {
                     //debugger;
                     console.log("The key exist, incrementing the counter.");
                     local_keys_counter = local_keys_counter + 1;
                     local_movie_format = "movie_name_" + local_keys_counter;
                 } else {
                     console.log("The key is empty, ready to save the item in position [" + local_keys_counter + "]");
                     localStorage.setItem(local_movie_format, movie_name_dom);
                     while_flow = false;
                     console.log("Item saved succesfully in LocalStorage.");
                 }
                 window.location = window.location;
             }
         }
     });

     //Print Movies From the Local Storage to DOM 
     var movie_wrapper = document.querySelector("#movie_wrapper_container ul");
     let counter;
     for (counter in localStorage) {
         if (typeof(localStorage[counter]) == "string") {
             let dom_list_item = document.createElement("li");
             dom_list_item.append(localStorage[counter]);
             movie_wrapper.append(dom_list_item);
         }
     }

     //Remove a Movie in the Local Storage 
     //debugger;
     let remove_movie_form = document.getElementById("remove_movie_form");
     remove_movie_form.addEventListener('submit', () => {
         let movie_name_dom = document.getElementById("remove_movie_name").value;
         if (
             movie_name_dom.trim().length <= 0 ||
             !isNaN(movie_name_dom) == true ||
             movie_name_dom == null ||
             movie_name_dom == undefined
         ) {
             let movie_name_error_dom = document.querySelector("#remove_movie_name_error");
             movie_name_error_dom.append("The name of the movie is invalid");
         } else {
             console.log(localStorage.getItem(localStorage.key(4)));
             let boolean_validation = false;
             for (let index = 0; index < localStorage.length; index++) {
                 if (localStorage.getItem(localStorage.key(index)) == movie_name_dom) {
                     //Delete it 
                     localStorage.removeItem(localStorage.key(index));
                     boolean_validation = true;
                     break;
                 } else {
                     boolean_validation = false;
                     continue;
                 }
             }
             if (boolean_validation) {
                 alert("Item removed");
                 window.location = window.location;
             } else {
                 alert("Item not found in memory");
             }
         }
     });

     //Clear All in Local Storage, Clean Memory
     let clear_localstorage_form = document.getElementById("clear_localstorage_form");
     clear_localstorage_form.addEventListener('submit', () => {
         localStorage.clear();
         alert("Memory Cleaned");
         window.location = window.location;
     });
 });