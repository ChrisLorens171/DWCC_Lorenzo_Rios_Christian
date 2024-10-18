const libros=["Eloquent JavaScript","Scope & Closures","Understanding ECMAScript 6","Beginning Node.js","Web development with Node & Express"]
const $d=document,
    $ul=$d.querySelector("ul")
    $input=$d.querySelector("input[type='text']")

/* Ejemplo Corto */
$ul.innerHTML=libros.map(libro=>`
    <li>
        <span class="titulo">${libro}</span>
        <span class="borrar">-</span>
    </li>`).join('')
console.log($input)

/* Ejemplo Mediano */
    
    /* let innerUl = "" 
    innerUl += `<li>
        <span class="titulo">${libro[i]}</span>
        <span class="borrar">-</span>
    <li>`
    
    $ul.innerHTML=innerUl */

/* Ejemplo largo */

/* for(let i = 0; i < libros.length; i++) {
    let $li = $d.createElement("li")

    let $span1=$d.createElement("span")
    $span1.classList.add("titulo")
    $span1.textContent=libros[i]

    let $span2=$d.createElement("span")
    $span2.classList.add("titulo")
    $span2.textContent=libros[i]

    $li.append($span1, $span2)

    $ul.appendChild($li)
} */


