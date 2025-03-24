
// Devuelve la fecha de hoy en formato YYYY-MM-DD
const getDate=()=>new Date().toISOString().split("T")[0] 

// Calcula los años transcurridos entre dos fechas en formato YYYY-MM-DD
// Si no se pasa date2, calcula los años transcurridos entre date 1 y hoy
const calcYears=(date1,date2=null)=>{
  let firstDate = new Date(date1);
  let d1 = firstDate.getDate();
  let m1 = firstDate.getMonth() + 1;
  let y1 = firstDate.getFullYear();

  let secondDate=date2?new Date(date2):new Date()
 
  let d2 = secondDate.getDate();
  let m2 = secondDate.getMonth() + 1;
  let y2 = secondDate.getFullYear();

  let y3;

  y3 = y2 - y1;
  if(m2 >= m1){
      if (d2<d1&&m2==m1)
        y3--
  } else {
      y3--;
  }

  return y3  
}

// Añade years años (years puede ser negativo) a la fecha date (que está en formato YYYY-MM-DD)
// Si no se pasa date, suma (o resta) los años al día de hoy
const addYears=(years,date=null)=>{
  let fecha=date?new Date(date):new Date()

  let newYear=fecha.getFullYear()+years
  return `${newYear}-${(fecha.getMonth()+1).toString().padStart(2,'0')}-${fecha.getDate().toString().padStart(2,'0')}`
}

// Comprueba el nombre del empleado
function checkName(value){
  const regExpresion=/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]{1,20}$/gi
  return !regExpresion.test(value)
}

// Debe comprobar si hay avatar en el formato adecuado
function checkAvatar(value){
  // El nombre del fichero puede ser "" o
  // contener letras y digitos numericos con extension jpg o png
  //

}

const $d = document,
      $listado = $d.querySelector(".listado"),
      $formulario = $d.querySelector(".formulario"),
      $formularioEmpleado=$formulario.querySelector("#formularioEmpleado"),
      $botonAddUsuario = $d.querySelector(".btn-success"),
      $botonCancel = $d.querySelector(".btn-reset"),
      $botonAdd = $d.querySelector(".btn-add"),
      $table = $d.querySelector("tbody"),
      $cantidadEmpleados = $d.querySelector(".listado").querySelector("h2"),
      $inputSearch = $d.querySelector("#searchName")

const empleados = [],
      positions = [],
      urlEmpleados = "http://localhost:3000/employees",
      urlPositions = "http://localhost:3000/positions"

function ajax(options){
  const {url,method,fExito,fError,data}=options

  fetch(url,{
      method:method || "GET",
      headers: {
          "Content-type":"application/json; charset=utf-8"
      },
      body:JSON.stringify(data)    
  })
  .then(resp=>resp.ok?resp.json():Promise.reject(resp))
  .then(json=>fExito(json))
  .catch(error=>fError({
      status:error.status,
      statusText:error.statusText||"Algo salió mal !"
  }))
}

function verListadoEmpleados(visible) {
  if (visible) {
    $formulario.classList.add("hidden")
    $listado.classList.remove("hidden")
  } else {
    $formulario.classList.remove("hidden")
    $listado.classList.add("hidden")
  }
}

function getData() {
  ajax({
    url: urlEmpleados,
    method: "GET",
    fExito:(json)=>{
      ajax({
        url: urlPositions,
        method: "GET",
        fExito:(json)=>{
          positions.splice(0,positions.length,...json)
          renderEmpleados(empleados)
          renderPuestos()
        },
        fError:(error)=>console.log(error)
      })
      empleados.splice(0,empleados.length,...json)
    },
    fError:(error)=>console.log(error)
  })
}

function delEmpleado(empleadoId) {
  ajax({
    url: `${urlEmpleados}/${empleadoId}`,
    method: "DELETE",
    fExito:(json)=>{
      const empleadoIndex = empleados.findIndex(el=>el.id == empleadoId)
      empleados.splice(empleadoIndex,1)
      renderEmpleados(empleados)
    },
    fError:(error)=>console.log(error)
  })
}

function updateEmpleados(empleadoId) {
  let data={}
  const fields=["name","nif","bornDate","contractDate","positionId","avatar"]
  fields.forEach(field=>data[field]=$formularioEmpleado[field].value)
  console.log(data)
  /* ajax({
    url: `${urlEmpleados}/${empleadoId}`,
    method: "PATCH",
    fExito:(json)=>{
      console.log(json)
      delete $botonAdd.dataset.id
      let index=empleados.findIndex(empleado=>empleado.id==json.id)
      empleados.splice(index,1,json)
      renderEmpleados(empleados) 
    },
    fError:(error)=>console.log(error),
    data
  }) */
}

function addEmpleados() {
  ajax({
    url: urlEmpleados,
    method: "POST",
    fExito:(json)=>{
      getData()
    },
    fError:(error)=>console.log(error),
    data:{
      name: $formularioEmpleado["name"].value,
      nif: $formularioEmpleado["nif"].value,
      bornDate: $formularioEmpleado["bornDate"].value,
      avatar: $formularioEmpleado["avatar"].value,
      contractDate: $formularioEmpleado["contractDate"].value,
      positionId: $formularioEmpleado["positionId"].value,
    }
  })
}

function inputsEmpleado(empleado) {
  verListadoEmpleados(false)

  const fields=["name","nif","bornDate","contractDate","positionId","avatar"]
  fields.forEach(field=>$formularioEmpleado[field].value=empleado[field])
  $formularioEmpleado.salary.value=positions.find(position=>position.id==empleado.positionId).salary

  $botonAdd.dataset.id = empleado.id
}

function calcularTrienio(contratado,salario) {
  trienios = contratado / 3
  calculoTri = (trienios * 3) / 100
  salarioSuma = salario * calculoTri

  salarioFinal = salario + salarioSuma
  return salarioFinal
}

function renderCantidadEmpleados(empleados) {
  $cantidadEmpleados.innerHTML = `Lista de empleados(${empleados.length})`
}

function renderEmpleados(empleados) {
  verListadoEmpleados(true)
  $table.innerHTML = empleados.reduce((anterior,actual,i)=>anterior+
  `
    <tr>
      <th scope="row">${i+1}</th>
      <td>${actual.name}</td>
      <td>${calcYears(actual.bornDate)}</td>
      <td>${actual.nif}</td>
      <td>${positions.find(el=>el.id == actual.positionId).name}</td>
      <td class="avatar">
        <figure>
          <img class="avatar-img" src="./assets/imgs/fotos_empleados/${actual.avatar}" alt="">
        </figure>
      </td>
      <td>${calcularTrienio(calcYears(actual.contractDate),positions.find(el=>el.id == actual.positionId).salary)}&euro;</td>
      <td class="acciones">
        <a title="Editar datos del empleado" href="#"  ">
          <img src="./assets/imgs/icons/pencil.svg" alt="" class="btn btn-warning" data-id="${actual.id}"> </a>
        <a title="Eliminar datos del empleado" href="#"  >
          <img src="./assets/imgs/icons/trash-can.svg" alt="" class="btn btn-danger" data-id="${actual.id}">
        </a>
      </td>
    </tr>
    `,'')

    renderCantidadEmpleados(empleados)
}

function renderPuestos() {
  $formularioEmpleado["positionId"].innerHTML = `
    <option selected value="">Seleccione</option>
    `+positions.map(el=>`
     <option value="${el.id}">${el.name}</option>
    `).join('')
}

function filtrarEmpleados() {
  const empleadosFiltrados = empleados.filter(el=>el.name.toLowerCase().includes($inputSearch.value.toLowerCase()))
  renderEmpleados(empleadosFiltrados)
}

$table.addEventListener("click",ev=>{
  ev.preventDefault()
  if (ev.target.dataset.id) {
    let id=ev.target.dataset.id
    if(ev.target.classList.contains("btn-danger")) {
      // Borrar empleados
      delEmpleado(id)
    } else if(ev.target.classList.contains("btn-warning")) {
      // Editar empleados
      $botonAdd.textContent = "Actualizar"
      const empleado=empleados.find(el=>el.id==id)
      inputsEmpleado(empleado)
    }
  }
})

$formularioEmpleado["positionId"].addEventListener("change",ev=>{
  ev.preventDefault()

  $formularioEmpleado["salary"].value = $formularioEmpleado["positionId"].value==""
  ?"800" 
  :positions.find(el=>el.id == $formularioEmpleado["positionId"].value).salary
})

$botonAddUsuario.addEventListener("click",ev=>{
  $formularioEmpleado["salary"].disabled=true
  verListadoEmpleados(false)
})

$botonAdd.addEventListener("click",ev=>{
  ev.preventDefault()

  let id=ev.target.dataset.id
  if(id) {
    let empleado = empleados.find(el=>el.id==id)
    updateEmpleados(empleado.id)
  } else {
    addEmpleados()
  }
})

$botonCancel.addEventListener("click",ev=>{
  verListadoEmpleados(true)
  delete $botonAdd.dataset.id
})

$d.addEventListener("DOMContentLoaded",ev=>{
  ev.preventDefault()
  getData()

  $inputSearch.addEventListener("input",ev=>{
    filtrarEmpleados()
  })
})

