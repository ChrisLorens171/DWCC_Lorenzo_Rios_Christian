const $d = document,
    [$hora, $min, $seg] = $d.querySelectorAll("select"),
    $restart = $d.querySelector("#start"),
    $reset = $d.querySelector("#reset")

let segundos = 0
let minutos = 0
let horas = 0
let interval = null
let pausado = false

function inicializarSelects() {

    /* Quedate con este método máquina */
    const h=Array.from({length:24},(el,i)=>i)
    const ms=Array.from({length:60},(el,i)=>i)

    $hora.innerHTML=h.map(el=>`<option value=${el}>${el.toString().padStart(2,"0")}</option>`).join('')
    $min.innerHTML=ms.map(el=>`<option value=${el}>${el.toString().padStart(2,"0")}</option>`).join('')
    $seg.innerHTML=ms.map(el=>`<option value=${el}>${el.toString().padStart(2,"0")}</option>`).join('')

}

// Actualiza los valores de horas, minutos y segundos con los seleccionados en los selects
function actualizarValores() {
    horas = parseInt($hora.value, 10)
    minutos = parseInt($min.value, 10)
    segundos = parseInt($seg.value, 10)
}

// Inicia la cuenta atrás y actualiza cada segundo
function cuentaAtras() {
    interval = setInterval(() => {

        if (horas == 0 && minutos == 0 && segundos == 0) {
            clearInterval(interval)
            interval = null
            pausado = false
            $restart.textContent = "Start"
            parpadearSelects() // Llama a la función de parpadeo cuando la cuenta acaba
            return
        }

        if (segundos == 0) {
            segundos = 59
            if (minutos == 0) {
                minutos = 59
                if (horas > 0) horas--
            } else {
                minutos--
            }
        } else {
            segundos--
        }

        actualizarSelects()
    }, 1000)
}

// Refleja los valores actuales en los selects
function actualizarSelects() {
    $hora.value = horas
    $min.value = minutos
    $seg.value = segundos
}

// Hace parpadear los selects con un color naranja cuando la cuenta llega a 0
function parpadearSelects() {
    let contador = 0
    const intervalParpadeo = setInterval(() => {
        // Alterna el color de fondo de los selects cada 0.5 segundos
        $hora.classList.toggle("fin")
        $min.classList.toggle("fin")
        $seg.classList.toggle("fin")
        contador++
        // Después de 5 segundos, detiene el parpadeo
        if (contador === 10) {
            clearInterval(intervalParpadeo)
            $hora.classList.remove("fin")
            $min.classList.remove("fin")
            $seg.classList.remove("fin")
        }
    }, 500)
}

// Evento para el botón de inicio/pausa
$restart.addEventListener("click", () => {
    segundos = $seg.selectedIndex
    minutos = $min.selectedIndex
    horas = $hora.selectedIndex
    
    // Si está en pausa, reanuda la cuenta
    if (interval) {
        clearInterval(interval)
        interval = null
        pausado = true
        $restart.textContent = "Continue"
    } 
    // Si la cuenta está pausada, la reanuda y cambia el botón a Stop
    else if (pausado) {
        cuentaAtras()
        pausado = false
        $restart.textContent = "Stop"
    } 
    // Si no está en pausa ni en cuenta atrás, la inicia
    else {
        actualizarValores()
        cuentaAtras()
        $restart.textContent = "Stop"
    }
})

// Evento para el botón de reset
$reset.addEventListener("click", () => {

    if (interval) {
        clearInterval(interval)
        interval = null
    }
    pausado = false
    // Restablece los valores de los selects a 0
    $hora.value = 0
    $min.value = 0
    $seg.value = 0
    horas = 0
    minutos = 0
    segundos = 0

    $restart.textContent = "Start"
})

inicializarSelects()