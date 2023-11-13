import { useRef, useState } from 'react'

export function Buscar({ arrayOptions, title, onSelectionChange }) {
  const [search, setSearch] = useState('')
  const [selectedSearch, setSelectedSearch] = useState([])
  const [inputActive, setInputActive] = useState(false)

  const inputRef = useRef()

  const handleInputChange = (e) => {
    setSearch(e.target.value)
  }

  const addSelected = (genero) => {
    if (!selectedSearch.includes(genero)) {
      setSelectedSearch([...selectedSearch, genero])
      onSelectionChange([...selectedSearch, genero])
      setSearch('')
    }
  }

  const handleClick = () => {
    inputRef.current.focus()
  }

  const removeSelected = (selected) => {
    const newSelectedSearch = selectedSearch.filter((s) => s !== selected)
    setSelectedSearch(newSelectedSearch)
    onSelectionChange(newSelectedSearch)
  }

  const handleInputFocus = () => {
    setInputActive(!inputActive)
  }

  const handleInputBlur = () => {
    setInputActive(false)
  }
  return (
    <>
      <label htmlFor={title}>{title}</label>
      <div onClick={handleClick} style={{ border: '1px solid red' }}>
        <ul>
          {selectedSearch.map((selected) => (
            <li key={selected}>
              <span
                style={{ cursor: 'pointer', border: '1px solid blue' }}
                onClick={() => removeSelected(selected)}
              >
                {selected} ❌
              </span>
            </li>
          ))}
        </ul>
        <input
          ref={inputRef}
          onFocus={handleInputFocus}
          type='text'
          placeholder='Seleccionar ...'
          value={search}
          onChange={handleInputChange}
        />
      </div>
      {inputActive && (
        <ul onBlur={handleInputBlur} tabIndex={0}>
          {arrayOptions.map((option, index) => (
            <li
              style={{ cursor: 'pointer' }}
              key={index}
              onClick={() => {
                addSelected(option)
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
