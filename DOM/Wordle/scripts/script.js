const $d = document,
      $filas = $d.querySelectorAll(".fila"),
      $letras = $d.querySelectorAll("input")
      
      function comprobarIntento(intento, palabraSecreta) {
        const letrasSecretas = palabraSecreta.toUpperCase().split('');
        
        intento.forEach((input, index) => {
            const letraIntento = input.value.toUpperCase();
            
            if (letrasSecretas[index] === letraIntento) {
                input.style.backgroundColor = 'lightgreen';
            } else if (letrasSecretas.includes(letraIntento)) {
                input.style.backgroundColor = 'yellow';
            } else {
                input.style.backgroundColor = 'lightcoral';
            }
        });
    }

$d.addEventListener("DOMContentLoaded", ev=>{
    ev.preventDefault()
    const palabraSecreta = "MANOS"
    
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
                comprobarIntento($intento, palabraSecreta)
            } else {
                alert("Introduce todas las letras.")
            }
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
      