export default function solicitarDato(pregunta,tipo){
    let dato=null
    do{
        dato=prompt(pregunta)
        if(tipo=="string")
            return dato
        else{
            if(!isNaN(dato)&&( tipo=="number" ||  tipo=="float" ||  (tipo=="integer"&&parseInt(dato)==parseFloat(dato)) ))
                return parseFloat(dato)
        }
        alert(`Error El dato debe de ser tipo ${tipo}`)
    }while (true)
}
