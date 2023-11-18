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
    <div className='bg-img'>
      <div className='bg-gradient'>
        <h2>Ejemplo de como traer cosas de la base de datos</h2>
        <ul className='grid-home'>
          {lastChapters.map((data, index) => (
            <li key={index} className='img-home'>
              <PreIMG data={data} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
