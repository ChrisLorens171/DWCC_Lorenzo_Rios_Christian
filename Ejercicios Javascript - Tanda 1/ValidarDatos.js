export default function solicitarDato (dato ,tipo) {

    do {
        dato = prompt(mensaje)

        if(isNaN(dato) && tipo == "string") {

            return dato

        } else {

            if(!isNaN(dato) && (tipo == "number") || tipo == "float" || tipo == "integer" && parseInt(dato) == parseFloat(dato))

            return parseFloat(dato)

        }
        
        alert(`Error! El dato debe ser de tipo ${dato}`)

    } while (true)
}