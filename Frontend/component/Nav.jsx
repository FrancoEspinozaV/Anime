import { Link } from 'react-router-dom'
import { supabase } from '../Supabase/supabase.config'
import { useEffect, useState } from 'react'

const ModoAdmin = () => {
  return (
    <li>
      <Link to='/admin'>Modo Admin 😎</Link>
    </li>
  )
}

export function Nav() {
  const [link, setLink] = useState(false)
  const [sesion, setSesion] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) setLink(true)
      else setLink(false)
    })
  }, [])

  useEffect(() => {
    const permisosTable = async () => {
      try {
        supabase.auth.onAuthStateChange((event, session) => {
          if (session) {
            setSesion(true)
          } else {
            setSesion(false)
          }
        })
        if (sesion) {
          const {
            data: { user },
          } = await supabase.auth.getUser()
          if (user !== null) {
            const { data, error } = await supabase
              .from('Permisos')
              .select()
              .eq('UUID', user.id)

            if (data[0].Rol === 1) {
              setIsAdmin(true)
            } else {
              setIsAdmin(false)
            }
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
    permisosTable()
  }, [sesion])

  return (
    <header>
      <h1>
        <Link to='/'>TSF Anime</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/search-page'>Catalogo</Link>
          </li>
          {isAdmin ? <ModoAdmin /> : undefined}
          <li>
            {link ? (
              <Link to='/login'>Ingresar</Link>
            ) : (
              <Link
                to='/login'
                onClick={() => {
                  supabase.auth.signOut()
                  setIsAdmin(false)
                  localStorage.setItem('isLoggedIn', false)
                  localStorage.setItem('useRol', null)
                }}
              >
                Salir
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
