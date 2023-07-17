import React from 'react'
import { Header } from './homepage/Header'
import { Footer } from './homepage/Footer'

export const AppPageLayout = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    </>
  )
}
