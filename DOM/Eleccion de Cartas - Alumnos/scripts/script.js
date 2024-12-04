const $d = document,
      $palo = $d.getElementById("palo"),
      $numero = $d.querySelector("input[type='number']"),
      [$addBtn, $delBtn, $btnOperar] = $d.querySelectorAll("button"),
      $figuras = $d.querySelector("#figuras"),
      [$insertar, $sustituir] = $d.querySelectorAll("input[type='radio']"),
      $nCartas = $d.querySelector("#ncartas");

let cartas = [];

// Renderizar las cartas
function renderCartas() {
    $figuras.innerHTML = cartas.reduce((anterior, actual, i) => anterior + `
        <figure>
            <img id="${i}" src="imagenes/${actual.palo}${actual.num}.png" alt="Carta ${actual.palo}${actual.num}">
        </figure>`, '');

    // Actualizar la lista de opciones en el menú
    actualizarListaCartas();
}

// Crear objeto carta
function crearObjetoCarta() {
    return {
        palo: $palo.value,
        num: $numero.value
    };
}

// Actualizar la lista de cartas en el menú de selección
function actualizarListaCartas() {
    $nCartas.innerHTML = cartas.map((_, i) => `<option value="${i}">Carta ${i + 1}</option>`).join('');
}

// Eliminar una carta específica
function eliminarCarta(palo, num) {
    cartas = cartas.filter(carta => !(carta.palo === palo && carta.num === num));
}

// Añadir carta
$addBtn.addEventListener("click", ev => {
    ev.preventDefault();

    const carta = crearObjetoCarta();
    const existe = cartas.some(el => el.palo === carta.palo && el.num === carta.num);

    if (!existe) {
        cartas.push(carta);
    } else {
        alert("Ya existe esa carta.");
    }

    renderCartas();
});

// Borrar carta
$delBtn.addEventListener("click", ev => {
    ev.preventDefault();

    const carta = crearObjetoCarta();
    eliminarCarta(carta.palo, carta.num);

    renderCartas();
});

// Insertar o sustituir carta
$btnOperar.addEventListener("click", ev => {
    ev.preventDefault();

    const carta = crearObjetoCarta();
    const pos = parseInt($nCartas.value, 10);

    if ($insertar.checked && !isNaN(pos)) {
        cartas.splice(pos, 0, carta); // Insertar antes de la posición
    } else if ($sustituir.checked && !isNaN(pos)) {
        cartas[pos] = carta; // Sustituir en la posición
    } else {
        alert("Seleccione una operación válida y un índice.");
    }

    renderCartas();
});

// Render inicial
renderCartas();
