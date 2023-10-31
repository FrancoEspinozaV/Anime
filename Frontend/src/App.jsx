import { Link, Route, Routes, useParams } from 'react-router-dom'
import { Login } from './Page/login'

const Home = () => <h2>Home</h2>
const SearchPage = () => {
  const Animes = [
    'Bleach',
    'Naruto',
    'Swort Art Online',
    'Boku no piko',
    'Goblin Slayer',
    'Dragon Ball',
  ]
  return (
    <div>
      <h2>Search Page</h2>
      <ul>
        {Animes.map((anime) => (
          <li key={anime}>
            <Link to={`/anime/${anime}`}>{anime}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
const Anime = () => {
  const { name } = useParams()
  return (
    <div>
      <h2>Anime</h2>
      <p>Anime Seleccionado: {name}</p>
    </div>
  )
}
function App() {
  const anonKey = import.meta.env.VITE_ANON_KEY
  const url = import.meta.env.VITE_URL
  return (
    <>
      <header>
        <h1>TSF Anime</h1>
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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search-page' element={<SearchPage />} />
        <Route path='/anime/:name' element={<Anime />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
