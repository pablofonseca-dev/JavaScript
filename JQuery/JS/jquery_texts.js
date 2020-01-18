'use strict';

$(document).ready(() => {
    console.log("DOM Loaded");
    let anchors = $("a");
    $("a").each((indexInArray, valueOfElement) => {
        var link = $(valueOfElement).attr("href");
        console.log(link);
        //debugger;
        $(valueOfElement).text(link);
    });
});