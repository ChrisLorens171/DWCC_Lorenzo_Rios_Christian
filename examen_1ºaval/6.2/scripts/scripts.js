/* Ejercicio dos tandems, ver o numero de parexas posibles nun tandem
segun o peso maximo posible */


function getTandems (pesos,pesoMax) {
    let nTandems = 0

    for (let i = 0; i<pesos.length;i++) {
        for(let j=i+1;j<pesos.length;j++) {
            if(pesos[i]+pesos[j]<=pesoMax) {
                nTandems++
            }
        }
    }

    return nTandems
}

function getTandems2 (pesos,pesoMax) {
    let nTandems = 0

    for (let i = 0; i<pesos.length;i++) {
        for(let j=0;j!=i;j++) {
            if(pesos[i]+pesos[j]<=pesoMax) {
                nTandems++
            }
        }
    }

    return nTandems
}

const pesoMax=8
const pesos=[3,2,4,1,6]

console.log(getTandems(pesos,pesoMax))
console.log(getTandems2(pesos,pesoMax))