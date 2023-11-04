import { useEffect, useState } from 'react'
import { supabase } from '../../Supabase/supabase.config'
import { useNavigate } from 'react-router-dom'
export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (!supabase.auth.getUser()) {
      navigate('/login')
    }
  }, [navigate])

  async function signUpNewUser(e) {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          redirectTo: 'https://mail.google.com/mail',
        },
      })
      if (error) console.log(error)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function signInWithEmail(e) {
    e.preventDefault()
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex-container'>
      <div className='caja'>
        <form className='Form'>
          <h2 className='Large'>Login</h2>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            className='input'
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            className='input'
          />
          <button onClick={signInWithEmail} className='submit'>
            Iniciar Sesión
          </button>
          <button onClick={signUpNewUser} className='submit'>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  )
}
