import GridCombobox from "./Combo.js";

const $d=document,
      $form=$d.querySelector("form"),
      $equipos=$form.querySelector("#equipos")

/* Debería devuelver un array con los nombres de los equipos que incluyan la cadena cad */
function searchEquipos(cad){
   return ["equipo1","equipo2"]
}

// Capitaliza todas las palabras de una frase
function capitalize(cad){
    return cad.toLowerCase().split(" ").filter(el=>el!='').map(el=>el.charAt(0).toUpperCase()+el.slice(1)).join(' ')
}

$d.addEventListener("DOMContentLoaded",ev=>{

    // Código 
    
    /* 
       Muestra en $equipos el array devuelto por searchEquipos conforme se escriba en 
       el elemento con id equipo. Podemos emplear las teclas de selección para seleccionar
       el equipo y pulsar Intro

       La funcion searchEquipos debe devolver un array con los nombres de los equipos que
       incluyan la cadena se que está escribiendo en 
    */
    new GridCombobox(
        $d.getElementById('equipo'),
        $equipos,
        searchEquipos
    );  

    // Resto del código que consideres necesario
})