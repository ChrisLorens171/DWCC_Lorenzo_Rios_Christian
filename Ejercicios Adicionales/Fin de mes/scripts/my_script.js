import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

let ahorrado = solicitarDato("Introduce tus ahorros: ", "integer")
let gastos = solicitarDato("Introduce tus gastos de este mes: ", "integer")
let resultado = ahorrado + gastos


if (resultado >= 0) {
    console.log("Si")
} else {
    console.log("No")
}

console.log(`Te quedarías con ${resultado}`)