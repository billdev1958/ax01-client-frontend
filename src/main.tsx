import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.tsx'
import Nosotros from './pages/Nosotros.tsx'
import EmpresasPage from './pages/Services.tsx'
import InvestigacionPage from './pages/InvestigacionPage.tsx'
import BlogPage from './pages/BlogPage.tsx'
import BlogArticle from './pages/BlogArticle.tsx'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Homepage />} />
        <Route path='nosotros' element={<Nosotros />} />
        <Route path='servicios'>
          <Route path='empresas' element={<EmpresasPage />} />
          <Route path='investigacion' element={<InvestigacionPage />} />
        </Route>
        <Route path='blog'>
          <Route path='' element={<BlogPage />} />
          <Route path=':id' element={<BlogArticle />} />

        </Route>
      </Route>
    </Routes>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
