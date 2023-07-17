import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ allowedRoles, children }) => {
  const localStorageData = JSON.parse(localStorage.getItem('userData')) || {}
  const userRole = localStorageData.role || ''
  const roles = []
  return  <div>{children}</div>
  // return allowedRoles.find((role, index) => roles.includes(role)) ? (

  //   <div>{children}</div>
    
  // ) : userRole ? (
  //   <Navigate to="/accessDenied" />
  // ) : (
  //   <Navigate to="/" />
  // );

}
