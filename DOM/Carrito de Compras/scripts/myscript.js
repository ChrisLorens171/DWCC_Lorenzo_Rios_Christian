const $d=document,
    $productos=$d.querySelector("#lista-productos"),
    $bodyCarrito=$d.querySelector('#body-carrito'),
    $footerCarrito=$d.querySelector('#footer-carrito')

const productos=[
    {
        "precio": 500,
        "id": 1,
        "title": "Café",
        "thumbnailUrl": "https://picsum.photos/id/0/600"
    },
    {
        "precio": 300,
        "id": 2,
        "title": "Pizza",
        "thumbnailUrl": "https://picsum.photos/id/10/600"
    },
    {
        "precio": 100,
        "id": 3,
        "title": "Agua",
        "thumbnailUrl": "https://picsum.photos/id/20/600"
    },
    {
        "precio": 50,
        "id": 4,
        "title": "Sandía",
        "thumbnailUrl": "https://picsum.photos/id/30/600"
    },
    {
        "precio": 10,
        "id": 5,
        "title": "Mango",
        "thumbnailUrl": "https://picsum.photos/id/40/600"
    },
    {
        "precio": 150,
        "id": 6,
        "title": "Chela",
        "thumbnailUrl": "https://picsum.photos/id/50/600"
    }
]

const carrito = JSON.parse(sessionStorage.getItem("productos")) || [];


$d.addEventListener("DOMContentLoaded", function() {
    const carrito=JSON.parse(sessionStorage.getItem("carrito"))
    renderProductos1(productos);

    function renderProductos1(productos) {
    
        /* $productos.innerHTML=productos.map(producto=>`
            <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
                <div class="card">
                    <img src="${producto.thumbnailUrl}" class="card-img-top" alt="item-producto">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">${producto.precio} &euro;</p>
                        <a href="#" class="btn btn-dark">Comprar</a>
                    </div>
                </div>
            </div>
        `).join('') */
    
        // Diferencia do anterior, en vez de un join, simplemente usas unha '' vacia e cambias a estructura a reduce
        $productos.innerHTML=productos.reduce((anterior,actual)=>anterior+`
            <div class="col-12 col-sm-4 col-md-3 col-lg-2 mb-3 d-flex justify-content-center">
                <div class="card">
                    <img src="${actual.thumbnailUrl}" class="card-img-top" alt="item-producto">
                    <div class="card-body">
                        <h5 class="card-title">${actual.title}</h5>
                        <p class="card-text">${actual.precio} &euro;</p>
                        <a href="#" class="btn btn-dark" data-producto-id="${actual.id}">Comprar</a>
                    </div>
                </div>
            </div>
        `,'')
    }
    
    /* function renderProductos2(productos) {
        const $tProducto=$d.querySelector('#template-producto').content
        const $fragmento=$d.createDocumentFragment()
    
        productos.forEach(producto => {
            const $clon=$tProducto.cloneNode(true)
            const $img=$clon.querySelector("img")
            //$img.setAttribute(srx,producto.thumbnailUrl)
            $img.src=producto.thumbnailUrl
            const $title=$clon.querySelector(".card-title")
            $title.textContent=producto.title
            const $precio=$clon.querySelector("p")
            $precio.innerHTML=`${producto.precio}&euro;`
            const $btn=$clon.querySelector("a")
            $btn.dataset.productoId=producto.id
            $fragmento.appendChild($clon)
        });
        $productos.appendChild($fragmento)
    } */
    
    function renderFooter(carrito) {
        let cantidadTotal = 0
        let precioTotal = 0
    
        if (carrito.length) {
            carrito.forEach(el => cantidadTotal += parseInt(el.cantidad))
            carrito.forEach(el => precioTotal += parseInt(el.cantidad*productos.find(producto=>producto.id==el.id).precio))
    
            $footerCarrito.innerHTML = `
                <th scope="row" colspan="2">Total productos</th>
                <td>${cantidadTotal}</td>
                <td>
                    <button class="btn btn-danger btn-sm" id="vaciar-carrito">
                        Vaciar Carrito
                    </button>
                </td>
                <td class="font-weight-bold"><span>${precioTotal}</span>&euro;</td>
            `
        } else {
            $footerCarrito.innerHTML = '<th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>'
        }
    }
    
    function renderCarrito(carrito) {
        $bodyCarrito.innerHTML=carrito.map((productoCarrito,i)=>
            `<tr>
            <td>${i+1}</td>
            <td>${productos.find(producto=>producto.id==productoCarrito.id).title}</td>
            <td>${productoCarrito.cantidad}</td>
            <td>
                <button class="btn btn-info btn-sm" data-id="${productoCarrito.id}">
                    +
                </button>
                <button class="btn btn-danger btn-sm" data-id="${productoCarrito.id}">
                    -
                </button>
            </td>
            <td>${productoCarrito.cantidad*productos.find(producto=>producto.id==productoCarrito.id).precio} &euro;</td>
          </tr>
          `).join('')
          sessionStorage.setItem("carrito",JSON.stringify(carrito))
    
        renderFooter(carrito)
    }
    
    $bodyCarrito.addEventListener("click", ev => {
        ev.preventDefault()
    
        if(ev.target.dataset.id) {
            if(ev.target.classList.contains("btn-info")) {
                //console.log(`Sumamos al producto ${ev.target.dataset.id}`)
                carrito.find(el=>el.id==ev.target.dataset.id).cantidad++
            } else {
                //console.log(`Restamos al producto ${ev.target.dataset.id}`)
                let cantidad = carrito.find(el=>el.id==ev.target.dataset.id).cantidad--
                cantidad--
                if (cantidad == 0) {
                    carrito.splice(carrito.findIndex(el=>el.id==ev.target.dataset.id),1)
                }
            }
            sessionStorage.setItem("carrito",JSON.stringify(carrito))  
            renderCarrito(carrito)
        }
    })
    
    $productos.addEventListener("click",ev=>{
        ev.preventDefault()
        if (ev.target.dataset.productoId) {
            //console.log(`Has comprado el producto ${ev.target.dataset.productoId}`)
            const producto = carrito.find(producto=>producto.id==ev.target.dataset.productoId)
            if (producto) {
                producto.cantidad++
            } else {
                const producto={
                    id:ev.target.dataset.productoId,
                    cantidad:1
                }
                carrito.push(producto)  
                sessionStorage.setItem("carrito",JSON.stringify(carrito))  
            }
            console.log(carrito)
            renderCarrito(carrito)
        }
    })

    $d.body.addEventListener("click", ev => {
            if (ev.target && ev.target.id == "vaciar-carrito") {
                carrito.length = 0;
                renderCarrito(carrito);
            }
    });

    renderCarrito(carrito)
});
