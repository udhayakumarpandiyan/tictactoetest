import React, { lazy, Suspense } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store';

function App() {

  const Shell = lazy(() => import('./shell/containers/Shell'));
  return (
    <Suspense
      fallback={<div className="loader-container" >
        <div className="loader" />
      </div>}>
      <div className="App">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Shell />
          </PersistGate>
        </Provider>
      </div>
    </Suspense>
  );
}
export default App;
