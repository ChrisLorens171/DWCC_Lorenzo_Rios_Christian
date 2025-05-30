import React from 'react'

function Header({theme,handleTheme,texts,handleLanguage,auth,handleAuth}) {
  return (
    <header className={theme}>
        <h2>{texts.headerTitle}</h2>
        <h3>{texts.headerSubtitle}</h3>
        <select name="language" id="language" onChange={handleLanguage}>
            <option value="es">ES</option>
            <option value="gal">GAL</option>
        </select>

        <input type="radio" name="theme" id="theme" onClick={handleTheme} value="light"/>
        <label htmlFor="light">{texts.headerLight}</label>

        <input type="radio" name="theme" id="theme" onClick={handleTheme} value="dark"/>
        <label htmlFor="dark">{texts.headerDark}</label>

        <button onClick={handleAuth}>
            {auth?texts.buttonLogout:texts.buttonLogin}
        </button>
    </header>
  )
}

export default Header
