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
          <li>
            {link ? (
              <Link to='/login'>Ingresar</Link>
            ) : (
              <button
                className='simpleButton'
                onClick={() => {
                  supabase.auth.signOut()
                }}
              >
                Salir
              </button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}
