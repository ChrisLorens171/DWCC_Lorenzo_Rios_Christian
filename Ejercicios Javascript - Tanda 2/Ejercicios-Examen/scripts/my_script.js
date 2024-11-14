
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let cadena = solicitarDato("Introduce una cadena de aminoacidos: ", "string");
let longitudMax = 0;
let longitud = 0;
let posicionMax = 0;
let amino = "";

function buscarAminosIguales(cadena, posicion) {
    let i = posicion;

    // Mientras el amino actual sea igual al siguiente, incrementamos i
    while (i + 1 < cadena.length && cadena[i] == cadena[i + 1]) {
        i++;
    }

    // Devolvemos la longitud de la secuencia de aminoácidos iguales
    return i - posicion + 1;
}

for (let i = 0; i < cadena.length; i += longitud) {
    longitud = buscarAminosIguales(cadena, i);
    if (longitud >= longitudMax) {
        longitudMax = longitud;
        posicionMax = i;
        amino = cadena[i];
    }
}

// Removemos la secuencia de aminoácidos más larga encontrada en la cadena
cadena = cadena.slice(0, posicionMax) + cadena.slice(posicionMax + longitudMax);

console.log(`El amino viral de la cadena es: ${amino}`);
console.log(`La secuencia se produce a partir de la posicion ${posicionMax}`);
console.log(`La longitud de la secuencia más larga es: ${longitudMax}`);
console.log(`El ADN del virus desactivado sería: ${cadena}`);


