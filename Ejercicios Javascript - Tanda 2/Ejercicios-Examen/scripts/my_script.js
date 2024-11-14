
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let cadena = solicitarDato("Introduce la cadena de aminoaciados: ", "string");
let longitudMax = 0
let longitud = 0
let posicionMax = 0
let amino = "" 

function buscarAminosIguales(cadena,posicion){
    let i = posicion
    /* Mientras el elemento sea igual al siguiente seguimos contando, cuando sea diferente salimos del while */
    while (i + 1 < cadena.length && cadena[i] == cadena[i + 1])
        i++
    return i - posicion + 1
}

for (let i = 0; i < cadena.length; i += longitud) {
    longitud = buscarAminosIguales(cadena,i)
    if (longitud >= longitudMax) {
        longitudMax = longitud
        posicionMax = i
        amino = cadena[i]
    }
}

cadena = cadena.slice(0, posicionMax) + cadena.slice(posicionMax + longitudMax)

console.log(`La secuencia más larga corresponde al aminoácido ${amino}`)
console.log(`La secuencia se produce a partir de la posición ${posicionMax}`)
console.log(`La longitud de la secuencia de aminoácido más larga es ${longitudMax}`)
console.log(`El ADN del virus desactivado es ${cadena}`)

