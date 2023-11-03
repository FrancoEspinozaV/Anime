
export function Login() {
  return (
      <div className="flex-container">
          <form className="Form caja">
              <a className="Large" >Login</a>
              <input type="text" 
              className="input" placeholder="   Correo Electrónico"/>
              <input type="password" className="input" placeholder="   Contraseña" />
              <button className="submit">Iniciar sesión</button>
              <button className="submit">Registrarse</button>
          </form>
      </div>
  )
}


