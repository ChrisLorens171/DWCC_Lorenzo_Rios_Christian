import React from 'react'
import { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LanguageContext from '../contexts/LanguageContext'
import AuthContext from '../contexts/AuthContext'

function Main({}) {
  const {theme}=useContext(ThemeContext)
  const {texts}=useContext(LanguageContext)
  const {auth}=useContext(AuthContext)

  return (
    <main className={theme}>
      {
          auth
          ?<p>{texts.mainHello}</p>
          :<p>{texts.mainWellcome}</p>
      }

      <p>{texts.mainContent}</p>
        
    </main>
  )
}

export default Main
