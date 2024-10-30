/***************************************************************************************************************
 *
 *   Objetivo: Aprender métodos del objeto array
 *
 *   Tarea: Tenemos n números enteros consecutivos (salvo uno) desordenados en un array. 
 *          Buscar el número entero "perdido".
 *
 *   Entrada : ---
 *
 *   Salida  : El entero que falta en el array
 *
 ***************************************************************************************************************/
let arrNumeros = [1,6,4,7,8,9,2]

let arrOrdenados = arrNumeros.sort()

function encontrarPerdido (arrayOrdenados) {
    let mensaje = ""

    // Calculo el maximo y minimo del array
    let min = Math.min(...arrayOrdenados)
    let max = Math.max(...arrayOrdenados)

    // Obtenemos el numero de terminos
    let totalTerminos = arrayOrdenados.length + 1

    // Calculamos la suma total de la serie de numeros contando el numero perdido
    let sumaTotal = (min + max) * totalTerminos / 2

    // Calculamos la suma total de la serie de numeros sin contar el numero perdido
    let sumaReal = arrayOrdenados.reduce((contador, actual) => contador + actual, 0)

    // La diferencia entre sumaTotal y sumaReal es el numero perdido
    let resultado = sumaTotal - sumaReal

    mensaje = `El entero que falta es ${resultado}`

    return mensaje
}

console.log(encontrarPerdido(arrOrdenados))