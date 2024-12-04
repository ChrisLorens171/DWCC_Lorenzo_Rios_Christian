const $d = document,
    [$hora, $min, $seg] = $d.querySelectorAll("select"),
    $restart = $d.querySelector("#start"),
    $reset = $d.querySelector("#reset")

let segundos = 0,
    minutos = 0,
    horas = 0

// Inicializa los valores en los selects
function inicializarSelects() {
    for (let i = 0; i < 24; i++) {
        $hora.innerHTML += `<option value="${i}">${i < 10 ? "0" + i : i}</option>`
    }
    for (let i = 0; i < 60; i++) {
        $min.innerHTML += `<option value="${i}">${i < 10 ? "0" + i : i}</option>`
        $seg.innerHTML += `<option value="${i}">${i < 10 ? "0" + i : i}</option>`
    }
}

// Captura los valores iniciales del usuario
function actualizarValores() {
    horas = parseInt($hora.value, 10)
    minutos = parseInt($min.value, 10)
    segundos = parseInt($seg.value, 10)
}

// Maneja la cuenta atrás
function cuentaAtras() {
    const interval = setInterval(() => {
        if (horas == 0 && minutos == 0 && segundos == 0) {
            clearInterval(interval)
            alert("Acabó la cuenta primo")
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

// Refleja los valores en los selects
function actualizarSelects() {
    $hora.value = horas
    $min.value = minutos
    $seg.value = segundos
}

// Botones de inicio y reset
$restart.addEventListener("click", () => {
    actualizarValores()
    cuentaAtras()
});

$reset.addEventListener("click", () => {
    $hora.value = 0
    $min.value = 0
    $seg.value = 0
    horas = 0
    minutos = 0
    segundos = 0
})

inicializarSelects()
