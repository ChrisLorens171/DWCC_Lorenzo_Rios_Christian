import React from 'react'

function Main({theme,texts,auth}) {
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
