const usuarios=[
      {
        "nombre": "Juan",
        "apellidos": "Sanchez Rey",
        "nif": "11111111-A",
        "email": "juan@gmail.com"
      },
      {
        "nombre": "Ana",
        "apellidos": "Pérez Martínez",
        "nif": "22222222-B",
        "email": "ana@hotmail.com"
      },
      {
        "nombre": "Rosa",
        "apellidos": "Martínez Rodríguez",
        "nif": "33333333-C",
        "email": "rosa.martinez@microsoft.com"
      },
      {
        "nombre": "Jose",
        "apellidos": "Táboas Lérez",
        "nif": "44444444-D",
        "email": "jose@marca.es"
      },
      {
        "nombre": "Eva",
        "apellidos": "Vega Leirós",
        "nif": "55555555-E",
        "email": "evavl@gmail.com"
      }
]

const $d=document,
      $form=$d.querySelector("form"),
      $addUsuario=$form.querySelector("button"),
      $searchField=$d.querySelector("#searchField"),
      $search=$d.querySelector("#search"),
      $tbody=$d.querySelector("tbody"),
      $tfoot=$d.querySelector("tfoot"),
      $thead=$d.querySelector("thead")

let orden="apellidos"

const capitalize=(cadena)=>cadena.toLowerCase().split(' ').map(el=>el.trim()).filter(el=>el!="").map(el=>el[0].toUpperCase()+el.slice(1)).join(' ')
const ascSort=(vect,campo)=> vect.sort((u1,u2)=>u1[campo].localeCompare(u2[campo]))
const descSort=(vect,campo)=> ascSort(vect,campo).reverse()


$thead.addEventListener("click",ev=>{
  if(ev.target.tagName="th") {
    if(ev.target.textContent!="Acciones" && !ev.target.querySelector("span")) {
      let campo=$thead.querySelector(".cabecera--ordenado")
      campo.classList.remove("cabecera-ordenado")
      campo.textContent=campo.querySelector("span").textContent
      orden=ev.target.textContent.toLowerCase().trim()
      ev.target.innerHTML=`
        <span>${ev.target.textContent}</span>
        <span class="ordenar">
            <img src="./img/dsc.svg" id="order" class="ordenar__icon" alt="">
        </span>`
      ev.target.classList.add("cabecera--ordenado")
    }
  }
  if(ev.target.id=="order") {
    if(ev.target.src.includes("dsc.svg")) {
      ev.target.src="./img/asc.svg"
      ascSort(getFilteredUsers(usuarios),orden)
    } else {
      ev.target.src="./img/dsc.svg"
      descSort(getFilteredUsers(usuarios),orden)
    }
  }
  renderUsuarios(getFilteredUsers(usuarios))
})

$search.addEventListener("keyup",ev=>{
  const filteredUsers = usuarios
                    .filter(usuario=>usuario[$searchField.value]
                            .toLowerCase()
                            .includes($search.value).toLowerCase())
  renderUsuarios(getFilteredUsers(usuarios))
})

function getFilteredUsers(users) {
  if($search.value=="") {
    return usuarios
  } else {
    return users
            .filter(usuario=>usuario[$searchField.value]
            .toLowerCase()
            .includes($search.value.toLowerCase()))
  }
}

function checkForm(update) {
  let campos=["nombre","apellidos","nif","email"]
  let condicion1 = campos.every(campo=>$form[campo].value!="")
  
  const expReg=/^[0-9]{8}-[A-Z]{1}$/
  let condicion2=expReg.test($form["nif"].value)

  let index=usuarios.findIndex(usuario=>usuario.nif==$form["nif"].value)
  let condicion3=true

  if(update) {
    condicion3=(index==-1)
  }

  return condicion1 && condicion2 && condicion3
}

$addUsuario.addEventListener("click",ev=>{
  ev.preventDefault()

  let id = ev.target.dataset.id
  if(id) {
    // Actualizar
    if(checkForm(true)) {
      const usuario = usuarios.find(usuario=>usuario.nif==id)
      let campos=["nombre","apellidos","nif","email"]
      campos.forEach(campo=>usuario[campo]=$form[campo].value)
      campos.forEach(campo=>$form[campo].value="")
      $form["nif"].disabled=true
      $addUsuario.textContent="Actualizar Usuario"
      $addUsuario.dataset.id=usuario.nif
      $tbody.querySelector("i").forEach(i=>i.classList.add("off"))
      $tbody.removeEventListener("click",handleClick)
      renderUsuarios(getFilteredUsers(usuarios))
    } else {
      alert("Error en los campos. Falta alguno por cubrir o formato incorrecto.")
    }
  } else {
    // Añadir
    if(checkForm(false)) {
      const usuario={
        nombre: $form.nombre.value,
        apellidos: $form.apellidos.value,
        nif: $form.nif.value,
        email: $form.email.value
      }
      $form.reset()
      usuarios.push(usuario)
      renderUsuarios(getFilteredUsers(usuarios))
    } else {
      alert("Error en los campos. Falta alguno por cubrir o formato incorrecto.")
    }
  }
})

function fillForm(usuario) {
  let campos=["nombre","apellidos","nif","email"]
  campos.forEach(campo=>$form[campo].value=usuario[campo])
  $form["nif"].disabled=true
}

function updateUser(userId) {
  let usuario=usuarios.find(user=>user.nif==userId)
  fillForm(usuario)
  $addUsuario.textContent="Actualizar Usuario"
  $addUsuario.dataset.id=usuario.nif
  $tbody.querySelector("i").forEach(i=>i.classList.add("off"))
  $tbody.removeEventListener("click",handleClick)

}

function deleteUser(userId) {
  let index=usuarios.findIndex(user=>user.nif==userId)
  usuarios.splice(index,1)
  renderUsuarios(getFilteredUsers(usuarios))
}

function handleClick(ev) {
  let userId = ev.target.dataset.id
  if(userId) {
    if(ev.target.classList.contains("fa-trash")) {
      //DELETE
      //console.log(`DELETE user ${ev.target.dataset.id}`)
      deleteUser(userId)
    } else {
      //UPDATE
      console.log(`UPDATE user ${ev.target.dataset.id}`)
      updateUser(userId)
    }
  }
}

$tbody.addEventListener("click",handleClick)

function renderUsuarios(usuarios) {
  $tbody.innerHTML=usuarios.map(el=>`    
    <tr>
      <td scope="col">
        <i class="fas fa-undo-alt" data-id="${el.nif}"></i>
        <i class="fa fa-trash" aria-hidden="true" data-id="${el.nif}"></i>
      </td>
      <td scope="col" width="10%">${el.nombre}</td>
      <td scope="col">${el.apellidos}</td>
      <td scope="col">${el.nif}</td>
      <td scope="col">${el.email}</td>
    </tr>
  `).join('')

  if(usuarios.length) {
    $tfoot.innerHTML=`
      <tr>
        <td colspan="4">Total de Registros: </td>
        <td>${usuarios.length}</td>
      </tr>`
  } else {
    $tfoot.innerHTML = `<tr><td colspan="5">No hay personal"</td></tr>`
  }
}

$d.addEventListener("DOMContentLoaded",ev=>{
  renderUsuarios(ascSort(usuarios,orden))
})
