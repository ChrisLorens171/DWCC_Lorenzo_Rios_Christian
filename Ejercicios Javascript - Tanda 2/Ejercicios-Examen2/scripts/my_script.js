
let nfichas = parseInt(prompt('Introduce el número de fichas: '))
let altura = 0
let i = 0
let j = i
let sum = j

if (nfichas <= 10000 && nfichas > 0) {
    
    while (i <= nfichas) {

        while (j <= nfichas) {

            j++
            sum += j

        }

        altura++
        i++
    }
}