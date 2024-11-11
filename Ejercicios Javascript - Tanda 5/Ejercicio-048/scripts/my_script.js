/***************************************************************************************************************
 *
 *   Objetivo: Refuerzo en la programación según las especificaciones del programa a resolver
 *             Aprender a plantearse la solución de formas menos convencionales
 *             Aprender a emplear programación funcional
 *             Aprender las diferencias entre objetos String y Array
 *             Aprender a definir objetos
 *
 *   Tarea: Solicitar al usuario una cadena de texto. 
 *          Crear y mostrar un objeto con la frecuencia del número de vocales
 *
 *   Entrada : cadena de texto  (p.j: La verdad saldrá a la luz)
 *
 *   Salida  : Frecuencia de vocales { "a":6, "e":1, "i":0, "o":0, "u":1 }
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

function calcularFrecuencias1(cadena,caracteres){
    // Convertimos el array caracteres en un objeto de la forma {a:0,e:0,i:0,o:0,u:0}
    const frecuencias={}
    caracteres.forEach(elemento=>frecuencias[elemento]=0)
    
    // Recorremos la cadena y vamos comprobando si cada letra está en las keys (claves)
    // de frecuencias. Si está, se incrementa su valor
    for (let i=0;i<cadena.length;i++)
        if (Object.keys(frecuencias).includes(cadena[i]))
            frecuencias[cadena[i]]++
    return frecuencias
}

function calcularFrecuencias2(cadena,caracteres){
    // Otra forma de convertir el array caracteres en un objeto de la forma {a:0,e:0,i:0,o:0,u:0}
    const frecuencias=caracteres.reduce((anterior,actual)=>{
        anterior[actual]=0
        return anterior
    },{})
    
    // Para cada letra de la cadena vemos si existe una key (clave) en el objeto frecuencias
    // y si existe, incrementamos su valor
    cadena.split('').forEach(element => {
        if (Object.keys(frecuencias).includes(element))
            frecuencias[element]++
    });
    return frecuencias
}

function calcularFrecuencias3(cadena,caracteres){
    const frecuencias={}
    
    // Recorremos los caracteres a buscar y establecemos el valor de la frecuencia segun la longitud
    // del array resultante de filtrar la cadena (convertida en array) en cada clave 
    caracteres.forEach(key=>frecuencias[key]=cadena.split('').filter(el=>el==key).length)
    return frecuencias
}

function calcularFrecuencias4(cadena,caracteres){
    const frecuencias={}

    // Con expresiones regulares
    caracteres.forEach(letra=>{
        let resultado=cadena.match(new RegExp(`${letra}`,"g"))
        frecuencias[letra]=resultado?resultado.length:0
    })
    return frecuencias
}

let cadena=solicitarDato("Dame una cadena: ","string")
console.log(calcularFrecuencias3(cadena,["a","e","i","o","u"]))


