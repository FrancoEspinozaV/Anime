import { Link } from 'react-router-dom'

export function Nav() {
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
            <Link to='/login'>Iniciar</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
