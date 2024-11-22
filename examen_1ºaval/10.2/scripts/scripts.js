/* Ejercicio de mejillones */
const sizes = [8,6,6,7,5,2,5,2,2]

function getMiMontones(tamanhos) {
    const particiones=[]

    for (let i = 0; i < tamanhos.length;i++) {
        if(particiones.length>0) {
            
        } else {
            particiones.push(tamanhos[i])
        }
    }
}

console.log(getMiMontones(sizes))