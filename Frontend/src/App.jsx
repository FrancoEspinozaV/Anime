import { Nav } from '../component/Nav'
import { Rutas } from '../component/Rutas'
import { ContextProvider } from './context/Context'

function App() {
  return (
    <ContextProvider>
      <Nav />
      <Rutas />
    </ContextProvider>
  )
}

export default App
