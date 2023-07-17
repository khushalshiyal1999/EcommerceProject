import React from 'react'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ restricted, children }) => {
  return restricted ?  <Navigate to="/accessDenied" /> : <div>{children}</div>
}
