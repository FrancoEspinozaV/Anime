import { Link } from 'react-router-dom'

export function SearchPage() {
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
