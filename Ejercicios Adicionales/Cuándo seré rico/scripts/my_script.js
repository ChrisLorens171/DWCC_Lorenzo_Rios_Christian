import solicitarDato from "../../../Ejercicios Javascript - Tanda 1/ValidarDatos.js"

let contador = 2
let n
let cantidadActual = 2

do  {
    console.log("Numero incorrecto, debe ser un número entre 1 y 1000000000")
    n = solicitarDato("Introduce los centimos a conseguir","integer")
} while (n < 1 || n > 1000000000)

if (n == 1) {
    contador = 1
} else if (n == 2){
    contador = 2
} else {
    for (let i = 1, j = 1, z = 0; cantidadActual < n; z=i, i=j, j=2*z+i) {
        contador++
        cantidadActual += 2*i+j
    }
}

console.log(`Jaime tardará ${contador} días en hacerse rico. !Que suerte!`)
