import { useState } from "react"
import { createContext } from "react"

const initialLanguage="es"

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

const LanguageContext=createContext()

const LanguageProvider=({children})=>{
    const [language,setLanguage]=useState(initialLanguage)
    const [texts,setTexts]=useState(translations[language])

    const handleLanguage=(ev)=>{
        setLanguage(language=>{
            language=ev.target.value
            setTexts(translations[language])
            return language
        })  
    }

    const data = {
        texts,handleLanguage
    }

    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export {LanguageProvider}
export default LanguageContext