export function PopularAnime({ data }) {
  const { URL, Nombre, Descripcion } = data
  return (
    <>
      <section>
        <figure>
          <img src={`${URL}`} />
        </figure>
        <span>{Descripcion}</span>
        <span>{Nombre}</span>
      </section>
    </>
  )
}
