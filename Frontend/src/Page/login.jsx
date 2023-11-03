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
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) console.log(error)
      console.log(data)
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
          <button onClick={signUpNewUser} className='submit'>
            Iniciar
          </button>
        </form>
      </div>
    </div>
  )
}
