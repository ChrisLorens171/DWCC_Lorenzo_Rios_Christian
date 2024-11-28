const $d = document,
      $libros = $d.querySelector(".columnas"),
      $tLibro = $d.querySelector("#template-libro").content,
      $resultado = $d.querySelector("#resultado"),
      $comprar = $d.querySelector("input[type=submit]"),
      $limpiar = $d.querySelector("input[type=reset]");

const libros = [
    {
        titulo: "Java 17",
        img: "imagenes/libro1.jpg",
        precio: 30
    },
    {
        titulo: "HTML & CSS",
        img: "imagenes/libro2.jpg",
        precio: 40
    },
    {
        titulo: "Javascript",
        img: "imagenes/libro3.jpg",
        precio: 90
    }
];

let resultado = 0;

// Función para renderizar los libros
function renderLibros(libros) {
    $libros.innerHTML = libros.map(libro => `
        <div class="libro" data-id="${libro.titulo}">
            <strong>${libro.titulo}</strong>
            <figure>
                <img src="${libro.img}" alt="${libro.titulo}" />
            </figure>
            <p class="linea">
                <strong>${libro.precio} &euro;</strong>
                <input type="checkbox" name="libro" value="${libro.precio}" />
            </p>
        </div>`).join('');
}

renderLibros(libros);

// Función para manejar el evento de clic
$libros.addEventListener("click", ev => {
    const libroDiv = ev.target.closest(".libro");
    if (libroDiv) {
        const checkbox = libroDiv.querySelector("input[type=checkbox]");

        // Si se hace clic en cualquier parte del libro (no en el checkbox)
        if (!ev.target.matches("input[type=checkbox]")) {
            checkbox.checked = !checkbox.checked;
        }

        // Cambiar el estado del checkbox (marcar/desmarcar)
        if (checkbox.checked) {
            libroDiv.classList.add("seleccionado");
            resultado += parseInt(checkbox.value);
        } else {
            libroDiv.classList.remove("seleccionado");
            resultado -= parseInt(checkbox.value);
        }

        $resultado.value = `${resultado}€`;
    }
});

$comprar.addEventListener("click", ev => {
    ev.preventDefault();

    // Si el total es 0, significa que no hay nada en el carrito
    if (resultado == 0) {
        alert("¡El carrito está vacío!");
    } else {
        alert(`¡Compra realizada! Total a pagar: ${resultado}€`);
    }
});

$limpiar.addEventListener("click", () => {
    // Desmarcar todos los checkboxes
    $libros.querySelectorAll("input[type=checkbox]").forEach(checkbox => {
        checkbox.checked = false;
    });

    // Remover clase "seleccionado" de todos los libros
    $libros.querySelectorAll(".libro").forEach(libroDiv => {
        libroDiv.classList.remove("seleccionado");
    });

    // Reiniciar el resultado
    resultado = 0;
    $resultado.value = `${resultado}€`;
});
