import { useState } from 'react'
import './App.css'
import Home from './Layouts/Home'
import RootLayout from './Layouts/RootLayout'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
