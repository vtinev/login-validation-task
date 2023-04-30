import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './Login.tsx';
import './styles/app.styles.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
)
