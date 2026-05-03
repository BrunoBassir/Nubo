import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import { CityProvider } from './contexts/CityContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <CityProvider>
        <App />
      </CityProvider>
    </AuthProvider>
  </StrictMode>,
);
