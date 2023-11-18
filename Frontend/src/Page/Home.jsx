import { useEffect } from 'react'
import { useContextPage } from '../context/Context'
import { PreIMG } from '../../component/PreIMG'
import { PopularAnime } from '../../component/PopularAnime'
export function Home() {
  const {
    getUser,
    getLastChapters,
    lastChapters,
    getMorePopularAnime,
    morePopularAnime,
  } = useContextPage()
  useEffect(() => {
    getLastChapters()
    getUser()
    getMorePopularAnime()
  }, [])
  return (
    <>
      <h2>Animes Populares</h2>
      <ul>
        {morePopularAnime.map((data, index) => (
          <li key={index}>
            <PopularAnime data={data} />
          </li>
        ))}
      </ul>
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
