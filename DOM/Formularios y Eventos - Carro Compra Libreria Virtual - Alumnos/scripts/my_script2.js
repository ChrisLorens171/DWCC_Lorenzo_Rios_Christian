const $d = document,
      $libros = $d.querySelector(".columnas"),
      $tLibro = $d.querySelector("#template-libro").content,
      $resultado = $d.querySelector("#resultado"); // Para mostrar el resultado

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

        // Cambiar el estado del checkbox (marcar/desmarcar)
        if (ev.target.matches("input[type=checkbox]")) {
            if (checkbox.checked) {
                resultado += parseInt(checkbox.value);  // Sumar el precio
                
            } else {
                resultado -= parseInt(checkbox.value);  // Restar el precio
            }

            $resultado.value = resultado;
        }
    }
});
