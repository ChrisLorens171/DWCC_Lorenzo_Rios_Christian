import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/Saludo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hola Mundo!</h1>
      <Saludo></Saludo>
    </>
  )
}

export default App
