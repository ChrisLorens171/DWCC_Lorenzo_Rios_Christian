const citas=[
  {
    "mascota": "Kuki",
    "propietario": "Tino Fernandez",
    "fecha": "2025-01-10",
    "hora": "16:10",
    "sintomas": "Se va por la pata abajo",
    "id": 1
  },
  {
    "mascota": "Tigre",
    "propietario": "Ana Lorenzo",
    "fecha": "2025-03-18",
    "hora": "15:20",
    "sintomas": "Pesa poco. Caniche",
    "id": 2
  },
  {
    "mascota": "Neptuno",
    "propietario": "Lisa Simpson",
    "fecha": "2025-03-18",
    "hora": "16:20",
    "sintomas": "Pierde pelo en abundancia",
    "id": 3
  },
  {
    "mascota": "Guffi",
    "propietario": "Roberto Disney",
    "fecha": "2025-03-19",
    "hora": "16:44",
    "sintomas": "Habla como una cotorra",
    "id": 4
  },
  {
    "mascota": "Mouse",
    "propietario": "Susana Lorenzo",
    "fecha": "2025-03-19",
    "hora": "16:47",
    "sintomas": "Estiró la pata",
    "id": 5
  },
  {
    "mascota": "Piolin",
    "propietario": "Mercedes Lorenzo",
    "fecha": "2025-03-22",
    "hora": "16:47",
    "sintomas": "Canta poco",
    "id": 6
  }
]

const $d = document,
  $bodyCitas=$d.querySelector('#body-citas'),
  [$form1, $form2] = $d.querySelectorAll("form"),
  $tcita = $d.querySelector("#tcita").content

function renderCitas(citasFiltradas){

  const citas = citasFiltradas.filter(cita=>cita.fecha="2025-01-10")

  $bodyCitas.innerHTML=""
  citas.forEach(cita => {
    const $cita = $tcita.cloneNode(true)
    const $spans = $cita.querySelectorAll("span")

    $spans[0].textContent=cita.mascota
    $spans[1].textContent=cita.propietario
    $spans[2].textContent=cita.fecha
    $spans[3].textContent=cita.hora
    $spans[4].textContent=cita.sintomas

    const buttons = $cita.querySelectorAll("button")
    buttons.forEach(button=>{button.dataset.citaId==cita.id})
    $bodyCitas.appendChild($cita)
  })
}

function handleClickBodyCitas() {
  ev.preventDefault()

  if(ev.target.tagName=="BUTTON"){
    let citaId=ev.target.dataset.citaId
    let indice = citas.findIndex(cita=>cita.id==citaId)

    if(ev.target.id=="eliminar"){
      citas.splice(indice,1)
    } else {
      // Modificar
      ["mascota","propietario","fecha","hora","sintomas"].forEach(el=>
        $form1[el].value=citas[indice][el]
      )
      $form1.enviar.textContent="Modificar Cita"
      $form1.enviar.dataset.citaId=citaId
      $bodyCitas.removeEventListener("click", handleClickBodyCitas)

      /* $form1.mascota.value=citas[indice].mascota
      $form1.propietario.value=citas[indice].propietario
      $form1.fecha.value=citas[indice].fecha
      $form1.hora.value=citas[indice].hora
      $form1.sintomas.value=citas[indice].sintomas */
    }

  renderCitas(citas)
  }
}

$form1.addEventListener("submit",ev=>{
  ev.preventDefault()
  
  let citaId=$form1.enviar.dataset.citaId
  let citaIndex
  if (citaId) {
    // Modificar Cita
    citaIndex=citas.findIndex(cita=>cita.id==citaId)

  } else {
    // Añadir Cita
      let cita = {}
      if (citas.length) {
        citaIndex=Math.max(...citas.map(cita=>cita.id))+1
      } else {
        cita["id"]=1
      }
      ["mascota","propietario","fecha","hora","sintomas"].forEach(el=>cita[el] = $form1[el].value)
  }
  
  $form1.enviar.textContent="Añadir Cita"
  if ($form1.enviar.dataset.citaId) {
    delete $form1.enviar.dataset.citaId
  }
  $bodyCitas.removeEventListener("click", handleClickBodyCitas)
  $form1.reset()
})

$bodyCitas.addEventListener("click", handleClickBodyCitas)

$d.addEventListener("DOMContentLoaded",ev=>{
  const citasFiltradas=citas.filter(cita=>cita.fecha="2025-01-10")
  renderCitas(citas)
})