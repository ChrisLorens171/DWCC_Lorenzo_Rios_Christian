import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const initialLanguage="es"
const initialAuth=null

const translations={
    es:{
        headerTitle:"Mi aplicación SIN Context API",
        headerSubtitle:"Mi cabecera",
        headerLight:"Claro",
        headerDark:"Oscuro",
        buttonLogout:"Cerrar sesión",
        buttonLogin:"Iniciar sesión",
        mainContent:"Mi contenido principal",
        mainHello:"Hola usuario",
        mainWellcome:"Bienvenido",
        footerTitle:"Mi pie de pagina"
    },
    gal:{
        headerTitle:"A miña aplicación SEN Context API",
        headerSubtitle:"A miña cabeceira",
        headerLight:"Clariño",
        headerDark:"Escuro",
        buttonLogout:"Pechar sesión",
        buttonLogin:"Abrir sesión",
        mainContent:"Meu contido principal",
        mainHello:"Hola usuario",
        mainWellcome:"Benvido",
        footerTitle:"Meu pe de paxina"
    }
}

function MyPage() {
  const [language,setLanguage]=useState(initialLanguage)
  const [auth,setAuth]=useState(initialAuth)
  const [texts,setTexts]=useState(translations[language])
  
  const handleLanguage=(ev)=>{
    setLanguage(language=>{
        language=ev.target.value
        setTexts(translations[language])
        return language
    })  
  }
  const handleAuth=()=>{
    auth?setAuth(null):setAuth(true)
  }

  return (
    <div className='my-page'>
      <ThemeProvider>
        <Header theme={theme} 
                auth={auth} 
                texts={texts}
                handleLanguage={handleLanguage} 
                handleTheme={handleTheme} 
                handleAuth={handleAuth}/>
                
        <Main theme={theme} 
              auth={auth}
              texts={texts}/>

        <Footer theme={theme}
                texts={texts}/>
      </ThemeProvider>
    </div>
  )
}

export default MyPage
