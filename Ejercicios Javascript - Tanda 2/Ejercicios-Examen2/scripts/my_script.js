
let nfichas = parseInt(prompt('Introduce el número de fichas: '))

if (nfichas <= 10000 && nfichas > 0) {  
    let j=1
    let i=1
    let suma
    do {
        suma=0
        i=j
        while(suma<=nfichas){
            suma+=i
            i++
        }
        j++
        i--
        suma-=i
    } while(suma!=nfichas)
    console.log(j-1,i-1,i-j+1)
} 


function contarFichas(fichasTotales,inicio){
    let suma=0
    let i=inicio
    while(suma<=fichasTotales){
        suma+=i
        i++
    }
    i--
    suma-=i
    if (suma!=fichasTotales)
        return contarFichas(fichasTotales,inicio+1)
    else {
        return {
            inicio,
            fin:i-1,
            altura:i-inicio
        }
    }
}

console.log(contarFichas(nfichas,1))
