import { Suspense } from 'react';
import React from 'react'
import { AppRoutes } from './routes/AppRoutes';
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Suspense fallback={'Loding...'}>
      <Provider store={store}>
      <AppRoutes />
      </Provider>
      
      
    
  </Suspense>
  );
}

export default App;
