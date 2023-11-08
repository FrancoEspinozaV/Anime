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
  const [isAdmin, setIsAdmin] = useState(false)

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        setLink(true)
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
      } else {
        setLink(false)
      }
    })
  }, [])

  return (
    <header className='Header'>
      <h1>
        <Link to='/'>
          TSF Anime
          <img src='../src/img/LogoTSF.png' alt='x' className='imagen' />
        </Link>
      </h1>
      <nav>
        <ul className='ListNav'>
          <li className='colBor'>
            <Link to='/'>Home</Link>
          </li>
          <li className='colBor'>
            <Link to='/search-page'>Catalogo</Link>
          </li>

          {isAdmin ? <ModoAdmin /> : undefined}
          <li className='colBor'>
            {!link ? (
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
