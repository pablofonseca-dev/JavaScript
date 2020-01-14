'use strict';

window.addEventListener('load', () => {
    //When DOM is loaded
    console.log("DOM Loaded, entering to JS");

    //JSON (JavaScript Object Notation)
    /*
    
        NOTAS:

        1. JSON nos permite hacer un tipo de Array Asociativo
        2. Nos permite enviar datos y recibirlos de una manera muy sencilla.
        3. El sistema de bases de datos no SQL MongoDB almacena su información con un formato JSON. 
    */
    let movie = {
        movie_title: "Batman VS Superman",
        movie_year: 2017,
        movie_country: "United States"
    }

    let usa_movies = [{
            movie_title: "Joker",
            movie_year: 2019,
            movie_country: "United States"
        },
        movie
    ];

    console.log(movie.movie_year);
    movie.movie_year = 2019;
    console.log(movie["movie_year"]);
    console.log(usa_movies);

    var movie_box = document.getElementById("movie_box");

    var index;

    for (index in usa_movies) {
        var paragraph = document.createElement("p");
        paragraph.append(usa_movies[index].movie_title + " - " +
            usa_movies[index].movie_year + " - " + usa_movies[index].movie_country);
        movie_box.append(paragraph);
    }

});