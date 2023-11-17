export function PreIMG({ data }) {
  const { URL, Nombre, Capitulo, Descripcion } = data
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img
        style={{ width: '150px' }}
        src={`${URL}`}
        alt={`Imagen de ${Nombre}`}
      />
      <span>{Descripcion}</span>
      <span>
        {Nombre} {Capitulo}
      </span>
    </div>
  )
}
