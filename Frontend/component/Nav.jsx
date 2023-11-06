import { Link } from 'react-router-dom'
import { supabase } from '../Supabase/supabase.config'
import { useEffect, useState } from 'react'

export function Nav() {
  const [link, setLink] = useState(false)

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) setLink(true)
      else setLink(false)
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
        <ul>
          <li className='bordes'>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/search-page'>Catalogo</Link>
          </li>
          <li className='bordes'>
            {link ? (
              <Link to='/login'>Ingresar</Link>
            ) : (
              <Link
                to='/login'
                onClick={() => {
                  supabase.auth.signOut()
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
