const $d = document

const $main=$d.querySelector("main")

const $p=$d.createElement("p")
const $node=$d.createTextNode("Parrafo creado desde javascript")
$p.appendChild($node)

$main.appendChild($p)