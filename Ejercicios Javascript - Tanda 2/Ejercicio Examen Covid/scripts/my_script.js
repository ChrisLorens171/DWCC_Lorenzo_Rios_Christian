
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js";

let cadena = solicitarDato("Introduce la cadena de aminoaciados: ", "string");

let masRepetido = [...cadena].sort((a, b) => 

    cadena.split(b).length - cadena.split(a).length

)[0];

function eliminarAminos(cadena) {

    return cadena.replaceAll(masRepetido, '');

}

console.log(`Cadena introducida: ${cadena}`)
console.log(`El más repetido es ${masRepetido}`)
console.log(`Eliminando el más repetido tendríamos: ${eliminarAminos(cadena)}`); 
  
