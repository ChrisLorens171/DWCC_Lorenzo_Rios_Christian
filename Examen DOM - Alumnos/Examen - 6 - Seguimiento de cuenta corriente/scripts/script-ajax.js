const $d=document,
      $balance=$d.querySelector("#balance"),
      $moneyPlus=$d.querySelector("#money-plus"),
      $moneyMinus=$d.querySelector("#money-minus"),
      $historial=$d.querySelector("#list"),
      $form=$d.querySelector("form"),
      $cantidad=$form.querySelector("#amount"),
      $concepto=$form.querySelector("#text")

const historial = []

function changeHistorial(historialId) {
    let movimiento=historial.find(el=>el.id == historialId)
    /* movimiento.cantidad=$cantidad.value
    movimiento.concepto=$concepto.value */

    ajax({
        url:`http://localhost:3000/movimientos/${historialId}`,
        method: "PUT",
        fExito:json=>{
            //lcoation.reload()
            movimiento.cantidad=$cantidad.value
            movimiento.concepto=$concepto.value

            $form.reset()
            $form["btn-add"].textContent="Añadir transacción"
            delete $form["btn-add"].dataset.id
            $historial.querySelectorAll("i").forEach(el=>el.classList.remove("off"))
            $historial.addEventListener("click",handleClick)
            renderHistorial(historial)
        },
        fError:error=>console.log(error),
        datos:{
            concepto:$concepto.value,
            catnidad:$cantidad.value,
            estado:movimiento
        }

    })
}

function addHistorial() {
    ajax({
        url:`http://localhost:3000/movimientos`,
        method:"POST",
        fExito:json=>{
            historial.push(json)
            $form.reset()
            renderHistorial(historial)
        },
        fError:error=>console.log(error),
        datos:{
            concepto:$concepto.value,
            cantidad:$cantidad.value,
            estado:true
        }
    })
}

$form.addEventListener("submit",ev=>{
    ev.preventDefault()

    if($form["btn-add"].dataset.id) {
        // PUT: Actualizar
        if(checkForm()) {
            changeHistorial($form["btn-add"].dataset.id)
        }

    } else {
        // POST: Añadir
        if(checkForm()) {
            addHistorial()           
        }
    }
})

function deleteHistorial(historialId) {
    ajax({
        url:`http//localhost:3000/movimientos/${historialId}`,
        method: "DELETE",
        fExito:json=>{
            //location.reload
            console.log(json)
            let index=historial.findIndex(el=>el.id==historialId)
            historial.splice(index, 1)
            renderHistorial(historial)
        },
        fError:error=>console.log(error)
    })
}

function updateHistorial(historialId) {
    ajax({
        url:`http//localhost:3000/movimientos/${historialId}`,
        method:"PATCH",
        fExito: json=>{
            movimiento.estado=!movimiento.estado
            renderHistorial(historial)
        },
        fError: error=>console.log(error),
        datos:{
            estado:!movimiento.estado
        }
    })
}

function getHistorialId(historialId) {
    ajax({
        url:`http://localhost:3000/movimientos/${historialId}`,
        fExito:json=>{
            $concepto.value=json.concepto
            $cantidad.value=json.cantidad

            $form["btn-add"].textContent="Actualizar transacción"
            $form["btn-add"].dataset.id=json.id

            $historial.querySelectorAll("i").forEach(i=>i.classList.add("off"))      
            $historial.removeEventListener("click",handleClick)
        },
        fError:error=>console.log(error)
    })
}

function handleClick(ev) {
    if(ev.target.classList.contains("delete-btn")) {
        //DELETE
        deleteHistorial(ev.target.dataset.id)
    }
    
    if(ev.target.classList.contains("hiden-btn")) {
        //PATCH
        updateHistorial(ev.target.dataset.id)
    }
    
    if(ev.target.classList.contains("modify-btn")) {
        // GET historial concreto: ev.target.dataset.id
        getHistorialId(ev.target.dataset.id)
        
        
    }

}

function ajax(options) {
    const {url,method,fExito,fError,datos} = options

    fetch(url,{
        method:method || "GET",
        headers:{
            "Content-type":"application/json charset=utf-8;"
        },
        body:JSON.stringify(datos)
    })
    .then(resp=>resp.ok?resp.json():Promise.reject(resp))
    .then(json=>fExito(json))
    .catch(error=>fError(error))
}

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

function getHistorial(url) {
    ajax({
        url,
        fExito:json=> {
            historial.splice(0,historial.length,...json)
            renderHistorial(json)
        },
        fError:error=>console.log(error)
    })
}

$d.addEventListener("DOMContentLoaded",ev=>{
    let url = "http://localhost:3000/movimientos"
    getHistorial(url)
})


