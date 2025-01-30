const $d = document,
      $jugar = $d.querySelector("#jugar"),
      $dado1 = $d.querySelector(".j1"),
      $dado2 = $d.querySelector(".j2"),
      $mensaje = $d.querySelector(".container").querySelector("h1")


function compararNumeros(n1, n2) {
    if (n1 > n2) {
        $mensaje.innerHTML = "&#10024; Jugador 1 Gana"
    } else if (n2 > n1) {
        $mensaje.innerHTML = "Jugador 2 Gana &#10024;"
    } else {
        $mensaje.innerHTML = "Empate!"
        console.log(n1, n2)
    }
}

function renderDados() {
    const aleatorio1 = Math.floor(Math.random() * 6) + 1;
    const aleatorio2 = Math.floor(Math.random() * 6) + 1;

    $dado1.innerHTML = 
    `
        <div class="dado j1">
            <p>Jugador 1</p>
            <img class="img1" src="imagenes/dado${aleatorio1}.png">
        </div>
    `
    $dado2.innerHTML = 
    `
        <div class="dado j2">
            <p>Jugador 2</p>
            <img class="img2" src="imagenes/dado${aleatorio2}.png">
        </div>
    `

    compararNumeros(aleatorio1, aleatorio2)
}

$jugar.addEventListener("click", ev=>{
    ev.preventDefault()

    renderDados()
})


