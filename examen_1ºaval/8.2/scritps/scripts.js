/* Ejercicio que no se atraganten */

function nUvasMaximo(pesos,pesoMax) {
    const nuevosPesos = [...pesos].sort((a,b)=>a-b)
    return nuevosPesos.length==1 && nuevosPesos[0]<pesoMax
        ?1
        :nuevosPesos.findIndex((el,i)=>el+nuevosPesos[i+1]>pesoMax)+1
}


function nUvasMaximo2(pesos,pesoMax) {}

const pesoMax = 8
const pesos=[2,9,3,8,1,2]

console.log(nUvasMaximo(pesos,pesoMax))