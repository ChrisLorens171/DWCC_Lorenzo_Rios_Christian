const $d = document,
        $resultado = $d.getElementById("resultado"),
        $portapapeles = $d.getElementById("portapapeles"),
        $longitudInput = $d.getElementById("longitud"),
        $mayusculasCheckbox = $d.getElementById("mayusculas"),
        $minusculasCheckbox = $d.getElementById("minusculas"),
        $numerosCheckbox = $d.getElementById("numeros"),
        $simbolosCheckbox = $d.getElementById("simbolos"),
        $generarBtn = $d.getElementById("generar")

const aleatorio=(min,max)=>parseInt(min+(max-min)*Math.random())

function desordenar(vector){
    const vectorCopy=[...vector]
    const solucion=[]

    let i=0
    while (vectorCopy.length) {
        let indice=aleatorio(0,vectorCopy.length)
        solucion[i]=vectorCopy[indice]
        vectorCopy.splice(indice,1)
        i++
    }
    return solucion
}

function generarContra(longitud, mayusculas, minusculas, numeros, simbolos) {
    const opciones = []
    const contra = []

    mayusculas&&opciones.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''))
    minusculas&&opciones.push("abcdefghijklmnopqrstuvwxyz".split(''))
    numeros&&opciones.push("1234567890".split(''))
    simbolos&&opciones.push(":_¨Ç^*¿?'¡=)(/&%$.".split(''))

    if (opciones.length) {
        while (contra.length<longitud) {
            opciones.forEach(opcion=>{
                if (contra.length<longitud) {
                    contra.push(opcion[aleatorio(0,opcion.length)])
                }
            })
        }
        contra.splice(0,contra.length,...desordenar(contra)) 
    }

    return contra.join('')
}

$generarBtn.addEventListener("click", ev=>{
    ev.preventDefault()

    let contra = generarContra($longitudInput.value, $mayusculasCheckbox.checked, $minusculasCheckbox.checked, $numerosCheckbox.checked, $simbolosCheckbox.checked)
    $resultado.textContent = contra
})

$portapapeles.addEventListener("click",ev=>{
    ev.preventDefault();
    
    let portapapeles = $resultado.textContent
    navigator.clipboard.writeText(portapapeles);
})


