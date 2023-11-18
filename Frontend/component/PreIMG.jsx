export function PreIMG({ data }) {
  const { URL, Nombre, Capitulo, Descripcion } = data
  return (
    <div className='Alertas test2'>
      <img
        className='img-home preview'
        src={`${URL}`}
        alt={`Imagen de ${Nombre}`}
      />
      <span>{Descripcion}</span>
      <span className='abs'>
        {Nombre} {Capitulo}
      </span>
      <span className='name-anime'>
        {Nombre} {Capitulo}
      </span>
    </div>
  )
}
