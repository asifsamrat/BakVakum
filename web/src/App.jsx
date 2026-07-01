import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import FullScreenLoader from './components/FullScreenLoader';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorTest from './test/ErrorTest';

function App() {
  return (
    <ErrorBoundary>
      <ErrorTest/>
    </ErrorBoundary>
  );
}

export default App;
