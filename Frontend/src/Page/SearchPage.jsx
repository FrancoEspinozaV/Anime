import { Link } from 'react-router-dom'
import { animes } from '../constantes'
export function SearchPage() {
  return (
    <div>
      <h2>Search Page</h2>
      <ul>
        {animes.map((anime) => (
          <li key={anime}>
            <Link to={`/anime/${anime}`}>{anime}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
