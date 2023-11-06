import { Route, Routes } from 'react-router-dom'
import { Login } from '../src/Page/Login'
import { Home } from '../src/Page/Home'
import { SearchPage } from '../src/Page/SearchPage'
import { Anime } from '../src/Page/Anime'
import { NotFound } from '../src/Page/NotFound'
export function Rutas() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/search-page' element={<SearchPage />} />
      <Route path='/anime/:name' element={<Anime />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
