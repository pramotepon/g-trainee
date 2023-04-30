import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginScreen from './screens/authScreen/LoginScreen';
import RegisterScreen from './screens/authScreen/RegisterScreen';
import DashboardScreen from './screens/authScreen/DashboardScreen';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <LoginScreen />
  },
  {
    path: '/register',
    element: <RegisterScreen />
  },
  {
    path: '/dashboard',
    element: <DashboardScreen />
  },
  {
    path: '/dashboardlayout',
    element: <DashboardLayout />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
