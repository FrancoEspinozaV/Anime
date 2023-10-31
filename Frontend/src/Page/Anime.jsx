import { useParams } from 'react-router-dom'

export function Anime() {
  const { name } = useParams()
  return (
    <div>
      <h2>Anime</h2>
      <p>Anime Seleccionado: {name}</p>
    </div>
  )
}
