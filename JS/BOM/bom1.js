'use strict';

//BOM - Browser Obejct Model 
//Con window podemos acceder al objeto ventana del navegador web. 

let getWindowSize = () => {
    console.log("Window Height           :" + window.innerHeight);
    console.log("Window Width            :" + window.innerWidth);
}

let getScreenSize = () => {
    console.log("Screen Height           :" + screen.height);
    console.log("Screen Width            :" + screen.width);
}

let getCurrentURL = () => {
    console.log("Current Uniform Resource Locator <URL>         : " + window.location);
}

let redirectURL = (gotoURL) => {
    window.location = gotoURL;
}

let openWindow = (goToURL) => {
    window.open(goToURL, "", "width=400,height=300");
}