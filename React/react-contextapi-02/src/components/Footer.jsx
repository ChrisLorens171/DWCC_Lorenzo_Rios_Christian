import React, { useContext } from 'react'
import ThemeContext from '../contexts/ThemeContext'
import LanguageContext from '../contexts/LanguageContext'

function Footer({}) {
  const {theme}=useContext(ThemeContext)
  const {texts}=useContext(LanguageContext)

  return (
    <footer className={theme}>
        <h4>{texts.footerTitle}</h4>
    </footer>
  )
}

export default Footer
