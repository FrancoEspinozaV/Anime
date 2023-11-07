import { useRef, useState } from 'react'
import '../styles/Admin.css'

export function Admin() {
  const generosDisponibles = [
    'Terror',
    'Ciencia Ficción',
    'Romance',
    'Drama',
    'Comedia',
  ]
  const [generoBuscado, setGeneroBuscado] = useState('')
  const [generosSeleccionados, setGenerosSeleccionados] = useState([])
  const inputRef = useRef()

  const handleInputChange = (e) => {
    setGeneroBuscado(e.target.value)
  }

  const agregarGenero = (genero) => {
    if (!generosSeleccionados.includes(genero)) {
      setGenerosSeleccionados([...generosSeleccionados, genero])
      setGeneroBuscado('')
    }
  }

  const handleClick = () => {
    inputRef.current.focus()
  }

  const quitarGenero = (genero) => {
    const newGeneros = generosSeleccionados.filter((g) => g !== genero)
    setGenerosSeleccionados(newGeneros)
  }
  return (
    <div>
      <label htmlFor='Genero'>Genero</label>
      <div onClick={handleClick} style={{ border: '1px solid red' }}>
        <ul>
          {generosSeleccionados.map((genero) => (
            <li
              style={{ cursor: 'pointer' }}
              onClick={() => quitarGenero(genero)}
              key={genero}
            >
              {genero} ❌
            </li>
          ))}
        </ul>
        <input
          ref={inputRef}
          type='text'
          placeholder='Buscar género'
          value={generoBuscado}
          onChange={handleInputChange}
        />
      </div>

      <ul>
        {generosDisponibles
          .filter((genero) =>
            genero.toLowerCase().includes(generoBuscado.toLowerCase())
          )
          .map((genero) => (
            <li
              style={{ cursor: 'pointer' }}
              key={genero}
              onClick={() => agregarGenero(genero)}
            >
              {genero}
            </li>
          ))}
      </ul>
    </div>
  )
}
