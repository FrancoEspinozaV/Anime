import { useState } from 'react'
import { Buscar } from '../../component/Buscar'
import { supabase } from '../../Supabase/supabase.config'
import '../styles/Admin.css'
import { PreIMG } from '../../component/PreIMG'

export function Admin() {
  const generos = [
    'Terror',
    'Ciencia Ficción',
    'Romance',
    'Drama',
    'Comedia',
    'Vampiros',
  ]
  const tituloGenero = 'Generos'
  const tipo = ['Serie', 'Ova', 'Pelicula']
  const tituloTipo = 'Tipo'
  const [selectedName, setSelectedName] = useState('')
  const [selectedTipo, setSelectedTipo] = useState('')
  const [selectedDescription, setSelectedDescription] = useState('')
  const [selectedGenero, setSelectedGenero] = useState('')
  const [selectedCap, setSelectedCap] = useState('')
  const [selectedTemp, setSelectedTemp] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [fullLoad, setFullLoad] = useState(false)
  const [dataLoad, setDataLoad] = useState({})

  const handleTipoChange = (tipo) => {
    setSelectedTipo(tipo)
  }

  const handleGeneroChange = (genero) => {
    setSelectedGenero(genero)
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setSelectedFile(file)
  }

  const handleNameChange = (name) => {
    setSelectedName(name)
  }

  const handleCapChange = (cap) => {
    setSelectedCap(cap)
  }

  const handleTempChange = (temp) => {
    setSelectedTemp(temp)
  }

  const handleDescriptionChange = (description) => {
    setSelectedDescription(description)
  }
  const handleFileSubmit = async (event) => {
    event.preventDefault()
    if (selectedFile) {
      const URL =
        'https://tamhzrgwhidditleuukd.supabase.co/storage/v1/object/public/IMG'

      const { data, error } = await supabase.storage
        .from('IMG')
        .upload(`public/${selectedFile.name}`, selectedFile, {
          upsert: false,
        })

      if (error) {
        console.log(error)
        if (error.error === 'Duplicate') {
          const { data: dataStorage } = supabase.storage
            .from('IMG')
            .getPublicUrl(`public/${selectedFile.name}`)
          const DataURL = {
            // aplicar un refactor
            Nombre: selectedName,
            Tipo: selectedTipo[0], // por ahora esta [0] quitar
            Generos: selectedGenero.join(','),
            URL: dataStorage.publicUrl,
            Temporada: selectedTemp,
            Capitulo: selectedCap,
          }
          setDataLoad(DataURL)
          const { error: errorInsert } = await supabase
            .from('InfoIMG')
            .insert(DataURL)

          if (errorInsert) console.log(errorInsert)
          setFullLoad(true)
        }
      } else {
        const DataURL = {
          Nombre: selectedName,
          Tipo: selectedTipo[0], // por ahora esta [0] quitar
          Generos: selectedGenero.join(','),
          URL: `${URL}/${data.path}`,
          Temporada: selectedTemp,
          Capitulo: selectedCap,
          Descripcion: selectedDescription,
        }
        setDataLoad(DataURL)

        const { error: errorInsert } = await supabase
          .from('InfoIMG')
          .insert(DataURL)
        if (errorInsert) console.log(errorInsert)
        setFullLoad(true)
      }
    } else {
      console.log('Ningún archivo seleccionado')
    }
  }
  return (
    <>
      <form id='AnimeForm'>
        <label htmlFor='nombre'>Nombre</label>
        <input
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder='Nombre'
          type='text'
        />
        <label htmlFor='Cap'>Numero de Capitulo</label>
        <input
          onChange={(e) => handleCapChange(e.target.value)}
          placeholder='Numero de Capitulo'
          type='number'
        />
        <label htmlFor='Temp'>Numero de Temporada</label>
        <input
          onChange={(e) => handleTempChange(e.target.value)}
          placeholder='Numero de Temporada'
          type='number'
        />
        <label htmlFor='Temp'>Descripción del anime</label>
        <input
          onChange={(e) => handleDescriptionChange(e.target.value)}
          placeholder='Descripción del anime'
          type='text'
        />
        <Buscar // cambiar este a solo 1 selección
          arrayOptions={tipo}
          title={tituloTipo}
          onSelectionChange={handleTipoChange}
        />
        <Buscar
          arrayOptions={generos}
          title={tituloGenero}
          onSelectionChange={handleGeneroChange}
        />
        <input type='file' onChange={handleFileChange} />
        <button onClick={handleFileSubmit}>Enviar</button>
      </form>
      {fullLoad ? <PreIMG data={dataLoad} /> : undefined}
    </>
  )
}
