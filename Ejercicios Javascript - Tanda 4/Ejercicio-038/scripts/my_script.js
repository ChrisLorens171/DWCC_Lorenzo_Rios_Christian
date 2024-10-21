/***************************************************************************************************************
 *
 *   Objetivo: Practicar la programación funcional en la resolución de problemas
 *             Practicar en el uso de arrow functions
 *             Reforzar el aprendizaje sobre arrays
 *             Aprender nuevos métodos del objeto Math
 *
 *   Tarea: Calcular la suma de los pares y de los impares de n elementos de un array generados
 *          aleatoriamente entre 1 y 10.
 *
 *   Entrada : n
 *
 *   Salida  : Los elementos pares del array son: x1, x2, x3, ...
 *             Los elementos impares del array son: x1, x2, x3, ...
 *             La suma de los elementos pares del array es: XXXX
 *             La suma de los elementos impares del array es: YYYY
 *
 ***************************************************************************************************************/
import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"
const n = solicitarDato("Introduce la longitud del array:", "integer")

const generarArrayAleatorio = (n) => {
    return Array.from({length: n}, () => Math.floor(Math.random() * 10) + 1)
}

const calcularSumas = (array) => {

    // Filtrar los elementos pares de impares
    const pares = array.filter(num => num % 2 == 0)
    const impares = array.filter(num => num % 2 != 0)

    // Calculamos las sumas
    const sumaPares = pares.reduce((contador, num) => contador + num, 0)
    const sumaImpares = impares.reduce((contador, num) => contador + num, 0)

    // Mostramos los resultados
    console.log(`Los elementos pares del array son: ${pares.join(', ')}`)
    console.log(`Los elementos impares del array son: ${impares.join(', ')}`)
    console.log(`La suma de los elementos pares del array es: ${sumaPares}`)
    console.log(`La suma de los elementos impares del array es: ${sumaImpares}`)
}

const arrayAleatorio = generarArrayAleatorio(n)
calcularSumas(arrayAleatorio)
  