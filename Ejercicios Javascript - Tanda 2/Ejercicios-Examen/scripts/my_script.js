
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let cadena = solicitarDato("Introduce la cadena de aminoaciados: ", "string");

function buscarAminosIguales(cadena,posicion){
    let i=posicion
    while(i+1<cadena.length&&cadena[i]==cadena[i+1])
        i++
    return i-posicion+1
}

let longitudMax=0
let longitud=0
let amino=""
let posicionMax=0
for (let i=0;i<cadena.length;i+=longitud){
    longitud=buscarAminosIguales(cadena,i)
    if (longitud>=longitudMax) {
        longitudMax=longitud
        posicionMax=i
        amino=cadena[i]
    }
}

console.log(posicionMax,longitudMax,amino)