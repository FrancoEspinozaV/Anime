import { useEffect } from 'react'
import { useContextPage } from '../context/Context'
import { PreIMG } from '../../component/PreIMG'
export function Home() {
  const { getUser, getLastChapters, lastChapters } = useContextPage()
  useEffect(() => {
    getLastChapters()
    getUser()
  }, [])
  return (
    <>
      <h2>Ejemplo de como traer cosas de la base de datos</h2>
      <br />
      <ul style={{ display: 'flex', flexDirection: 'row' }}>
        {lastChapters.map((data, index) => (
          <li key={index}>
            <PreIMG data={data} />
          </li>
        ))}
      </ul>
    </>
  )
}
