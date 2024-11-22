/* Ejercicio dos semáforos, que mandan as luces desordenadas e segun a cadena
hay que mostrar cantos semáforos podemos facer*/

// Forma do profe
function getnSemaforos(cadena, luces) {
    let nSemaforos = 0

    let posicion = cadena.indexOf(luces)
    while(posicion != -1) {
        nSemaforos++
        cadena=cadena.slice(0,posicion)+cadena.slice(posicion+luces.length-1)
        posicion=cadena.indexOf(luces)
    }

    return nSemaforos
}

// Forma Anton
function getnSemaforos2(cadena,luces) {
    let nSemaforos = 0

    while(cadena.includes(luces)) {
        nSemaforos++
        cadena=cadena.replace(luces,"")
    }

    return nSemaforos
}

const cadena = "RARAVV"
const luces = "RAV"

console.log(getnSemaforos(cadena,luces))
console.log(getnSemaforos2(cadena,luces))