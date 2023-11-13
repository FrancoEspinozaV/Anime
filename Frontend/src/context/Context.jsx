import { createContext, useContext, useState } from 'react'
import { supabase } from '../../Supabase/supabase.config'

export const Context = createContext()

export const useContextPage = () => {
  const context = useContext(Context)
  if (!context) throw new Error('useTasks must be used within a TaskContext')
  return context
}

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [lastChapters, setLastChapters] = useState([])
  const [loadingChapters, setLoadingChapters] = useState(false)
  // mostrar modal de carga
  const getUser = async () => {
    setLoading(true)
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        const {
          data: { user },
        } = await supabase.auth.getUser()
        const { data, error } = await supabase
          .from('Permisos')
          .select()
          .eq('UUID', user.id)

        if (error) console.log(error)
        setUser(data[0])
        localStorage.setItem('isLoggedIn', true)
        localStorage.setItem('useRol', data[0].Rol)
      }
    })

    setLoading(false)
  }

  const getLastChapters = async (limit = 10) => {
    console.log('ejecutado')
    const { data, error } = await supabase
      .from('InfoIMG')
      .select('Nombre, Capitulo, URL')
      .order('created_at', { ascending: false })
      .limit(limit)

    console.log(data)
    setLastChapters(data)
  }

  return (
    <Context.Provider
      value={{
        getUser,
        user,
        loading,
        getLastChapters,
        lastChapters,
        loadingChapters,
      }}
    >
      {children}
    </Context.Provider>
  )
}
