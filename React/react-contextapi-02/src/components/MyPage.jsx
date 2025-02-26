import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { ThemeProvider } from '../contexts/ThemeContext'
import { LanguageProvider } from '../contexts/LanguageContext'
import { AuthProvider } from '../contexts/AuthContext'

function MyPage() {

  return (
    <div className='my-page'>
      <AuthProvider>
        <LanguageProvider>
          <ThemeProvider>              
            <Header/>     
            <Main/>
            <Footer/>
          </ThemeProvider>
        </LanguageProvider>
      </AuthProvider>
    </div>
  )
}

export default MyPage
