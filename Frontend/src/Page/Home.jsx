import { useEffect } from 'react'
import { useContextPage } from '../context/Context'

export function Home() {
  const { getUser } = useContextPage()
  useEffect(() => {
    getUser()
  }, [])
  return <h2>Home</h2>
}
