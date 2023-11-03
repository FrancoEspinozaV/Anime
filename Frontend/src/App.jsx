import { useEffect } from 'react'
import { Nav } from '../component/Nav'
import { Rutas } from '../component/Rutas'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../Supabase/supabase.config'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/login')
      } else {
        navigate('/')
      }
    })
  }, [])
  return (
    <div>
      <Nav />
      <Rutas />
    </div>
  )
}

export default App
