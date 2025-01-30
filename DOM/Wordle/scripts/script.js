const $d = document,
      $filas = $d.querySelectorAll(".fila"),
      $letras = $d.querySelector(".letras")

const abecedario = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')

const palabras = [
    "MANGO", "RATON", "NIEVE", "PLUMA", "FLORO", "LUCES", "TIGRE", "NUBES", "PERRO", "GATOS",
    "SALTO", "BOLSA", "JUEGO", "ROCAS", "PESCA", "VOLAR", "DULCE", "BRISA", "HOJAS", "TAPON",
    "BROMA", "FUEGO", "GOLPE", "ZORRO", "TARDE", "GRANO", "MARCO", "CIELO", "VIDAS", "COSTA",
    "RIEGO", "MUEVE", "FONDO", "BOTON", "NARIZ", "LIMON", "CARGA", "FRESA", "CALLE", "BEBER",
    "PUNTO", "RAMPA", "HOJAL", "TALON", "FUERA", "BARRA", "SABOR", "NOCHE", "QUESO", "PATIO",
    "FAROL", "MOTOR", "FALTA", "BANDA", "MUECA", "LAMPA", "GASTO", "HUEVO", "CIEGA", "FONIL",
    "LLAVE", "SILLA", "TRUCO", "MODOS", "VISTA", "RANGO", "TIRAR", "MARCH", "LISTA", "PISOS",
    "BROMO", "GIRAR", "CASCO", "LARGO", "RITMO", "SOBRE", "PARED", "MORIR", "ROMBO", "BINGO",
    "FICHA", "BASAR", "JIRON", "PLAZA", "ROBOT", "RUMBO", "TOMAR", "HUMOS", "OCULT", "PINTA",
    "NOBLE", "FIRME", "MARCH", "RADIO", "GORRA", "AVISO", "VIAJE", "MORAL", "PESOS", "SALSA",
    "PINGA","PUTAS"
]

const palabraSecreta = palabraAleatoria(palabras)

function palabraAleatoria(palabras) {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length)
    return palabras[indiceAleatorio]
}

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
            $inputs[id].style.backgroundColor = "#e43d19";
            $inputs[id].style.color = "white";

            // Cambia color en abecedario si existe
            if (indexAbecedario !== -1) {
                const letraElemento = $d.querySelector(`.letras span:nth-child(${indexAbecedario + 1})`);
                if (letraElemento) {
                    letraElemento.style.backgroundColor = "#e43d19";
                    letraElemento.style.color = "white";
                }
            }
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

    // Si agoto todos sus intentos recibe el mensaje de fallo
    const todasLasFilasDeshabilitadas = [...$filas].every(fila => {
        const inputsFila = fila.querySelectorAll("input");
        return [...inputsFila].every(input => input.disabled);
    })

    if (todasLasFilasDeshabilitadas) {
        alert(`¡Fallaste! La palabra correcta era: ${palabraSecreta}`)
    }
}

function renderLetras(abecedario) {
    $letras.innerHTML = abecedario.map(letra=>`
        <span class="letra">${letra}</span>
    `).join('') 
}

$d.addEventListener("DOMContentLoaded", ev=>{
    ev.preventDefault()

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
      