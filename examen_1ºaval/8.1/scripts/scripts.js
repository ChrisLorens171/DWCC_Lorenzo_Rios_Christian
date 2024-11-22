/* Ejercicio se ha colado */

function getColados(listaNumeros) {
    let nExpulsados = 0

    for (let i = 0; i<listaNumeros.length;i++) {
        if (listaNumeros.some((el,j)=>j>i&&el<listaNumeros[i])) {
            nExpulsados++
        }
    }

    return nExpulsados
}

const numeros=[2,5,1,7,6]

console.log(getColados(numeros))
