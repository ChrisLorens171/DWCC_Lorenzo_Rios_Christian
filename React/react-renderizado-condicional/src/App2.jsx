import { useRef } from 'react'
import './App.css'

function App2() {
  const menuRef=useRef(null)
  const menuBtnRef=useRef(null)

  const handleClick=(ev)=>{
    if(menuBtnRef.current.textContent=="Menú"){
      menuBtnRef.current.textContent="Cerrar"
      menuRef.current.style.display="block"
    } else {
      menuBtnRef.current.textContent="Menú"
      menuRef.current.style.display="none"
    }
  }

  return (
    <>
      <button id="menu-btn" ref={menuBtnRef} onClick={handleClick}>Menú</button>
      <nav ref={menuRef} id="menu" style={{display:'none'}}>
        <a href="#">Seccion 1</a><br />
        <a href="#">Seccion 2</a><br />
        <a href="#">Seccion 3</a><br />
        <a href="#">Seccion 4</a><br />
        <a href="#">Seccion 5</a><br />
      </nav>
    </>
  )
}

export default App2
