import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Register from './components/Signup/Register.jsx'
import Layout from './components/Layout/Layout.jsx'
import Signin from './components/Signin/Signin.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='Register' element={<Register/>} />
      <Route path='Signin' element={<Signin/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='h-lvh bg-gray-950'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
