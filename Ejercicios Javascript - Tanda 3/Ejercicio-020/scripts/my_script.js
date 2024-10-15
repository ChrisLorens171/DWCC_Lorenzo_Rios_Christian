/***************************************************************************************************************
 *
 *   Objetivo: Conocer nuevos métodos del objeto Math
 *             Aprender la diferencia entre funciones definidas y expresadas
 *             Mejorar en el uso de lógica de programación para la resolución de problemas
 *             Mejorar en la comunicación con el usuario
 *
 *   Tarea: Adivina un número. 
 *          Solicitaro números enteros entre 1 y 100 mientras el usuario no acierte un número, que se escogerá
 *          inicialmente de forma aleatoria.
 *          Al finalizar el juego se mostrará el número de intentos, pero sin tener en cuenta aquellos intentos 
 *          en los que se introduce un dato incorrecto (que no esté sea un número entero entre 1 y 100).
 *
 *   Entrada : un número entero, n (en cada intento)
 *
 *   Salida  : ! Has acertado ! Has necesitado XX intentos
 *             ! Has fallado ! El número que tienes que adivinar es (mayor|menor)
 *
 ***************************************************************************************************************/

import solicitarDato from "../../validarDatos.js"

const aleatorioFn=(min,max)=>parseInt(min+(max-min)*Math.random())

function pedirDato(msg,min,max=Infinity){
    let dato=solicitarDato(msg,"integer")
    while (dato<min||dato>max){
        if (max!=Infinity)
            alert(`El numero entero debe estar entre ${min} y ${max}`)
        else
            alert(`El numero entero debe ser mayor que ${min-1}`)
        dato=solicitarDato(msg,"integer")
    }
    return dato
}

let min=1
let max=100

let nIntentos=0
let aleatorio=aleatorioFn(min,max+1)
let numero=null
let respuesta=null
do{
    numero=pedirDato(`Numero entero entre ${min} y ${max}`,min,max)
    if (numero!=aleatorio){
        respuesta=(numero>aleatorio)
                     ?`El numero es menor`
                     :`El numero es mayor`
        console.log(respuesta)
    }
    nIntentos++
} while (numero!=aleatorio)
console.log(`Has acertado en ${nIntentos} intentos`)
