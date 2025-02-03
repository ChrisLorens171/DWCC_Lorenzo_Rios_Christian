const $d=document,
      $balance=$d.querySelector("#balance"),
      $moneyPlus=$d.querySelector("#money-plus"),
      $moneyMinus=$d.querySelector("#money-minus"),
      $historial=$d.querySelector("#list"),
      $form=$d.querySelector("form"),
      $cantidad=$form.querySelector("#amount"),
      $concepto=$form.querySelector("#text")

const historial=JSON.parse(sessionStorage.getItem("historial")) || []

function checkForm() {
    if ($concepto.value!="" && $cantidad.value!="") {
        return true
    } else {
        return false
    }
}

$form.addEventListener("submit",ev=>{
    ev.preventDefault()

    if($form["btn-add"].dataset.id) {
        // Actualizar
        if(checkForm()) {
            let movimiento=historial.find(el=>el.id == $form["btn-add"].dataset.id)
            movimiento.cantidad=$cantidad.value
            movimiento.concepto=$concepto.value

            
            $form.reset()
            $form["btn-add"].textContent="Añadir transacción"
            delete $form["btn-add"].dataset.id
            $historial.querySelectorAll("i").forEach(el=>el.classList.remove("off"))
            $historial.addEventListener("click",handleClick)
            renderHistorial(historial)
        }

    } else {
        // Añadir
        if(checkForm()) {
            let id = 0
            if(historial.length) {
                id=Math.max(...historial.map(el=>el.id))+1
            }
            
            historial.push({
                id,
                concepto:$concepto.value,
                cantidad:$cantidad.value,
                estado:true
            })
            $form.reset()
            renderHistorial(historial)
        }
    }
})

function handleClick(ev) {
    if(ev.target.classList.contains("delete-btn")) {
        let index=historial.findIndex(el=>el.id == ev.target.dataset.id)
        historial.splice(index, 1)
        renderHistorial(historial)
    }
    
    if(ev.target.classList.contains("hiden-btn")) {
        let movimiento=historial.find(el=>el.id == ev.target.dataset.id)
        movimiento.estado=!movimiento.estado
        renderHistorial(historial)
    }
    
    if(ev.target.classList.contains("modify-btn")) {
        let movimiento=historial.find(el=>el.id == ev.target.dataset.id)
        console.log(ev.target)
        $concepto.value=movimiento.concepto
        $cantidad.value=movimiento.cantidad

        $form["btn-add"].textContent="Actualizar transacción"
        $form["btn-add"].dataset.id=movimiento.id

        $historial.querySelectorAll("i").forEach(i=>i.classList.add("off"))      
        $historial.removeEventListener("click",handleClick)
    }

}

$historial.addEventListener("click", handleClick)

function renderHistorial(historial) {
    sessionStorage.setItem("historial",JSON.stringify(historial))

    $historial.innerHTML = historial.reduce((anterior,actual)=>anterior+`
        <li class="${actual.cantidad>0?'plus':'minus'}">
            ${actual.concepto}
            <span class="${actual.estado?'':'tachar'}">${actual.cantidad}</span>
            <p class="list-btn">
                <i class="fa-solid fa-trash delete-btn" data-id="${actual.id}"></i>
                <i class="fa-solid ${actual.estado?'fa-eye':'fa-eye-slash'} hiden-btn" data-id="${actual.id}"></i>
                <i class="fas fa-undo-alt modify-btn" data-id="${actual.id}"></i>
            </p>
        </li>`,'')

    // Suma de entradas positivas
    let plus = historial
    .filter(el=>el.estado)
    .filter(el=>el.cantidad>0)
    .reduce((anterior,actual)=>anterior+parseFloat(actual.cantidad),0)

    $moneyPlus.innerHTML = `${plus} &euro;`
        
    let minus = historial
    .filter(el=>el.estado)
    .filter(el=>el.cantidad<0)
    .reduce((anterior,actual)=>anterior+parseFloat(actual.cantidad),0)

    $moneyMinus.innerHTML = `${minus} &euro;`

    $balance.innerHTML = `${plus+minus} &euro;`

}

$d.addEventListener("DOMContentLoaded",ev=>{
    renderHistorial(historial)
})


