import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { ProductDetail } from '../containers/product/ProductDetail';
import { HomePage } from '../containers/homepage/HomePage';
import { PrivateRoute } from './PrivateRoute';
import { NotFound } from '../containers/NotFound';
import { AppPageLayout } from '../containers/AppPageLayout';
import { PrivateRouteData, PublicRouteData } from './RoutesUtils';


export const AppRoutes = () => {
  return (
    <Router>
      <AppPageLayout>
        <Routes>
          
          <Route path='/accessDenied' element={<NotFound />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/product' element={<ProductDetail />} />
          {PrivateRouteData.map((obj) => (
            <Route key={obj.title} path={obj.path} element={<PrivateRoute allowedRoles={obj.allowedRoles}>{obj.element}</PrivateRoute>} />
          ))}
        </Routes>
      </AppPageLayout>
    </Router>
  )
}


