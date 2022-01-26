const imagen = document.getElementById("img-slider");

let numImagen = 0;

const imagenes = [];
imagenes[0] = "imagenes/slider/local1.jpeg";
imagenes[1] = "imagenes/slider/local2.jpeg";
imagenes[2] = "imagenes/slider/local3.jpeg";

setInterval(() => {
    imagen.src = imagenes [numImagen];
    if (numImagen < imagenes.length - 1){
        numImagen++;
    } else {
        numImagen = 0;
    }
}, 3000);