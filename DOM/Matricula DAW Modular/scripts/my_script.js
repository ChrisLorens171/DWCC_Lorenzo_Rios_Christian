
const $d=document

$d.addEventListener("DOMContentLoaded",ev=>{

  const alumnos= JSON.parse(sessionStorage.getItem("alumnos")) || [
        {
          "nombre": "Juan Morales García",
          "nif": "11111111-A",
          "modulos": [
            1,
            2,
            3
          ],
          "id": 1
        },
        {
          "nombre": "Ana Martínez Alonso",
          "nif": "22222222-A",
          "modulos": [
            4,
            5,
            6
          ],
          "id": 2
        },
        {
          "nombre": "Pepe Martinez",
          "nif": "33333333-A",
          "modulos": [
            7,
            8,
            9
          ],
          "id": 3
        },
        {
          "id": 4,
          "nombre": "Rosa Romero",
          "nif": "44444444-A",
          "modulos": [
            10,
            11,
            12
          ]
        }
  ]
  
  const modulos=[
      {
        "id": 1,
        "modulo": "Bases de datos",
        "siglas": "BBDD"
      },
      {
        "id": 2,
        "modulo": "Contornos de desenvolvemento",
        "siglas": "CD"
      },
      {
        "id": 3,
        "modulo": "Formación e orientacion laboral",
        "siglas": "FOL"
      },
      {
        "id": 4,
        "modulo": "Linguaxes de marcas e sistemas de xestion de informacion",
        "siglas": "LMESXI"
      },
      {
        "id": 5,
        "modulo": "Programacion",
        "siglas": "PROG"
      },
      {
        "id": 6,
        "modulo": "Sistemas informáticos",
        "siglas": "SI"
      },
      {
        "id": 7,
        "modulo": "Desenvolvemento web en contorno cliente",
        "siglas": "DWCC"
      },
      {
        "id": 8,
        "modulo": "Desenvolvemento web en contorno servidor",
        "siglas": "DWCS"
      },
      {
        "id": 9,
        "modulo": "Despregamento de aplicacions web",
        "siglas": "DAW"
      },
      {
        "id": 10,
        "modulo": "Empresa e iniciativa emprendedora",
        "siglas": "EIE"
      },
      {
        "id": 11,
        "modulo": "Formacion en centros de traballo",
        "siglas": "FCT"
      },
      {
        "id": 12,
        "modulo": "Proxecto de desenvolcemento de aplicacións web",
        "siglas": "PROX"
      }
  ]

  const $listado=$d.querySelector("#listado-datos")

  const $form=$d.querySelector("form")
  
  function renderAlumnos2(alumnos) {
  const $tbodyDatos=$d.querySelector("#template-body-datos").content,
    $tItem=$d.querySelector("#template-item").content,
    $frag=$d.createDocumentFragment()
  
  $listado.innerHTML="<h2>Listado de Alumnos</h2>"
  const $bodyDatos=$tbodyDatos.cloneNode(true)
  $tdbody=$bodyDatos.querySelector("#td-body")
  
  alumnos.forEach(alumno => {
  const $item=$tItem.cloneNode(true)
  $item.querySelector("p").textContent=alumno.nombre
  $item.querySelectorAll("i").forEach(i=>i.dataset.id=alumno.id)
  //$tdbody.appendChild($item)
  $frag.appendChild($item)
  })
  $bodyDatos.appendChild($frag)
  $listado.appendChild($bodyDatos)
  }
  
  function renderAlumnos1(alumnos) {
  $listado.innerHTML=`
  <div id="body-datos">
  <div id="tabla-datos">
    <div class="item" id="td-cabecera">
      <p>Nombre</p>
      <p>Accion</p>
    </div>
    <div id="td-body">
      ${
        alumnos.map(alumno=>`
          <div class="item">
            <p>${alumno.nombre}</p>
            <div class="bt-acciones">
              <i class="fas fa-undo-alt" data-id="${alumno.id}"></i>
              <i class="fa fa-trash" aria-hidden="true" data-id="${alumno.id}"></i>
            </div>
          </div>`).join('')
      }
    </div>
  </div>
  </div>`
  }
  
  function handleClickListado(ev) {
  if(ev.target.tagName=="I") {
  //console.log(ev.target)
  if (ev.target.classList.contains("fa-trash")) {
  // Borrar
  // console.log(`Borrar ${ev.target.dataset.id}`)
  let indice=alumnos.findIndex(alumno=>alumno.id==ev.target.dataset.id)
  alumnos.splice(indice,1)
  sessionStorage.setItem("alumnos", JSON.stringify(alumnos))
  renderAlumnos1(alumnos)
  } else {
  // Modificar
  // console.log(`Modificar ${ev.target.dataset.id}`)
  let indice=alumnos.findIndex(alumno=>alumno.id==ev.target.dataset.id)
  $form.nombre.value=alumnos[indice].nombre
  $form.nif.value=alumnos[indice].nif
  $form.nif.disabled=true
  const $modulos=$form.querySelectorAll("input[type='checkbox']")
  alumnos[indice].modulos.forEach(i=>$modulos[i-1].checked=true)
  $form["btn-enviar"].value="Modificar Matricula"
  $form["btn-enviar"].dataset.id=ev.target.dataset.id
  $listado.removeEventListener("click", handleClickListado)
  $listado.querySelectorAll("i").forEach(i=>i.classList.add("off"))
  }
  }
  }
  
  $listado.addEventListener("click", handleClickListado)
  
  function checkForm(checkNif) {
  if ($form.nombre.value=="") {
  alert("Tienes que introducir el nombre")
  return false
  }

  if(checkNif) {
    const expReg=/[0-9]{8}-[A-Z]/i
    if (expReg.test($form.nif.value)) {
    if (alumnos.findIndex(alumno=>alumno.nif==$form.nif.value) != -1) {
    alert("Ya existe un alumno con ese nif!")
    return false
    }
    } else {
    alert("Nif invalido")
    return false
    }
  }
  
  
  if (Array.from($form.modulo).every(modulo=>modulo.checked!=true)) {
  alert("Tienes que matricularte en algo man")
  return false
  }
  
  return true
  }
  
  $form.addEventListener("reset",ev=>{
    $form.reset()
    $form["btn-enviar"].value="Añadir Matrícula"
    $form.nif.disabled=false
    delete $form["btn-enviar"].dataset.id
    $listado.querySelectorAll("i").forEach(i=>i.classList.remove("off"))
    $listado.addEventListener("click",handleClickListado)
  })

  $form.addEventListener("submit",ev=> {
  ev.preventDefault()
  if($form.enviar.value=="Añadir Matricula") {
  //console.log("Añadir")
  if (checkForm()) {
  const modulos=[]
  $form.modulo.forEach((el,i)=>{
    if(el.checked) {
      modulos.push(i+1)
    }
  })
  
  const alumno = {
    "nombre":$form.nombre.value,
    "nif":$form.nif.value,
    "modulos": [...modulos],
    "id":Math.max(...alumnos.map(alumno=>alumno.id))+1
  }
  
  alumnos.push(alumno)
  //console.log(alumnos)
  $form.reset()
  renderAlumnos2(alumnos)
  }
  
  } else {
  //console.log("Modificar")
  if (checkForm(false)) {

  }
  let id = $form.enviar.dataset.id
  const alumno = alumnos.find(alumno=>alumno.id==id)
  alumno.nombre = $form.nombre.value
  const modulos=[]
  $form.modulo.forEach((el,i)=>{
  if(el.checked) {
    modulos.push(i+1)
  }
  })
  alumno.modulos=[...modulos]
  $form["btn-enviar"].value="Añadir Matricula"
  delete $form["btn-enviar"].dataset.id
  $listado.addEventListener("click",handleClickListado)
  $listado.querySelectorAll("i").forEach(i=>i.classList.remove("off"))
  $form.nif.disabled=false
  $form.reset()
  sessionStorage.setItem("alumnos", JSON.stringify(alumnos))
  renderAlumnos2(alumnos)
  }
  
  })
  renderAlumnos2(alumnos)
})