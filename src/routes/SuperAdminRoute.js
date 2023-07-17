import React from 'react'
import { Navigate } from 'react-router-dom'

export const SuperAdminRoute = ({children}) => {
    const localStorageData = JSON.parse(localStorage.getItem('userData')) || {}
    const userRole = localStorageData.role
    
    if(userRole==='user' || userRole==='admin'){
        return <Navigate to='/accessDenied'/>
    }
  return (
    {children}
  )
}
