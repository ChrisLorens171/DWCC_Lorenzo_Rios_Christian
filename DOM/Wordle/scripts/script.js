const $d = document,
      $filas = $d.querySelectorAll(".fila"),
      $letras = $d.querySelector(".letras")

const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

      
function comprobarIntento(intento, palabraSecreta, $inputs, abecedario) {
    const palabraArray = palabraSecreta.toUpperCase().split('')

    intento.forEach((el, id) => {
        const letra = el.toUpperCase()
        const indexAbecedario = abecedario.findIndex(e => e == letra)

        if (palabraArray.includes(letra)) {
            if (palabraArray[id] == letra) {
                $inputs[id].style.backgroundColor = "LightGreen"
            } else {
                $inputs[id].style.backgroundColor = "Yellow"
            }
        } else {
            $inputs[id].style.backgroundColor = "#e43d19"
            $inputs[id].style.color = "white"

            // Cambia color en abecedario
            $d.querySelector(`.letras span:nth-child(${indexAbecedario + 1})`).style.backgroundColor = "#e43d19"
            $d.querySelector(`.letras span:nth-child(${indexAbecedario + 1})`).style.color = "white"
        }

        // Deshabilita el input actual
        $inputs[id].disabled = true;
    })

    // Verifica si acertaron toda la palabra
    if (intento.every((el, i) => el == palabraArray[i])) {
        alert("Acertaste")
        $filas.forEach(el=>{
            $button = el.querySelector(".comprobar")
            $button.disabled=true
        })
    }
}


function renderLetras(abecedario) {
    $letras.innerHTML = abecedario.map(letra=>`
        <span class="letra">${letra}</span>
    `).join('') 
}

$d.addEventListener("DOMContentLoaded", ev=>{
    ev.preventDefault()
    const palabraSecreta = "MANOS"

    renderLetras(abecedario)

    $filas.forEach(el=>{
        const $comprobar = el.querySelector(".comprobar")
        const $inputs = el.querySelectorAll("input")

        // Al clickar en el boton comprobamos los inputs
        $comprobar.addEventListener("click", ev=>{
            // Creamos un array donde guardaremos los caracteres introducidos
            const $intento = []

            // Comprobamos los caracteres introducidos
            $inputs.forEach(el=> {
                let char = el.value.toUpperCase()

                // Si son letras lo añadimos al array
                if (/^[a-zA-Z]+$/.test(char)) {
                    $intento.push(char)
                }
            })

            if ($intento.length == 5) {
                comprobarIntento($intento, palabraSecreta, $inputs, abecedario)
            } else {
                alert("Introduce todas las letras.")
            }
            console.log("Funciona")
        })
        
        $inputs.forEach((input, index) => {
            input.addEventListener("keyup", ev=>{
                const key = ev.key

                // Hacemos que el focus cambie al teclear una letra al siguiente
                if (/^[a-zA-Z]$/.test(key) && input.value.length == 1) {
                    if (index < $inputs.length - 1) {
                        $inputs[index + 1].focus()
                    }
                }

                // Con el backspace volvemos a la anterior
                if (key == "Backspace" && input.value == "" && index > 0) {
                    $inputs[index - 1].focus()
                }
            })
        })
    })
})
      