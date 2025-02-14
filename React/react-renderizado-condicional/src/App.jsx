import { useRef, useState } from 'react'
import './App.css'
import Boton from './components/Boton'

function App() {
  const [login,setLogin]=useState("Login")
  const $boton=useRef(null)

  function handleClick(){
    setLogin((login)=>{
        login=="Login"
          ?login="Logout"
          :login="Login"
      return login
    })
  } 

  return (
    <div className='card'>
      <Boton ref={$boton} handleClick={handleClick}>{login}</Boton>
    </div>
  )
}

export default App
