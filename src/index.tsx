import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FormspreeProvider } from '@formspree/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormspreeProvider>
      <RouterProvider router={router} />
    </FormspreeProvider>
  </React.StrictMode>
); 