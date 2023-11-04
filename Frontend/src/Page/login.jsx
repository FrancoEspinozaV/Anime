import { useState } from 'react'
import { supabase } from '../../Supabase/supabase.config'

const MessageEmail = () => {
  return (
    <span style={{ color: 'red' }}>Se ha enviado un Email de verificación</span>
  )
}

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verification, setVerification] = useState(false)
  const [emptyEmail, setEmptyEmail] = useState(false)
  const [emptyPassword, setEmptyPassword] = useState(false)
  const [isValidPassword, setIsValidPassword] = useState(true)

  async function signUpNewUser(e) {
    e.preventDefault()
    try {
      if (emptyPassword === false && emptyPassword === false) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            redirectTo: 'https://mail.google.com/mail',
          },
        })
        if (error) {
          console.log(error)
          setIsValidPassword(false)
        } else {
          setVerification(true)
        }
      }
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
            onChange={(e) => {
              setEmail(e.target.value)
              if (e.target.value !== '') {
                setEmptyEmail(false)
              } else {
                setEmptyEmail(true)
              }
            }}
            type='email'
            className='input'
          />
          {emptyEmail ? <span>Escriba un correo</span> : undefined}
          <input
            onChange={(e) => {
              setPassword(e.target.value)
              setIsValidPassword(true)
              if (e.target.value !== '') {
                setEmptyPassword(false)
              } else {
                setEmptyPassword(true)
              }
            }}
            type='password'
            className='input'
          />
          {emptyPassword ? <span>Escriba una contraseña</span> : undefined}
          {verification ? <MessageEmail /> : undefined}
          {!isValidPassword ? (
            <span>Ingrese una contraseña valida</span>
          ) : undefined}
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
