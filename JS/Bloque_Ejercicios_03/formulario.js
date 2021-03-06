'use strict';
window.addEventListener('load', () => {
    console.log("DOM Loaded");
    let box_dashed = document.querySelector(".dashed");
    let form = document.getElementById("formulario");
    box_dashed.style.display = "none";
    form.addEventListener('submit', () => {
        let user_name_area = document.querySelector("#user_name_area span");
        let user_lastName_area = document.querySelector("#user_lastName_area span");
        let user_age_area = document.querySelector("#user_age_area span");
        console.log("Event Listener [ok]");
        let get_user_name = document.querySelector("#user_name").value;
        let get_user_lastName = document.querySelector("#user_lastName").value;
        let get_user_age = document.querySelector("#user_age").value;
        //Validations
        if (
            get_user_name.trim() == null ||
            get_user_name.trim().length == 0 ||
            isNaN(get_user_name) == false) {
            //alert("El nombre no es válido");
            let user_name_error = document.querySelector("#user_name_error");
            user_name_error.append("\nEl nombre no es válido");
            return false;
        } else {
            user_name_error.style.display = "none";
        }
        if (
            get_user_lastName.trim() == null ||
            get_user_lastName.trim().length == 0 ||
            isNaN(get_user_lastName) == false) {
            //alert("El apellido no es válido");
            let user_lastName_error = document.querySelector("#user_lastName_error");
            user_lastName_error.append("Los apellidos no son válidos");
            return false;
        } else {
            user_lastName_error.style.display = "none";
        }
        if (
            isNaN(get_user_age) == true ||
            get_user_age <= 0 ||
            get_user_age == null ||
            get_user_age == "") {
            //alert("La edad no es válida");
            let user_age_error = document.querySelector("#user_age_error");
            user_age_error.append("La edad no es válida");
            return false;
        } else {
            user_age_error.style.display = "none";
        }
        console.log(get_user_name);
        box_dashed.style.display = "block";
        //debugger;
        //dom_paragraph.append(get_user_name);
        // dom_paragraph.append(get_user_lastName);
        // dom_paragraph.append(get_user_age);
        // box_dashed.append(dom_paragraph);
        let user_data = [
            get_user_name,
            get_user_lastName,
            get_user_age
        ];
        user_name_area.append(user_data[0]);
        user_lastName_area.append(user_data[1]);
        user_age_area.append(user_data[2]);
    });

});