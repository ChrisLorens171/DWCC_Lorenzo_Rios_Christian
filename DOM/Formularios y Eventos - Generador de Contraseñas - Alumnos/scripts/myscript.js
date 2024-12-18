const $d = document,
        $resultado = $d.getElementById("resultado"),
        $portapapeles = $d.getElementById("portapapeles"),
        $longitudInput = $d.getElementById("longitud"),
        $mayusculasCheckbox = $d.getElementById("mayusculas"),
        $minusculasCheckbox = $d.getElementById("minusculas"),
        $numerosCheckbox = $d.getElementById("numeros"),
        $simbolosCheckbox = $d.getElementById("simbolos"),
        $generarBtn = $d.getElementById("generar")

function generarContra(longitud, mayusculas, minusculas, numeros, simbolos) {
    let opciones = ""
    let contra = ""

    opciones += mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    opciones += minusculas = "abcdefghijklmnopqrstuvwxyz"
    opciones += numeros = "1234567890"
    opciones += simbolos = ":_¨Ç^*¿?'¡=)(/&%$."

    if (opciones = "") {
        contra = "Marca algo manin"
    } else {
        let array = opciones.split("")
        
        while (longitud > 0) {
            contra = array[Math.floor(Math.random() * array.length)]
            longitud--
        }

    }

    return contra
}

$generarBtn.addEventListener("click", ev=>{
    ev.preventDefault()

    let contra = generarContra($longitudInput.value, $mayusculasCheckbox.checked, $minusculasCheckbox.checked, $numerosCheckbox.checked, $simbolosCheckbox.checked)
    $resultado.textContent = contra
})

$copiar.addEventListener("click",ev=>{
    ev.preventDefault();
    
    let portapapeles=$resultado.textContent
    navigator.clipboard.writeText(portapapeles);
})


