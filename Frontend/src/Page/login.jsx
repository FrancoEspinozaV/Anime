
export function Login() {
  const anonKey = import.meta.env.VITE_ANON_KEY
  const url = import.meta.env.VITE_URL
  return (
      <div className="flex-container">
        <div className="caja">
          <form className="Form">
              <a1 className="Large" >Login</a1>
              <input type="text" className="input"/>
              <input type="password" className="input"/>
              <button className="submit">Iniciar sesión</button>
              <button className="submit">Registrarse</button>
          </form>
        </div>
      </div>
  )
}


