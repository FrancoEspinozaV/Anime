import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../src/Page/Login'
import { Home } from '../src/Page/Home'
import { SearchPage } from '../src/Page/SearchPage'
import { Anime } from '../src/Page/Anime'
import { NotFound } from '../src/Page/NotFound'
import { Admin } from '../src/Page/Admin'
import { useEffect } from 'react'
import { useContextPage } from '../src/context/Context'

export function Rutas() {
  const { getUser } = useContextPage()
  useEffect(() => {
    getUser()
  }, [])

  // agregar un modal para verificar acciones y no
  // mostrar nada al usuario
  const ProtectedRoute = ({ children }) => {
    const isLogin = localStorage.getItem('isLoggedIn')
    if (!isLogin) return <Navigate to='/' />
    const userRol = localStorage.getItem('useRol')
    if (userRol !== '1') {
      return <Navigate to='/' />
    }
    return children
  }

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search-page' element={<SearchPage />} />
      <Route path='/anime/:name' element={<Anime />} />
      <Route path='/login' element={<Login />} />
      <Route
        path='/admin'
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
