import { useEffect } from 'react'
import { useContextPage } from '../context/Context'
import { OnePiece } from '../../component/OnePiece'

export function Home() {
  const { getUser } = useContextPage()
  useEffect(() => {
    getUser()
  }, [])

  return (
    <div className='flex-container2'>
      <div className='slider'></div>
      <div className='fade'>
        <OnePiece />
      </div>
    </div>
  )
}
