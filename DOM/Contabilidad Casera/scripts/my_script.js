const $d=document,
    $tFila=$d.querySelector("#template-fila").content,
    $tableBody=$d.querySelector("#expenseTable"),
    $form=$d.querySelector("form"),
    $tableFoot=$d.querySelector("tfoot")

const CC=[]

function renderFooter(cuentas) {
    $tableFoot.innerHTML=`<tr><td colspan="4">Aún no hay ingresos ni gastos!</td><!-- `
    if(cuentas.length) {
        let saldo = cuentas.reduce((anterior,actual)=>{
            if(actual.estado) {
                return actual.tipoOperacion.toLowerCase()=="ingreso"
                            ?parseFloat(anterior+actual.cantidad)
                            :parseFloat(anterior-actual.cantidad)
            } else {
                return anterior
            }
        },0)

        $tableFoot.innerHTML=`
        <tr>          
                <th colspan="4">Saldo Total: <span id="saldoTotal" class=${saldo>=0?"ingreso":"egreso"}>${saldo}</span></th>     
        </tr>`
    }

}

function renderElementos(cuentas) {
    //console.log(cuentas)
    $tableBody.innerHTML=""

    const $frag=$d.createDocumentFragment()
    cuentas.forEach((cuenta,i) => {
        const $clon=$tFila.cloneNode(true)
        const $tds=$clon.querySelectorAll("td")
        $tds[0].textContent=cuenta.tipoOperacion
        $tds[1].textContent=cuenta.concepto
        $tds[2].textContent=cuenta.cantidad
        $tds[3].querySelectorAll("i").forEach(el=>el.dataset.id=i)
        cuenta.estado
                ?$clon.querySelector("tr").classList.add(cuenta.tipoOperacion.toLowerCase())
            :$clon.querySelector("tr").classList.add("revertir")

        $frag.appendChild($clon)
    })
    $tableBody.appendChild($frag)
    renderFooter(cuentas)

}

$tableBody.addEventListener("click",ev=>{
    if(ev.target.tagName=="I") {

        if(ev.target.classList.contains("fa-trash")) {
            let indice=ev.target.dataset.id
            CC.splice(indice,1)
        }
        if(ev.target.classList.contains("fa-undo-alt")) {
            let indice=ev.target.dataset.id
            CC[indice].estado=!CC[indice].estado
        }
        renderElementos(CC)
    }

})

$form.addEventListener("submit", ev=>{
    ev.preventDefault()

    let concepto=$form.concepto.value
    let cantidad=$form.cantidad.value
    let tipoOperacion=$form.egreso.checked?"Egreso":"Ingreso"

    if(concepto!="" && cantidad != "") {
        //console.log(concepto,cantidad)
        let elemento= {
            concepto,
            cantidad,
            estado:true,
            tipoOperacion
        }
        CC.push(elemento)
        renderElementos(CC)

    } else {
        alert("Necesitas cubrir todos los datos")
    }

})