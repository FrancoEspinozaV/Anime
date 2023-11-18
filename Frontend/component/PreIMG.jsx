export function PreIMG({ data }) {
  const { URL, Nombre, Capitulo, Descripcion } = data
  return (
    <div className='Alertas test2'>
      <img
        className='img-home preview'
        src={`${URL}`}
        alt={`Imagen de ${Nombre}`}
      />
      <span className='abs'>
        {Nombre}
        <br />
        <br />
        {Descripcion}
      </span>
      <span className='name-anime'>
        {Nombre} {Capitulo}
      </span>
    </div>
  )
}
