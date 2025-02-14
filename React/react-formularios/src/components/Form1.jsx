import React from 'react'
import { useState } from 'react'

function Form1() {
    const [nombre,setNombre]=useState("")
    const [sexo,setSexo]=useState("hombre")
    
  return (
    <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" 
               id='nombre' 
               name='nombre' 
               value={nombre} 
               onChange={(ev)=>setNombre(ev.target.value)}/>

    <p>Sexo:</p>
    <input type="radio" 
           name="sexo" 
           id="hombre" 
           value="hombre" 
           onChange={ev=>setSexo(ev.target.value)}/>
    <label htmlFor="hombre">Hombre</label>
    
    <input type="radio" 
           name="sexo" 
           id="mujer" 
           value="mujer" 
           onChange={ev=>setSexo(ev.target.value)}/>
    <label htmlFor="mujer">Mujer</label>

    </form>
  )
}

export default Form1
