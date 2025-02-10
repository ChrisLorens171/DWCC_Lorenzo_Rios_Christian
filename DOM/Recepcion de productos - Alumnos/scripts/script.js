const $d = document,
      $productos = $d.querySelector("#tableBody"),
      $anhadirProducto = $d.querySelector("#btnAdd"),
      $nombre = $d.querySelector("#name").value,
      $precio = $d.querySelector("#price").value,
      $categoria = $d.querySelector("#category").value,
      $estado = $d.querySelector("#condition").value

const productos = [
    {
      "name": "Samsung",
      "price": "200",
      "categoryId": "1",
      "conditionId": "1",
      "id": 1
    },
    {
      "name": "LG",
      "price": "300",
      "categoryId": "2",
      "conditionId": "2",
      "id": 2
    },
    {
      "name": "Motorola",
      "price": "350",
      "categoryId": "3",
      "conditionId": "3",
      "id": 3
    }
  ]

const categories = [
{
    "name": "Teléfono",
    "id": "1"
},
{
    "name": "TV",
    "id": "2"
},
{
    "name": "Portátil",
    "id": "3"
}
]

const conditions = [
{
    "name": "Excelente",
    "id": "1"
},
{
    "name": "Bueno",
    "id": "2"
},
{
    "name": "Malo",
    "id": "3"
}
]

function renderCategorias(categories) {

}

function renderConditions(conditions) {
    
}

function renderProductos(productos) {
    $productos.innerHTML = productos.map(el => {
        let categoria = categories.find(e => e.id == el.categoryId).name
        let condition = conditions.find(e => e.id == el.conditionId).name

        return `<tr>
            <td>${el.id}</td>
            <td>${el.name}</td>
            <td>${el.price}</td>
            <td>${categoria}</td>
            <td class="${condition}">${condition}</td>
            <td>
                <i class="fa fa-edit" data-id="${el.id}"></i>
                <i class="fa fa-trash" data-id="${el.id}"></i>
            </td>
        </tr>`
    }).join('')
}

$d.addEventListener("DOMContentLoaded",ev=>{

    renderProductos(productos)

    $anhadirProducto.addEventListener("click", ev=>{
        //console.log($nombre)
        
    }) 
})

